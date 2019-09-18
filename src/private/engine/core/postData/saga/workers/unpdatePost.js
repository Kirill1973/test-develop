import { put, call, apply } from 'redux-saga/effects';

import { actions } from '../../actions';

import { api } from '../../../../config/api';

export function* updatePost({ payload: body, idx: id }) {
  const response = yield apply(api, api.updatePost, [id, body]);
  if (response.status >= 200 || response.status < 300) {
    const responseTwo = yield apply(api, api.getPost, [id]);
    const bodyTwo = yield call([responseTwo, 'json']);
    yield put(actions.onDataSuccess(bodyTwo));
  } else {
    yield put(actions.onDataFail(response));
  }
}
