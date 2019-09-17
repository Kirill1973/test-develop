import { put, apply, call } from 'redux-saga/effects';

import { api } from '../../../../config/api';

import { actions } from '../../actions';

export function* addPost({ payload: data }) {
	const response = yield apply(api, api.addPost, [data]);
	if (response.status >= 200 || response.status < 300) {
		const responseTwo = yield apply(api, api.getPosts);
		const bodyTwo = yield call([responseTwo, 'json']);
		yield put(actions.onDataSuccess(bodyTwo));
	} else {
		yield put(actions.onDataFail(response))
	}
}