import request from 'supertest';
import app from '../../src/app';

import truncate from '../util/truncate';
import factory from '../factories';

describe('Pessoa-Create', () => {
  beforeEach(async () => {
    await truncate();
  });

  it('should not be able register (on Model) without field', async () => {
    try {
      await factory.create('Pessoa', {
        nome: '',
      });
    } catch (err) {
      expect(err).toMatchObject(Error('nome required'));
    }
  });

  it('should not be able register by request without field', async () => {
    const pessoa = await factory.attrs('Pessoa');
    pessoa.nome = '';

    const response = await request(app)
      .post('/pessoas')
      .send(pessoa);

    expect(response.body.message[0]).tobe('nome is a required field');
  });

  it('should not be able register duplicate field', async () => {
    /**
     * Cria na tabela uma Pessoa fake
     */
    const pessoa = await factory.create('Pessoa');

    /**
     * Tenta Criar outra Pessa com os mesmo dados
     */
    const response = request(app)
      .post('/pessoas')
      .send(pessoa);

    expect(response.body.error).tobe('Nome da pessoa já existe.');
  });

  it('should be able register', async () => {
    const pessoa = await factory.attrs('Pessoa');

    const response = await request(app)
      .post('/pessoas')
      .send(pessoa);

    expect(response.body).toHaveProperty('id');
  });
});

describe('Pessoa-Update', () => {
  beforeEach(async () => {
    await truncate();
  });

  it('should not be able Update without field', async () => {
    /**
     * Cria uma primeira pessoa fake na Tabela
     */
    const { nome } = await factory.create('Pessoa');
    /**
     * Cria uma segunda pessoa fake na Tablea
     */
    const { id } = await factory.create('PessoaDiferente');

    /**
     * Tenta alterar os dados da primeira pessoa,
     * com os dados da segnda pessoa
     */
    const response = await request(app)
      .put(`/pessoas/${id}`)
      .send({ nome });

    expect(response.body.error).tobe('Nome da pessoa já existe');
  });

  it('should be able update field', async () => {
    /**
     * Cria uma primeira pessoa fake na Tabela
     */
    await factory.create('Pessoa');
    /**
     * Cria uma segunda pessoa fake na Tablea
     */
    const { id } = await factory.create('PessoaDiferente');

    /**
     * Tenta alterar os dados da primeira pessoa,
     * com os dados da segnda pessoa
     */
    const response = await request(app)
      .put(`/pessoas/${id}`)
      .send({ nome: 'Nome alterado' });

    expect(response.body.nome).tobe('Nome alterado');
  });
});

describe('Pessoa-List', () => {
  beforeEach(async () => {
    await truncate();
  });

  it('should be able list fields', async () => {
    await factory.create('Pessoa');
    await factory.create('PessoaDiferente');

    const response = request(app).get('/pessoas');

    expect(response.body).toHaveLength(2);
  });
});

describe('Pessoa-Delete', () => {
  beforeEach(async () => {
    await truncate();
  });

  it('should be able delete field', async () => {
    const { id } = await factory.create('Pessoa');

    const response = await request(app).delete(`/pessoas/${id}`);

    expect(response.status).tobe(200);
  });
});
