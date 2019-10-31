import Sequelize, { Model } from 'sequelize';

class Meetup extends Model {
  static init(sequelize) {
    super.init(
      {
        nome: Sequelize.STRING,
        sobrenome: Sequelize.STRING,
        cpf: Sequelize.STRING,
        data_nascimento: Sequelize.DATE,
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

export default Meetup;
