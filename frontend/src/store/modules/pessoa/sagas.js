import { all, takeLatest, call } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import history from '~/services/history';

export function detailPessoa() {
  history.push('/update');
}

export default all([takeLatest('@pessoa/DETAIL_REQUEST', detailPessoa)]);
