import { put, apply, call } from 'redux-saga/effects';

import { api } from '../../../../config/api';

import { actions } from '../../actions';

export function* addComment({ payload: data, idx: id }) {
  const response = yield apply(api, api.addComment, [data]);
  if (response.status >= 200 || response.status < 300) {
    const responseTwo = yield apply(api, api.getPost, [id]);
    const bodyTwo = yield call([responseTwo, 'json']);
    yield put(actions.onDataSuccess(bodyTwo));
  } else {
    yield put(actions.onDataFail(response));
  }
}
