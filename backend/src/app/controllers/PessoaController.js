import CreatePessoaService from '../Services/CreatePessoaService';
import UpdatePessoaService from '../Services/UpdatePessoaService';

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
}

export default new PessoaController();
