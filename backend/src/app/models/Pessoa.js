import Sequelize, { Model } from 'sequelize';

class Pessoa extends Model {
  static init(sequelize) {
    super.init(
      {
        nome: Sequelize.STRING,
        cpf: Sequelize.STRING,
        nascimento: Sequelize.DATE,
        cep: Sequelize.STRING,
        rua: Sequelize.STRING,
        bairro: Sequelize.STRING,
        cidade: Sequelize.STRING,
      },
      {
        sequelize,
      }
    );
    return this;
  }
}

export default Pessoa;
