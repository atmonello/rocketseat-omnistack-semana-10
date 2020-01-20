const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config({
  path: process.env.NODE_ENV === 'development' ? '.env.development' : '.env'
});

const routes = require('./routes');

const port = process.env.APP_PORT || 3333;
const name = process.env.APP_NAME || 'atmonello-omnistack10';

const app = express();

mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0-uggky.mongodb.net/week-10?retryWrites=true&w=majority`, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(port);

console.log(`${name} is running on port ${port}`);
