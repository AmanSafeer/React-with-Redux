import actionTypes from '../constants/constant'
import * as firebase from 'firebase'

export function add(todo){
    return dispatch =>{
        firebase.database().ref().child('todos').push(todo)
        dispatch({type:actionTypes.ADD, payload:todo})
    }
}
export function del(ind){
    return dispatch =>{
        dispatch({type:actionTypes.DELETE,payload:ind})
    }
}
export function edit(){
    return dispatch =>{
        dispatch({type:actionTypes.EDIT}) 
    }
}
export function update(updateObj){
    return dispatch =>{
        dispatch({type:actionTypes.UPDATE,payload:updateObj})
    }
}