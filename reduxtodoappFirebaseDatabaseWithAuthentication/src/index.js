import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import './services/firebaseconfig'
import store from './store/index'
import {Provider} from 'react-redux'
import App from './App';

ReactDOM.render(
<Provider store={store}>
    <App />
</Provider>    
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
