import CreatePessoaService from '../Services/CreatePessoaService';

class PessoaController {
  async store(req, res) {
    try {
      const pessoa = await CreatePessoaService.run({ body: req.body });

      return res.json(pessoa);
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  }
}

export default new PessoaController();
