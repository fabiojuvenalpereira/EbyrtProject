const sinon = require('sinon');
const chai = require('chai');
const chaiHttp = require('chai-http');

const { expect } = require('chai');
const { MongoClient } = require('mongodb');

chai.use(chaiHttp);

const { dbConnection } = require('./utils/mockConnection');
const { mockTask } = require('./utils/mockTask')
const tasksController = require('../src/controllers/task.controller');
const server = require('../src/api/app');

describe('Camada Controller: task create', () => {
  let connectionMock;

  before(async () => {
    connectionMock = await dbConnection();
    sinon.stub(MongoClient, 'connect').resolves(connectionMock);
  });
  
  after(async () => {
    MongoClient.connect.restore();
  });

  describe('Controler: createTask', () => {
    describe('quando não possui um objeto', () => {
      let response;
      
      before(async () => {
        response = await chai.request(server)
          .post('/')
          .send({});
      });

      it('retorna o status 400',() => {
        expect(response).to.have.status(400);
      });

      it('espera que o corpo da requisição seja um objeto', () => {
        expect(response.body).to.be.an('object');
      });
    });

    describe('quando posssui um objeto', () => {
      before(async () => {
        response = await chai.request(server)
          .post('/')
          .send(mockTask);
      });

      it('espera que tenha a propriedade "userName"',() => {
        expect(response.body).to.have.property('userName');
      });
      
      it('espera que tenha a "taskContent" ',() => {
        expect(response.body).to.have.property('taskContent');
      });

      it('espera que tenha a propriedade "date"',() => {
        expect(response.body).to.have.property('date');
      });

      it('espera que tenha a propriedade "statusTask"',() => {
        expect(response.body).to.have.property('statusTask');
      });

      it('retorna o status 201',() => {
        expect(response).to.have.status(201);
      });

    });
  })
});
