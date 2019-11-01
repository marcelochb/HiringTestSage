import { Router } from 'express';

import PessoaController from './app/controllers/PessoaController';

import validatePessoaStore from './app/Validators/PessoaStore';

const routes = new Router();

routes.post('/pessoas', validatePessoaStore, PessoaController.store);

export default routes;
