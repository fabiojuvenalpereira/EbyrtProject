const connection = require('./connection');

const createTask = async (userTask) => {
  const conn = await connection();
  await conn.collection('tasks').insertOne(userTask);

  return { ...userTask };
};

const getAllTasks = async () => {
  const conn = await connection();
  const foundTasks = await conn.collection('tasks').find({}).toArray();
  return foundTasks ;
}

const deleteTask = async (taskId) => {
  const conn = await connection();
  const deleted = await conn.collection('tasks').deleteOne({ _id: taskId });
  return deleted;
}

const updateTask = async (userId, taskContent, status, date) => {
  const conn = await connection();
  const updatedTask = await conn.collection('tasks').findOneAndUpdate(
    { _id: userId },
    { $set: { taskContent, date, status } },
    { returnOriginal: false },
  );
  return updatedTask.value;
}

const findTaskById = async (id) => {
  const conn = await connection();
  const foundTask = await conn.collection('tasks').findOne({ _id : id });
  return foundTask;
};

module.exports = {
  createTask,
  getAllTasks,
  deleteTask,
  updateTask,
  findTaskById,
}