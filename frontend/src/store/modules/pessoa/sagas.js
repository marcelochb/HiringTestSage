import { all, takeLatest, call } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import api from '~/services/api';

export function* createPessoa({ payload }) {
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
    } = payload;

    yield call(api.post, 'pessoas', {
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

    toast.success('Cadastro realizado com sucesso.');
  } catch (err) {
    toast.error('Erro ao cadastrar, confira seus dados.');
  }
}

export default all([takeLatest('@pessoa/CREATE_REQUEST', createPessoa)]);
