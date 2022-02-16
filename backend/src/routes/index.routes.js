const express = require('express');
const taskRouter = require('../routes/task/task.routes');

const Router = express.Router();

Router.use('/', taskRouter);

module.exports = Router;