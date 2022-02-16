const taskModel = require('../models/task.model');
const { validateTaskEntries } = require('./utils');
const { ObjectId } = require('mongodb');

const createTask = async (userName, taskContent, date, status) => {
  const taskUser =  { userName, taskContent, date, status };
  
  const notIsValid = await validateTaskEntries(taskUser);
  if (notIsValid) return { status: notIsValid.status, content: { message: notIsValid.message }}

  
  const createdTask = await taskModel.createTask(taskUser)
  return { status: 200, content: createdTask }
};

const findAllTasks = async () => {
  const foundTasks = await taskModel.getAllTasks();
  
  return { status: 200, content: foundTasks }
};

const deleteTask = async (taskId) => {
  const id = ObjectId(taskId);
  

  const deleted = await taskModel.deleteTask(id);
  if (!deleted) return { status: 400, content: { message: 'Não foi deletado'} };
  
  return { status: 200, content: { message:'Tarefa Deletada' } };
};

module.exports = {
  createTask,
  findAllTasks,
  deleteTask,
};