const tasksServices = require('../services/task.services');

const createTask = async (req, res, next) => {
  const { userName, taskContent, date, status } = req.body;
  try {
    const createdTask = await tasksServices.createTask(userName, taskContent, date, status);
    return res.status(createdTask.status).json(createdTask.content);
  } catch (error) {
    console.log(error);
    next(error);
  }
};

const findAllTasks = async (_req, res, next) => {
  try {
    const foundTasks = await tasksServices.findAllTasks();
    return res.status(foundTasks.status).json(foundTasks.content);
  } catch (error) {
    console.log();
    next(error);
  }
};


const deleteTask = async (req, res, next) => {
  const { id } = req.params;
  try {
    const deleted = await tasksServices.deleteTask(id);
    return res.status(deleted.status).json(deleted.content);
  } catch (error) {
    console.log();
    next(error);
  }
}

module.exports = {
  createTask,
  findAllTasks,
  deleteTask,
};