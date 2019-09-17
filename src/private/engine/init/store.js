import { createStore, applyMiddleware, compose } from 'redux';

import { rootReducers } from './rootReducer';
import { rootSaga } from './rootSaga';
import {
  sagaMiddleware, dev, middleware
} from './middlewares';

const devtools = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__; // eslint-disable-line
const composeEnhancers = dev && devtools ? devtools : compose;

const store = createStore(
  rootReducers(),
  composeEnhancers(applyMiddleware(...middleware)),
);

sagaMiddleware.run(rootSaga, store.dispatch, store.getState);

export { store };