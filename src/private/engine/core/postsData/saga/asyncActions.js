import { asyncTypes } from './asyncTypes';

export const asyncActions = Object.freeze({
	onGetDataAsyncPosts: () => ({
		type: asyncTypes.GET_ASYNC_DATA_POSTS,
	}),
	onAddPostAsync: body => ({
		type: asyncTypes.ADD_POST_ASYNC,
		payload: body,
	}),
	onDeletePostAsync: id => ({
		type: asyncTypes.DELETE_POST_ASYNC,
		payload: id,
	}),
});