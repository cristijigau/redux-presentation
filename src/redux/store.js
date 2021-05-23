import { combineReducers, createStore } from 'redux';
import appReducer from './reducers/appReducer';

export default createStore(combineReducers({ app: appReducer }));
