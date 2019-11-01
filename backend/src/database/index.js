import Sequelize from 'sequelize';

import databaseConfig from '../config/database';
import Pessoa from '../app/models/Pessoa';

const models = [Pessoa];

class Database {
  constructor() {
    this.connection = new Sequelize(databaseConfig);
    this.init();
  }

  init() {
    models.forEach(model => model.init(this.connection));
  }
}

export default new Database();
