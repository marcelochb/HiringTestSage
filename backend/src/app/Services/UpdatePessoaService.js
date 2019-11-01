import { isAfter, parseISO } from 'date-fns';
import Pessoa from '../models/Pessoa';

class UpdatePessoaService {
  async run({
    id,
    nome,
    sexo,
    cpf,
    nascimento,
    cep,
    rua,
    numero,
    bairro,
    cidade,
  }) {
    const pessoa = await Pessoa.findByPk(id);

    if (!pessoa) {
      throw new Error('Pessoa não encontrada.');
    }

    if (nome && nome !== pessoa.nome) {
      const nomeExists = await Pessoa.findOne({ where: { nome } });

      if (nomeExists) {
        throw new Error('Já existe uma pessoa com este nome.');
      }
    }

    if (cpf && cpf !== pessoa.cpf) {
      const cpfExists = await Pessoa.findOne({ where: { cpf } });

      if (cpfExists) {
        throw new Error('Já existe uma pessoa com este CPF.');
      }
    }

    if (nascimento && nascimento !== pessoa.nascimento) {
      if (isAfter(parseISO(nascimento), new Date())) {
        throw new Error('Data de nascimento invalida.');
      }
    }
    await pessoa.update({
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

export default new UpdatePessoaService();
