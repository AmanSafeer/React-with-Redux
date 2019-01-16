import React, { Component } from 'react';
import '../styles/components.css'
import { withStyles } from '@material-ui/core/styles';
import {styles} from '../styles/styles'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import classNames from 'classnames';


class Todo extends Component{
    constructor(props){
        super(props);
        this.state={
            todo:"",
            editTodo:""
        }
    }
    changeHandler=(event)=>{
        this.setState({[event.target.name]:event.target.value})
    }
    addTodoHandler=()=>{
        if(this.state.todo){
            let todo = this.state.todo 
            let isCompleted = false;
            this.props.add({todo,isCompleted})
            this.setState({todo:""})
        }
    }
    editTodoHandler=(val,ind)=>{
        this.props.edit();
        this.setState({
            editTodo:val,
            index:ind
        })
    }
    updateTodoHandler=()=>{
        if(this.state.editTodo){
            let todo= this.state.editTodo;
            let ind=this.state.index
            let isCompleted = false;
            this.props.update({todo,ind,isCompleted});
            this.setState({editTodo:"",index:""})
        }
    }
    
    render(){
        let {classes}=this.props
        return(
            <div>
            <header>
                <h1>Todo App Using Redux</h1>
                    {!this.props.editing ?
                <div>
                    <TextField className={classes.text} id="standard-name" label="Todo" variant="outlined" name="todo" value={this.state.todo} onChange={this.changeHandler} autoFocus/>
                    <Button color="primary" className={classNames(classes.addbutton,classes.button)} variant="outlined" onClick={this.addTodoHandler}>Add</Button>
                </div>
                    :
                <div>
                    <TextField className={classes.text} id="standard-name" label="Todo" variant="outlined" name="editTodo" value={this.state.editTodo} onChange={this.changeHandler} autoFocus/>
                    <Button color="secondary" className={classNames(classes.updatebutton,classes.button)} variant="outlined" onClick={this.updateTodoHandler}>Update</Button>
                </div>}    
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
                                    <span className="complete" title="Done" onClick={()=>this.props.completed(ind)}>&#10004;</span>
                                    <span className="edit" title="Edit" onClick={()=>this.editTodoHandler(val.todo,ind)}>&#9998;</span>
                                </span>
                                :
                                <span className="completed">&#10004; Done</span>}

                                <span className="delete" title="Delete" onClick={()=>this.props.del(ind)}>&#10006;</span>
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
        )
    }
}

export default withStyles(styles)(Todo);