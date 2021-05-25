import { applyMiddleware, combineReducers, createStore } from 'redux';
import appReducer from './reducers/appReducer';
import createSagaMiddleware from 'redux-saga';

const loggerMiddleWare = (store) => (next) => (action) => {
  console.log('first logger');
  console.log({ currentState: store.getState(), action });
  next(action);
};

const thunk = (store) => (next) => (action) => {
  console.log('thunk');
  if (typeof action === 'function') {
    return action(store.dispatch);
  }

  return next(action);
};

export const sagaMiddleware = createSagaMiddleware();

const middlewares = [loggerMiddleWare, thunk, sagaMiddleware];
export default createStore(combineReducers({ app: appReducer }), applyMiddleware(...middlewares));
