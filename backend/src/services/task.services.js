// const taskModel = require('../models/task.model');
const { validateTaskEntries } = require('./utils');

const createTask = async (userName, taskContent, date, status) => {
  const taskUser =  { userName, taskContent, date, status };
  
  const notIsValid = await validateTaskEntries(taskUser);
  if (notIsValid) return { status: notIsValid.status, content: { message: notIsValid.message }}

  
  // const createdTask = await taskModel.createTask(taskUser)
  return { status: 200, content: 'createdTask' }
};

module.exports = {
  createTask,
};