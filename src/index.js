import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { legacy_createStore as createStore } from 'redux';
import App from './App';
import likeReducer from './reducers'
import {devToolsEnhancer} from 'redux-devtools-extension'
import { Provider } from 'react-redux' 

const store = createStore(likeReducer, devToolsEnhancer());


ReactDOM.render(

    <BrowserRouter><Provider store={store}><App /></Provider></BrowserRouter>, document.getElementById('root')
);
