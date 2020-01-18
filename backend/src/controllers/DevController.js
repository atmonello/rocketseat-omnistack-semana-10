/* eslint-disable no-undef */
const axios = require('axios');
const Dev = require('../models/Dev');
const parseStringToArray = require('../utils/parseStringToArray');

module.exports = {
  async index(req, res) {
    const devs = await Dev.find();

    if (devs) {
      return res.json(devs);
    }

    return res.status(204).json({ message: 'No devs found!' });
  },

  async store(req, res) {
    const {
      github_username, techs, latitude, longitude,
    } = req.body;

    let dev = await Dev.findOne({ github_username });

    if (!dev) {
      const response = await axios.get(`https://api.github.com/users/${github_username}`);

      const { name = login, avatar_url, bio } = response.data;

      const techsArray = parseStringToArray(techs);

      const location = {
        type: 'Point',
        coordinates: [longitude, latitude],
      };

      dev = await Dev.create({
        github_username,
        name,
        avatar_url,
        bio,
        techs: techsArray,
        location,
      });

      return res.status(201).json(dev);
    }
    return res.status(400).json({ message: `User ${github_username} already exists` });
  },
};
