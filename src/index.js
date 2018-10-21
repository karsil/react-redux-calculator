import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


//import { combineReducers, createStore } from 'redux'
import {createStore} from 'redux'
import { Provider } from 'react-redux'
import App from './App';

import reducers from './reducers/reducers'
/*
const allReducers = combineReducers({
    //products: productsReducer,
    //user: userReducer
})
*/

const store = createStore(
    reducers,
    /*
    allReducers, 
    {
        input: 0,
        acc: null,
        pendingOp: null,
    },
    */
    window.devToolsExtension && window.devToolsExtension()
)

console.log(store.getState())

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);

