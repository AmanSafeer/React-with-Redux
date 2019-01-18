import actionTypes from '../constants/constant'
import * as firebase from 'firebase'

let ref =firebase.database().ref('/');

export function signUpUser(name,id){
 return () => {
     ref.child(id).child('name').push(name)
 } 
}
export function signInUser(){
    return dispatch => {
        dispatch({type:actionTypes.SIGNIN})
    } 
}
export function signOutUser(){
    return dispatch => {
        dispatch({type:actionTypes.SIGNOUT})
    } 
}

export function getData(userId){
    return dispatch =>{
        ref.child(userId).child('name').once('child_added',(snapShot)=>{
            const userName= snapShot.val()
            console.log(userName,userId)
            dispatch({type:actionTypes.GETDATA ,name:userName, uid:userId})
              
        }) 
        ref.child(userId).child('todos').on("value",(snapShot)=>{
                const data =snapShot.val();
                let todos=[]
                if(data){
                for (var key in data){
                        let todo=data[key]
                        todo.id= key;
                        todos.push(todo)
                }
                console.log(todos)
            }
            dispatch({type:actionTypes.ADD, payload:todos})
        })
        // ref.child(userId).child('todos').on("child_added",(snapShot)=>{
        //     const data =snapShot.val();
        //     if(data){
        //     console.log("add")
        //     data.id= snapShot.key;
        //     dispatch({type:actionTypes.ADD, payload:data})
        //     }
        // })
        // ref.child(userId).child('todos').on("child_removed",(snapShot)=>{
        //     const key=snapShot.key;
        //     dispatch({type:actionTypes.DELETE, payload:key})
        // })
        // ref.child(userId).child('todos').on("child_changed",(snapShot)=>{
        //     dispatch({type:actionTypes.UPDATE,payload:snapShot})
        // })
    }
}
export function add(userId,obj){
    return ()=>{
        ref.child(userId).child('todos').push(obj)
        // dispatch({type:actionTypes.ADD})
    }
}
export function del(userId,id){
    return (dispatch)=>{
        ref.child(userId).child('todos').child(id).remove();
        dispatch({type:actionTypes.DELETE})
    }
}
export function edit(){
    return dispatch =>{
        dispatch({type:actionTypes.EDIT}) 
    }
}
export function update(userId,obj){
    return (dispatch) =>{
        ref.child(userId).child('todos').child(obj.todoObj.id).update(obj.todoObj)
        dispatch({type:actionTypes.UPDATE})
    }
}
export function completed(userId,obj){
    return () =>{
        ref.child(userId).child('todos').child(obj.todoObj.id).update(obj.todoObj);
        
    }
}