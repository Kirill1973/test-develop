import { all, call } from 'redux-saga/effects';
import { watcherPostsData } from '../core/postsData/saga/watchers';
import { watcherPostData } from '../core/postData/saga/watchers';

export function* rootSaga(dispatch, getState) {
  yield all([
   call(watcherPostsData, getState),
	 call(watcherPostData, getState),
  ]);
}