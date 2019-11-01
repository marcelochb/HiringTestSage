import { isAfter, parseISO } from 'date-fns';
import Pessoa from '../models/Pessoa';

class CreatePessoaService {
  async run({ body }) {
    const { nome, cpf, nascimento } = body;
    const nomeExists = await Pessoa.findOne({ where: { nome } });

    if (nomeExists) {
      throw new Error('Já existe uma pessoa com este nome.');
    }
    const cpfExists = await Pessoa.findOne({ where: { cpf } });

    if (cpfExists) {
      throw new Error('Já existe uma pessoa com este CPF');
    }

    if (isAfter(parseISO(nascimento), new Date())) {
      throw new Error('Data de nascimento invalida');
    }

    const pessoa = await Pessoa.create(body);
    return pessoa;
  }
}

export default new CreatePessoaService();
