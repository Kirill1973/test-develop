import { asyncTypes } from './asyncTypes';

export const asyncActions = Object.freeze({
	onGetPostAsync: id => ({
		type: asyncTypes.GET_POST_DATA_ASYNC,
		payload: id,
	}),
	onUpdatePost: (id, body) => ({
		type: asyncTypes.UPDATE_POST_ASYNC,
		payload: body,
		idx: id,
	}),
  onAddComment: (id, data) => ({
    type: asyncTypes.ADD_COMMENT_ASYNC,
    payload: data,
    idx: id,
  }),
});