import { Map } from 'immutable';

import { types } from './types';

const initialState = Map({
  loading: true,
  item: {},
  error: ''
});

export const postDataReducer = (state = initialState, { payload, type }) => {
  switch (type) {
    case types.GET_POST_DATA_SUCCESS:
      return state.merge({ item: payload, error: '', loading: false });
    case types.GET_POST_DATA_FAIL:
      return state.merge({ item: {}, error: payload, loading: false });
    default:
      return state;
  }
};
