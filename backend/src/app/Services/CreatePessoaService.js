import { isAfter, parseISO } from 'date-fns';
import Pessoa from '../models/Pessoa';

class CreatePessoaService {
  async run({ nome, sexo, cpf, nascimento, cep, rua, numero, bairro, cidade }) {
    const nomeExists = await Pessoa.findOne({ where: { nome } });

    if (nomeExists) {
      throw new Error('Já existe uma pessoa com este nome.');
    }
    const cpfExists = await Pessoa.findOne({ where: { cpf } });

    if (cpfExists) {
      throw new Error('Já existe uma pessoa com este CPF.');
    }

    if (isAfter(parseISO(nascimento), new Date())) {
      throw new Error('Data de nascimento invalida.');
    }

    const pessoa = await Pessoa.create({
      nome,
      sexo,
      cpf,
      nascimento,
      cep,
      rua,
      numero,
      bairro,
      cidade,
    });
    return pessoa;
  }
}

export default new CreatePessoaService();
