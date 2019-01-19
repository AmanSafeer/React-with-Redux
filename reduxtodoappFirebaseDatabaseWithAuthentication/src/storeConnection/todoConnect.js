import React, { Component } from 'react';
import {connect} from 'react-redux';
import Todo from '../components/todo';
import {add,del,edit,update,getData,completed,signOutUser} from '../store/action/action'


 function mapStateToProps(state){
  return({
      userName:state.root.userName,
      userId:state.root.userId,
      todos: state.root.todos,
      editing: state.root.editing,
      data:state.root.data

  })
}
function mapDispatchToProps(dispatch){
  return({
      getData:(userId)=>dispatch(getData(userId)),
      add: (userId,todoObj) => dispatch(add(userId,todoObj)),
      del: (userId,id) => dispatch(del(userId,id)),
      edit: ()=> dispatch(edit()) ,
      update: (userId,updateObj)=> dispatch(update(userId,updateObj)),
      completed:(userId,completeObj)=> dispatch(completed(userId,completeObj)),
      signOutUser:()=>dispatch(signOutUser()),
     
  })
}
class TodoConnect extends Component {
    render() {
      return (
        <div>
          <Todo userName={this.props.userName} userId={this.props.userId} todos={this.props.todos} editing={this.props.editing} getData={this.props.getData} data={this.props.data}
          add={this.props.add} update={this.props.update} del={this.props.del} edit={this.props.edit} completed={this.props.completed}  signOutUser={this.props.signOutUser}
          history={this.props.history}/>
        </div>
      );
    }
  }
  
export default connect(mapStateToProps,mapDispatchToProps)(TodoConnect);