import React, { Component } from 'react';
import '../styles/components.css'
import { withStyles } from '@material-ui/core/styles';
import {styles} from '../styles/styles'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import classNames from 'classnames';
import * as firebase from 'firebase'


class Todo extends Component{
    constructor(props){
        super(props);
        this.state={
            todo:"",
            editTodo:"",
        }
    }
    changeHandler=(event)=>{
        this.setState({[event.target.name]:event.target.value})
    }
    addTodo=(userId)=>{
        if(this.state.todo){
            let todo = this.state.todo 
            let isCompleted = false;
            this.props.add(userId, {todo,isCompleted})
            this.setState({todo:""})
        }
    }
    editTodo=(val,id,ind)=>{
        this.props.edit();
        this.setState({
            editTodo:val,
            todoId:id,
            index:ind
        })
    }
    updateTodo=(userId)=>{
        if(this.state.editTodo){
            let todoObj ={};
            let ind = this.state.index
            todoObj.todo= this.state.editTodo;
            todoObj.id=this.state.todoId
            todoObj.isCompleted = false;
            this.props.update(userId,{todoObj,ind});
            this.setState({editTodo:"",index:"", todoId:""})
        }
    }
    deleteTodo=(userId,id)=>{
        this.props.del(userId,id)
    }

    completeTodo=(userId,obj,ind)=>{
        let todoObj=obj;
        todoObj.isCompleted=true;
        this.props.completed(userId,{todoObj,ind});
    }
    getData(){
        firebase.auth().onAuthStateChanged((user)=>{
            if(user){
                console.log("did mount")
                this.props.getData(user.uid);
            }  
        })
    }
    
    componentDidMount(){
       this.getData()
    }
    
    
    signOut=()=>{
        firebase.auth().signOut()
        .then(()=>{
            this.props.signOutUser()
            this.props.history.replace('/')
            alert("Sucsessfully signed out")
        })
        .catch((err)=>{
            alert(err)
        })
    }
    render(){
        console.log("render")
        let {classes}=this.props
        
        return(
            <div>
                {this.props.data ? 
                <div>
                    <header>
                     <div className="userSection">   
                        <h2>User Name: {this.props.userName}</h2>
                        <Button  style={{backgroundColor:'white'}} onClick={this.signOut}>Sign Out</Button>
                    </div>
                    <div>
                    <h1>Todo App Using Redux</h1>
                        {!this.props.editing ?
                        <div>
                            <TextField className={classes.text} id="standard-name" label="Todo" variant="outlined" name="todo" value={this.state.todo} onChange={this.changeHandler} autoFocus/>
                            <Button color="primary" className={classNames(classes.addbutton,classes.button)} variant="outlined" onClick={()=>this.addTodo(this.props.userId)}>Add</Button>
                        </div>
                            :
                        <div>
                            <TextField className={classes.text} id="standard-name" label="Todo" variant="outlined" name="editTodo" value={this.state.editTodo} onChange={this.changeHandler} autoFocus/>
                            <Button color="secondary" className={classNames(classes.updatebutton,classes.button)} variant="outlined" onClick={()=>this.updateTodo(this.props.userId)}>Update</Button>
                        </div>}    
                    </div>   
                    </header>
                
                {(this.props.todos != "") ?
                <table className="table">
                    <tbody> 
                        {this.props.todos.map((val,ind)=>{
                        return(
                            <tr key={ind}>
                                <td>{ind+1}</td>
                                {!val.isCompleted ?<td>{val.todo}</td>:<td className="done">{val.todo}</td>}
                                <td>
                                    {!val.isCompleted ?
                                    <span>
                                        <span className="complete" title="Done" onClick={()=>this.completeTodo(this.props.userId,val,ind)}>&#10004;</span>
                                        <span className="edit" title="Edit" onClick={()=>this.editTodo(val.todo,val.id,ind)}>&#9998;</span>
                                    </span>
                                    :
                                    <span className="completed">&#10004; Done</span>}

                                    <span className="delete" title="Delete" onClick={()=>this.deleteTodo(this.props.userId,val.id)}>&#10006;</span>
                                </td>
                            </tr>
                        )}   
                    )}
                        </tbody>
                    </table>
                    :
                    <div className="noTodos">
                    No Recent Todos                 
                    </div>
                    }
                </div>
                :
                <div>
                    <div className="loginReq">
                        <div className="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
                        <h2 className="loader">Loading</h2>
                    </div>
                </div>
            }
            </div>
        )
    }
}

export default withStyles(styles)(Todo);