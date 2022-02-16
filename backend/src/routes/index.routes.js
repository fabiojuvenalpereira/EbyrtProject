const express = require('express');
const tasksRoutes = require('./tasks/tasks.routes');

const Router = express.Router();

Router.use('/', tasksRoutes);


module.exports = Router;