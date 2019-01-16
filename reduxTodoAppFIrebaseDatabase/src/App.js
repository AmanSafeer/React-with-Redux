import React, { Component } from 'react';
import './App.css';
import {connect} from 'react-redux'
import Todo from './components/todo';
import {add,del,edit,update,getData,completed} from './store/action/action'
import actionTypes from './store/constants/constant'

function mapStateToProps(state){
  return({
      todos: state.root.todos,
      editing: state.root.editing
  })
}
function mapDispatchToProps(dispatch){
  return({
      getData:()=>{dispatch(getData())},
      add: (todoObj) => {dispatch(add(todoObj))},
      del: (deleteObj) => { dispatch(del(deleteObj))},
      edit: ()=> { dispatch(edit()) },
      update: (updateObj)=> {dispatch(update(updateObj))},
      completed:(completeObj)=> {dispatch(completed(completeObj))}
  })
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <Todo getData={this.props.getData} add={this.props.add} update={this.props.update}  valueForEdit={this.props.valueForEdit} indexOfVal={this.props.indexOfVal} 
         del={this.props.del} edit={this.props.edit} completed={this.props.completed} todos={this.props.todos} editing={this.props.editing} />
      </div>
    );
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(App);
