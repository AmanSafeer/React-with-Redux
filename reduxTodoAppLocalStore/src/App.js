import React, { Component } from 'react';
import './App.css';
import {connect} from 'react-redux'
import Todo from './components/todo';
import {add,del,edit,update} from './store/action/action'
import actionTypes from './store/constants/constant'

function mapStateToProps(state){
  return({
      todos: state.todos,
      editing: state.editing
  })
}
function mapDispatchToProps(dispatch){
  return({
      add: (todoObj) => {dispatch({type:actionTypes.ADD, payload:todoObj})},
      del: (ind) => { dispatch({type:actionTypes.DELETE,payload:ind})},
      edit: ()=> { dispatch({type:actionTypes.EDIT}) },
      update: (updateObj)=> {dispatch({type:actionTypes.UPDATE,payload:updateObj})},
      completed:(ind)=> {dispatch({type:actionTypes.COMPLETED,payload:ind})}
  })
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <Todo add={this.props.add} update={this.props.update}  valueForEdit={this.props.valueForEdit} indexOfVal={this.props.indexOfVal} 
         del={this.props.del} edit={this.props.edit} completed={this.props.completed} todos={this.props.todos} editing={this.props.editing} />
      </div>
    );
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(App);
