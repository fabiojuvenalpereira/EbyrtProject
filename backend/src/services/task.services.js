const taskModel = require('../models/task.model');

const createTask = async (userName, taskContent, date, status) => {
  const taskUser =  { userName, taskContent, date, status };
  const createdTask = await taskModel.createTask(taskUser)
  return { status: 200, content: createdTask }
};

module.exports = {
  createTask,
};