import { Router } from 'express';

import PessoaController from './app/controllers/PessoaController';

import validatePessoaStore from './app/Validators/PessoaStore';
import validatePessoaUpdate from './app/Validators/PessoaUpdate';

const routes = new Router();

routes.get('/pessoas', PessoaController.index);
routes.post('/pessoas', validatePessoaStore, PessoaController.store);
routes.put('/pessoas/:id', validatePessoaUpdate, PessoaController.update);
routes.delete('/pessoas/:id', PessoaController.destroy);

export default routes;
