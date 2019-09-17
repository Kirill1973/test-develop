import { all, takeLatest } from 'redux-saga/effects';

import { asyncTypes } from './asyncTypes';

import { getPostsData } from './workers/getPostsData';
import { addPost } from './workers/addPost';
import { deletePost } from './workers/deletePost';

function* watchGetPosts() {
	yield takeLatest(asyncTypes.GET_ASYNC_DATA_POSTS, getPostsData);
}

function* watchAddPost() {
	yield takeLatest(asyncTypes.ADD_POST_ASYNC, addPost);
}

function* watchDeletePost() {
	yield takeLatest(asyncTypes.DELETE_POST_ASYNC, deletePost);
}

export function* watcherPostsData() {
	yield all([
		watchGetPosts(),
		watchAddPost(),
		watchDeletePost(),
	])
}