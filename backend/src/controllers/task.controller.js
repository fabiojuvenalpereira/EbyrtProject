const tasksServices = require('../services/task.services');

const createTask = async (req, res, next) => {
  const { userName, taskContent, date, status } = req.body;
  try {
    const createdTask = await tasksServices.createTask(userName, taskContent, date, status);
    return res.status(createdTask.status).json(createdTask.content)
  } catch (error) {
    console.log(error);
    next(error);
  }
};

module.exports = {
  createTask,
};