const connection = require('./connection');

const createTask = async (userTask) => {
  const conn = await connection();
  const { insertedId: id } = await conn.collection('tasks').insertOne({userTask});

  return { id, ...userTask };
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

module.exports = {
  createTask,
  getAllTasks,
  deleteTask,
}