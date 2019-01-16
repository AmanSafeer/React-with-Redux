import actionTypes from '../constants/constant'
import * as firebase from 'firebase'

let ref =firebase.database().ref('/');

export function saveUser(name,id){
 return () => {
     ref.child(id).push({userName:name, todos:{todo:'hello'}})
        // dispatch({type:actionTypes.GETUSER, payload:userObj})
 } 
}

export function add(obj){
    return ()=>{
        ref.child('todos').push(obj)
    }
}
export function getData(){
    return dispatch =>{
        ref.child('todos').on("child_added",(snapShot)=>{
            const data =snapShot.val();
            if(data){
            console.log(data)
            data.id= snapShot.key;
            dispatch({type:actionTypes.GETDATA, payload:data})
            }
        })
        ref.child('todos').on("child_removed",(snapShot)=>{
            const key=snapShot.key;
            dispatch({type:actionTypes.DELETE, payload:key})
        })
        ref.child('todos').on("child_changed",(snapShot)=>{
            dispatch({type:actionTypes.UPDATE,payload:snapShot})
        })
    }
}
export function del(id){
    return ()=>{
        ref.child('todos').child(id).remove();
    }
}
export function edit(){
    return dispatch =>{
        dispatch({type:actionTypes.EDIT}) 
    }
}
export function update(obj){
    return () =>{
       ref.child('todos').child(obj.todoObj.id).update(obj.todoObj)
        
    }
}
export function completed(obj){
    return () =>{
        ref.child('todos').child(obj.todoObj.id).update(obj.todoObj);
    }
}