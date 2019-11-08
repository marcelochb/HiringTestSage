import CreatePessoaService from '../Services/CreatePessoaService';
import UpdatePessoaService from '../Services/UpdatePessoaService';
import Pessoa from '../models/Pessoa';

class PessoaController {
  async store(req, res) {
    try {
      const {
        nome,
        sexo,
        cpf,
        nascimento,
        cep,
        rua,
        numero,
        bairro,
        cidade,
      } = req.body;
      const pessoa = await CreatePessoaService.run({
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

      return res.json(pessoa);
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  }

  async update(req, res) {
    try {
      const {
        nome,
        sexo,
        cpf,
        nascimento,
        cep,
        rua,
        numero,
        bairro,
        cidade,
      } = req.body;
      const { id } = req.params;
      const pessoa = await UpdatePessoaService.run({
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
      });

      return res.json(pessoa);
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  }

  async index(req, res) {
    const page = req.query.page || 1;

    const pessoas = await Pessoa.findAll({
      order: ['nome'],
      limit: 5,
      offset: 5 * page - 5,
    });

    return res.json(pessoas);
  }

  async destroy(req, res) {
    const { id } = req.params;
    const pessoa = await Pessoa.findByPk(id);
    await pessoa.destroy();

    return res.send();
  }
}

export default new PessoaController();
