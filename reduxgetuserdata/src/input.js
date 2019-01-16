import React, {Component} from 'react';
import { connect } from 'react-redux';

function mapStateToProps(state){
    return{User:state}
}

function mapDispatchToProps(dispatch){
    return{
        submitForm: (obj)=> dispatch({type:"SUBMIT", payload:obj})
    }
}
class Input extends Component{
    constructor(){
        super();
        this.state={
            firstname:"",
            lastname:"",
            email:"",
            password:"",
            // obj:{}
            
        }
    }

    changeaHandler=(event)=>{
        this.setState({
            [event.target.name]:event.target.value
        })
    }

    submitForm=(event)=>{
        event.preventDefault();
        let userobj={};
        userobj.firstname=this.state.firstname;
        userobj.lastname=this.state.lastname;
        userobj.email=this.state.email;
        userobj.password=this.state.password;

        // this.setState({obj:userobj})
        this.props.submitForm(userobj)
    }
    
userobj

    render(){
        return(
            <div>
                
                <h1>Registration</h1>
                <form onSubmit={this.submitForm}>
                First Name:<input type="text" name="firstname" value={this.state.firstname} onChange={this.changeaHandler}/><br/>
                Last Name: <input type="text" name="lastname" value={this.state.lastname} onChange={this.changeaHandler}/><br/>
                Email:<input type="email" name="email" value={this.state.email} onChange={this.changeaHandler}/><br/>
                Password:<input type="password" name="password" value={this.state.password} onChange={this.changeaHandler}/><br/>
                <input type="submit" value="submit" />
                </form>

            </div>
            )
        }
}

export default connect(mapStateToProps,mapDispatchToProps)(Input);