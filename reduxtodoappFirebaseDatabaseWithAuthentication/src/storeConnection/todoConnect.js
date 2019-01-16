import React, { Component } from 'react';
import {connect} from 'react-redux';
import Todo from '../components/todo';
import {add,del,edit,update,getData,completed} from '../store/action/action'


 function mapStateToProps(state){
  return({
      userName:state.root.userName,
      userId:state.root.userId,
      todos: state.root.todos,
      editing: state.root.editing

  })
}
function mapDispatchToProps(dispatch){
  return({
      getData:()=>{dispatch(getData())},
      add: (todoObj) => {dispatch(add(todoObj))},
      del: (id) => { dispatch(del(id))},
      edit: ()=> { dispatch(edit()) },
      update: (updateObj)=> {dispatch(update(updateObj))},
      completed:(completeObj)=> {dispatch(completed(completeObj))}
  })
}
class TodoConnect extends Component {
    render() {
      // console.log(this.props.location)
      console.log(this.props.userName)
      return (
        <div>
          <Todo userName={this.props.userName} userId={this.props.userId}  add={this.props.add} update={this.props.update}  valueForEdit={this.props.valueForEdit} indexOfVal={this.props.indexOfVal} 
           del={this.props.del} edit={this.props.edit} completed={this.props.completed} getData={this.props.getData} todos={this.props.todos} editing={this.props.editing} history={this.props.history}/>
        </div>
      );
    }
  }
  
export default connect(mapStateToProps,mapDispatchToProps)(TodoConnect);