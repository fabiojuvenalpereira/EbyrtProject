const connection = require('./connection');

const createTask = async (userObject) => {
  const conn = await connection();
  const { insertedId: id } = await conn.collection('tasks').insertOne({ userObject });

  return { id };
};


module.exports = {
  createTask,
}