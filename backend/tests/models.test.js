const sinon = require('sinon');
const { expect } = require('chai');
const { MongoClient } = require('mongodb');

const { dbConnection } = require('./utils/mockConnection');
const { mockTask } = require('./utils/mockTask')
const tasksModel = require('../src/models/task.model');

describe('Quando adiciona uma nova task no banco de dados', () => {
  let connectionMock;

  before(async () => {
    connectionMock = await dbConnection();
    sinon.stub(MongoClient, 'connect').resolves(connectionMock);
  });


  after(async () => {
    await connectionMock.db('ebytr').collection('tasks').drop();
    MongoClient.connect.restore();
  })


  it('retorna um objeto, com as informações da task criada', async () => {
    await tasksModel.createTask(mockTask);

    const taskCreated = await connectionMock
      .db('ebytr')
      .collection('tasks')
      .find({ userName: mockTask.userName });
      
    expect(taskCreated).to.have.property('id');
  })
});
