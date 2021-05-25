import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { sagaMiddleware } from './redux/store';

import App from './App';
import store from './redux/store';
import { watchIncrementAsync } from './redux/saga/sagas';

const reduxApp = (
  <Provider store={store}>
    <App />
  </Provider>
);

sagaMiddleware.run(watchIncrementAsync);

ReactDOM.render(reduxApp, document.getElementById('root'));
