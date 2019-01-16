import React, { Component } from 'react';
import {connect} from 'react-redux';
import Login from '../components/login';
import {saveUser} from '../store/action/action'

 function mapStateToProps(state){
  return({  
  })
}
function mapDispatchToProps(dispatch){
  return({
    saveUser: (name,id)=> dispatch(saveUser(name,id))
  })
}
class LoginConnect extends Component {
    render() {
      return (
        <div>
         <Login saveUser={this.props.saveUser} history={this.props.history}/>
        </div>
      );
    }
  }
  
export default connect(mapStateToProps,mapDispatchToProps)(LoginConnect);
