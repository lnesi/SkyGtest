import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './components/app';
import {connectSocket} from './actions';

import store from './store';

store.dispatch(connectSocket());

ReactDOM.render(

  <Provider store={store}>
  	<App />
  </Provider>
  , document.querySelector('.container'));
