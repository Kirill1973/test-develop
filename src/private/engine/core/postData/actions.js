import { types } from './types';

export const actions = Object.freeze({
	onDataSuccess: body => ({
		type: types.GET_POST_DATA_SUCCESS,
		payload: body
	}),
	onDataFail: body => ({
		type: types.GET_POST_DATA_FAIL,
		payload: body
	}),
});