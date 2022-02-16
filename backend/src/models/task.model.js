const connection = require('./connection');

const createTask = async (userTask) => {
  const conn = await connection();
  const { insertedId: id } = await conn.collection('tasks').insertOne({userTask});

  return { id, ...userTask };
};


module.exports = {
  createTask,
}