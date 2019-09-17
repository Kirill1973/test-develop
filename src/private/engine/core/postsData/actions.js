import { types } from './types';

const actions = Object.freeze({
	onDataSuccess: body => ({
		type: types.GET_DATA_SUCCESS,
		payload: body,
	}),
	onDataFail: error => ({
		type: types.GET_DATA_FAIL,
		payload: error,
	})
});

export { actions }