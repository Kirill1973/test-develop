import { put, call, apply } from 'redux-saga/effects';

import { api } from '../../../../config/api';

import { actions } from '../../actions';

export function* getPost({ payload: id }) {
	const response = yield apply(api, api.getPost, [id]);
	const body = yield call([response, 'json']);
	if (response.status >= 200 || response.status < 300) {
		yield put(actions.onDataSuccess(body))
	} else {
		yield put(actions.onDataFail(response))
	}
}