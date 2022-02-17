const express = require('express');
const Routes = require('../routes/index.routes');
const cors = require('cors');

const app = express();
const PERMITED_URL = process.env.APLICATION_URL || 'http://localhost:3000/'

const CORS_OPTIONS = {
  origin: PERMITED_URL,
  methods: ['POST', 'GET'],
}

app.use(cors(CORS_OPTIONS));

app.use(express.json());

app.use(Routes);


module.exports = app;