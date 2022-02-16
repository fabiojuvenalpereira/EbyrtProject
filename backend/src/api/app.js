const express = require('express');
const Routes = require('../routes/index.routes');

const app = express();

app.use(express.json());

app.use(Routes);


module.exports = app;