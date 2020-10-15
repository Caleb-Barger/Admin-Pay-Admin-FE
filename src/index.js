import React from 'react';
import {createStore, applyMiddleware} from 'redux'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import {Provider} from 'react-redux'
import reducer from './store/reducers'
import ReactDOM from 'react-dom';
import './index.css';
import SiderDemo from './SiderDemo';
import 'antd/dist/antd.css'; 

const store = createStore(reducer, applyMiddleware(logger, thunk))

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <SiderDemo />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

