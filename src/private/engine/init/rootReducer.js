import { combineReducers } from 'redux';
import { postsReducer } from '../core/postsData/reducers';
import { postDataReducer } from '../core/postData/reducers';

export const rootReducers = () => combineReducers({
	postsReducer,
	postDataReducer,
});
