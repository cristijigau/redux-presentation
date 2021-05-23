import { applyMiddleware, combineReducers, createStore } from 'redux';
import appReducer from './reducers/appReducer';

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

const middlewares = [loggerMiddleWare, thunk];
export default createStore(combineReducers({ app: appReducer }), applyMiddleware(...middlewares));
