import actionTypes from '../constants/constant'
import * as firebase from 'firebase'

export function add(obj){
    return dispatch =>{
        firebase.database().ref('/').child('todos').push(obj)
    }
}
export function getData(){
    return dispatch =>{
        firebase.database().ref('/').child('todos').on("child_added",(snapShot)=>{
            const data =snapShot.val();
            if(data){
            console.log(data)
            data.id= snapShot.key;
            dispatch({type:actionTypes.GETDATA, payload:data})
            }
        })
        firebase.database().ref('/').child('todos').on("child_removed",(snapShot)=>{
            const key=snapShot.key;
            dispatch({type:actionTypes.DELETE, payload:key})
        })
        firebase.database().ref('/').child('todos').on("child_changed",(snapShot)=>{
            dispatch({type:actionTypes.UPDATE,payload:snapShot})
        })
    }
}
export function del(obj){
    return ()=>{
        firebase.database().ref('/').child('todos').child(obj.id).remove();
    }
}
export function edit(){
    return dispatch =>{
        dispatch({type:actionTypes.EDIT}) 
    }
}
export function update(obj){
    return dispatch =>{
        firebase.database().ref('/').child('todos').child(obj.todoObj.id).update(obj.todoObj)
        
    }
}
export function completed(obj){
    return dispatch =>{
        firebase.database().ref().child('todos').child(obj.todoObj.id).update(obj.todoObj);
        dispatch({type:actionTypes.COMPLETED,payload:obj.ind})
    }
}