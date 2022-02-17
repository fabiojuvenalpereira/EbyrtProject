const sinon = require('sinon');
const { expect } = require('chai');
const { MongoClient } = require('mongodb');

const { dbConnection } = require('./utils/mockConnection');
const { mockTask } = require('./utils/mockTask')
const tasksModel = require('../src/models/task.model');

describe('Camada model: task create', () => {
  let connectionMock;

  before(async () => {
    connectionMock = await dbConnection();
    sinon.stub(MongoClient, 'connect').resolves(connectionMock);
  });


  after(async () => {
    await connectionMock.db('ebytr').collection('tasks').drop();
    MongoClient.connect.restore();
  })
  
  it('retorna um objeto, com que possui um id da task criada', async () => {
    await tasksModel.createTask(mockTask);

    const createTask = await connectionMock
      .db('ebytr')
      .collection('tasks')
      .find({ userName: mockTask.userName });
      
    expect(createTask).to.have.property('id');
  })
});


