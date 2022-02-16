const express = require('express');
const taskController = require('../../controllers/task.controller');

const taskRouter = express.Router();

taskRouter.post('/createTask', taskController.createTask);
taskRouter.get('/', taskController.findAllTasks);
taskRouter.delete('/:id', taskController.deleteTask);
taskRouter.put('/updateTask', taskController.updateTask);

module.exports = taskRouter;