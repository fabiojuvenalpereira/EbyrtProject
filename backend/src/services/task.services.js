const taskModel = require('../models/task.model');
const { validateTaskEntries, idConvertedAndValid } = require('./utils');


const createTask = async (userName, taskContent, date, statusTask) => {
  const taskUser =  { userName, taskContent, date, statusTask };

  const isNotValid = await validateTaskEntries(taskUser);
  if (isNotValid) return { status: isNotValid.status, content: { message: isNotValid.message }}

  const createdTask = await taskModel.createTask(taskUser)
  return { status: 201, content: createdTask }
};


const findAllTasks = async () => {
  const foundTasks = await taskModel.getAllTasks();

  return { status: 200, content: foundTasks }
};


const deleteTask = async (taskId) => {
  const validId = await idConvertedAndValid(taskId)
  if (!validId) return { status: 404, content: { message: 'O ID precisa ser válido'} };

  const taskExits = await taskModel.findTaskById(validId);
  if (!taskExits) return { status: 404, content: { message: 'Não existe esta task'} };
  
  const deleted = await taskModel.deleteTask(validId);
  if (!deleted) return { status: 400, content: { message: 'Não foi deletado'} };

  return { status: 200, content: { message:'Tarefa Deletada' } };
};


const updateTask = async (taskId, taskContent, status, date) => {
  const validId = await idConvertedAndValid(taskId)
  if (!validId) return { status: 404, content: { message: 'O ID precisa ser válido'} };

  const taskExits = await taskModel.findTaskById(validId);
  if (!taskExits) return { status: 404, content: { message: 'Não existe esta task'} };

  const updatedTask = await taskModel.updateTask(validId, taskContent, status, date);

  return { status: 200, content: { message: updatedTask } };
}


module.exports = {
  createTask,
  findAllTasks,
  deleteTask,
  updateTask,
};