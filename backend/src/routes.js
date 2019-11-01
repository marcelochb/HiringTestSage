import { Router } from 'express';

import PessoaController from './app/controllers/PessoaController';

import validatePessoaStore from './app/Validators/PessoaStore';
import validatePessoaUpdate from './app/Validators/PessoaUpdate';

const routes = new Router();

routes.post('/pessoas', validatePessoaStore, PessoaController.store);
routes.put('/pessoas/:id', validatePessoaUpdate, PessoaController.update);

export default routes;
