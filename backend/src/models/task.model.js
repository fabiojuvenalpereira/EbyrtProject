const connection = require('./connection');

const createTask = async (userTask) => {
  const conn = await connection();
  const { insertedId: id } = await conn.collection('tasks').insertOne({userTask});

  return { id, ...userTask };
};


const getAllTasks = async () => {
  const conn = await connection();
  const foundTasks = await conn.collection('tasks').find({});
  
  return { foundTasks };
}

module.exports = {
  createTask,
  getAllTasks,
}