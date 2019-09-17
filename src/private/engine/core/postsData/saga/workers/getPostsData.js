import { put, call, apply } from 'redux-saga/effects';
import { api } from '../../../../config/api';
import { actions } from '../../actions';

export function* getPostsData() {
	const data = yield apply(api, api.getPosts);
	const body = yield call([data, 'json']);
	if (data.status === 200) {
		yield put(actions.onDataSuccess(body))
	} else {
		yield put(actions.onDataFail(data))
	}
}