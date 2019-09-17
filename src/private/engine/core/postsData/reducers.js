import { Map } from 'immutable';

import { types } from './types';

const initialState = Map({
	posts: [],
	error: '',
	loading: true,
});

export const postsReducer = (state = initialState, { payload, type }) => {
	switch (type) {
		case types.GET_DATA_SUCCESS:
			return state.merge({posts: payload, error: '', loading: false});
		case types.GET_DATA_FAIL:
			return state.merge({posts: [], error: payload, loading: false});
		default:
			return state;
	}
};