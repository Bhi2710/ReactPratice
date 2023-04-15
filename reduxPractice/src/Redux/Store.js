import { applyMiddleware, legacy_createStore } from 'redux';
import logger  from 'redux-logger';
import basicReducer from './Reducer';

const myStore = legacy_createStore(basicReducer, applyMiddleware(logger));

export default myStore;
