const Dev = require('../models/Dev');
const parseStringToArray = require('../utils/parseStringToArray');

module.exports = {
  async index(req, res) {
    const { techs } = req.query;

    const techsArray = parseStringToArray(techs);

    const devs = await Dev.find({
      techs: {
        $in: techsArray,
      },
    });

    return res.json({ devs });
  },
};
