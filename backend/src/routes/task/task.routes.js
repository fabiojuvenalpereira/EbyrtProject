const express = require('express');
const taskController = require('../../controllers/task.controller');

const taskRouter = express.Router();

taskRouter.use('/createTask', taskController.createTask);

module.exports = taskRouter;