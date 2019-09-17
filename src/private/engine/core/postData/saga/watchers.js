import { takeLatest, all } from 'redux-saga/effects';

import { asyncTypes } from './asyncTypes';

import { getPost } from './workers/getPostData';
import { updatePost } from './workers/unpdatePost';

function* watchGetPost() {
	yield takeLatest(asyncTypes.GET_POST_DATA_ASYNC, getPost);
}

function* watchUpdatePost() {
	yield takeLatest(asyncTypes.UPDATE_POST_ASYNC, updatePost)
}

export function* watcherPostData() {
	yield all([
		watchGetPost(),
		watchUpdatePost(),
	])
}