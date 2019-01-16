import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Counter from './components/basicComponent'
import {createStore} from 'redux'
import {Provider} from 'react-redux';
import * as serviceWorker from './serviceWorker';


function counter(state=0, action) {

switch (action.type){
    case "Increment" :{
       return state += action.payload;
    }
    case "Decrement" :{
        return state -=action.payload;
    }
    default:{
         return state;
    }  
}
}

let store = createStore(counter);

store.subscribe(() => {
    console.log(store.getState())
  })

// store.dispatch({type:"Increment"})
// store.dispatch({type:"Increment"})
// store.dispatch({type:"Increment"})
// store.dispatch({type:"Decrement"})

export default counter;


ReactDOM.render(
<Provider store={store}>
    <Counter/>
</Provider>
    
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
