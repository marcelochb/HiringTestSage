import { all, takeLatest } from 'redux-saga/effects';

import history from '~/services/history';

export function detailPessoa() {
  history.push('/update');
}

export default all([takeLatest('@pessoa/DETAIL_REQUEST', detailPessoa)]);
