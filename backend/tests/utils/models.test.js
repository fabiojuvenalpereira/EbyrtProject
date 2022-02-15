const { expect } = require('chai');
// const model = require('model');

const fakeTaskTest = {
  userName: 'testeName',
  task: 'testTask',
  date: Date.now(),
  status: 'testStatus',
};


describe('Quando adiciona uma nova task no banco de dados', () => {
  it('retorna um objeto, com as informações da task', async () => {
    const response = await model.createTask(fakeTaskTest);
    
    expect((response).to.be.a('object'));
  });

  it('o objeto retornado possui um id da task criada', async () => {
    const response  = await model.createTask(fakeTaskTest);

    expect((response).to.have.a.porpety('id'));
  })

});

// testar a conexão com o backend

// quero testar se é possivel fazer uma requisição de post
  // fazer a conexão com o banco e realizar uma requisição de post no endpoint especificado
  // se for possivel deve retornar um objeto
  // se não for possivel retornar erro


// quero testar se é possivel fazer uma requisição de get

// quero testar se é possivel fazer uma requisição de put

// quero testar se é possivel fazer uma requisição de delete


// fazer as requests necessárias para retornar para as camadas anteriores

