const express = require('express');
const taskController = require('../../controllers/task.controller');

const taskRouter = express.Router();

taskRouter.post('/', taskController.createTask);
taskRouter.get('/', taskController.findAllTasks);
taskRouter.delete('/:id', taskController.deleteTask);
taskRouter.put('/', taskController.updateTask);

module.exports = taskRouter;