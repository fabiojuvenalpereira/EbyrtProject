const express = require('express');

const tasksController = require('../../controllers/task.controller')

const taskRouter = express.Router();

taskRouter.post('/createTask', tasksController.createTask);

module.exports = taskRouter;