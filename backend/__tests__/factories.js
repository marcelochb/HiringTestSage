import faker from 'faker';

import { factory } from 'factory-girl';

import Pessoa from '../src/app/models/Pessoa';

factory.define('Pessoa', Pessoa, {
  nome: faker.name.firstName(),
  sobrenome: faker.name.lastName(),
  cpf: faker.random.number(),
  data_nascimento: faker.date.past(),
  cep: faker.address.zipCode(),
  rua: faker.address.streetName(),
  bairro: faker.address.streetAddress(),
  cidade: faker.address.city(),
});
