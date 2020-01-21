const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const isDev = process.env.NODE_ENV === 'development';
const isStaging = process.env.NODE_ENV === 'staging';
const isProduction = process.env.NODE_ENV === 'production'

const loadEnv = () => {
  if (isDev) {
    return '.env.development';
  } else if (isStaging) {
    return '.env.staging';
  } else if (isProduction) {
    return '.env.production';
  }
  return '.env.example';
}

require('dotenv').config({
  path: loadEnv()
});

const routes = require('./routes');

const port = process.env.APP_PORT || process.env.APP_PORT || 3333;
const name = process.env.APP_NAME || 'atmonello-omnistack10';

const databaseURL = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}/${process.env.DB_NAME}?retryWrites=true&w=majority`;

const app = express();

mongoose.connect(databaseURL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(port);

console.log(`${name} is running on port ${port}`);
