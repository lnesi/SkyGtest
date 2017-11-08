import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import promise from 'redux-promise';
import thunk from 'redux-thunk';
import logger from 'redux-logger'

const createStoreWithMiddleware = applyMiddleware(promise,thunk)(createStore);

export default createStoreWithMiddleware(reducers);

