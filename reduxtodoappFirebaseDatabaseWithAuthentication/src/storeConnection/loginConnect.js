import React, { Component } from 'react';
import {connect} from 'react-redux';
import Login from '../components/login';
import {signUpUser,signInUser} from '../store/action/action'

 function mapStateToProps(state){
  return({  
  })
}
function mapDispatchToProps(dispatch){
  return({
    signUpUser: (name,id)=> dispatch(signUpUser(name,id)),
    signInUser: ()=> dispatch(signInUser())
  })
}
class LoginConnect extends Component {
    render() {
      return (
        <div>
         <Login signUpUser={this.props.signUpUser} signInUser={this.props.signInUser} history={this.props.history}/>
        </div>
      );
    }
  }
  
export default connect(mapStateToProps,mapDispatchToProps)(LoginConnect);
