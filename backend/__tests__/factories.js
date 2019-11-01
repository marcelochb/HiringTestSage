import faker from 'faker';

import { factory } from 'factory-girl';

import Pessoa from '../src/app/models/Pessoa';

factory.define('Pessoa', Pessoa, {
  nome: faker.name.findName(),
  sexo: 'Masculino',
  cpf: faker.random.number(),
  nascimento: faker.date.past(),
  cep: faker.address.zipCode(),
  rua: faker.address.streetName(),
  numero: faker.random.number(),
  bairro: faker.address.streetAddress(),
  cidade: faker.address.city(),
});

factory.define('PessoaDiferente', Pessoa, {
  nome: faker.name.findName(),
  sexo: 'Feminino',
  cpf: faker.random.number(),
  nascimento: faker.date.past(),
  cep: faker.address.zipCode(),
  rua: faker.random.number(),
  numero: faker.random.number(),
  bairro: faker.address.streetAddress(),
  cidade: faker.address.city(),
});
export default factory;
