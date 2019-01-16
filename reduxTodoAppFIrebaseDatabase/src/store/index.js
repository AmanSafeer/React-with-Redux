import {createStore, applyMiddleware} from 'redux';
import rootReducer from './reducers/index'
import reducer from './reducers/reducers'
import thunk from 'redux-thunk';

let store = createStore(
    rootReducer,
    {},
    applyMiddleware(thunk)
    //  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );

//store.subscribe(()=>{
 //   console.log(store.getState());
//})

export default store;