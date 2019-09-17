import { put, call, apply } from 'redux-saga/effects';

import { actions } from '../../actions';

import { api } from '../../../../config/api';

export function* deletePost({ payload: id }) {
	const response = yield apply(api, api.deletePost, [id]);
	if (response.status >= 200 || response.status < 300) {
		const responseTwo = yield apply(api, api.getPosts);
		const bodyTwo = yield call([responseTwo, 'json']);
		yield put(actions.onDataSuccess(bodyTwo));
	} else {
		yield put(actions.onDataFail(response))
	}
}