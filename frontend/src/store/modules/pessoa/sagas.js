import { all, takeLatest, call } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import api from '~/services/api';
import history from '~/services/history';

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

    history.push('/');
  } catch (err) {
    toast.error('Erro ao cadastrar, confira seus dados.');
  }
}

export function* destroyPessoa({ payload }) {
  try {
    const { id } = payload;
    yield call(api.delete, `pessoas/${id}`);

    toast.success('Pessoa deletada com sucesso.');
  } catch (err) {
    toast.error('Falha ao deletar.');
  }
}

export function detailPessoa() {
  history.push('/update');
}

export default all([
  takeLatest('@pessoa/CREATE_REQUEST', createPessoa),
  takeLatest('@pessoa/DESTROY_REQUEST', destroyPessoa),
  // takeLatest('@pessoa/DETAIL_REQUEST', detailPessoa),
]);
