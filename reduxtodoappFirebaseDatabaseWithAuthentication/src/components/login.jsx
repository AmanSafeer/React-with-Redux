import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import * as firebase from 'firebase'


class Login extends Component {
    constructor(){
        super();
        this.ref= firebase.database().ref();
        this.state={
            name:'',
            email:'',
            password:'',
            signIn:true
        }
    }
    changeHandler=(event)=>{
        this.setState({[event.target.name]:event.target.value});
    }

    changeForm=()=>{
        this.setState({signIn:!this.state.signIn});
    }
    signUp=(event)=>{
        event.preventDefault()
        const name=this.state.name;
        const email = this.state.email;
        const password = this.state.password;
        firebase.auth().createUserWithEmailAndPassword(email,password)
        .then(res=>{
            this.props.signUpUser(name,res.user.uid);
             this.props.signInUser();
            this.props.history.replace('/home');
        }
        )
        .catch(err=>{
            alert(err);
        })
    }
    signIn=(event)=>{
        event.preventDefault()
        const email = this.state.email;
        const password = this.state.password;
        firebase.auth().signInWithEmailAndPassword(email,password)
        .then(res =>{
            this.props.signInUser();
            this.props.history.replace('/home');
        })
        .catch(err=>{
            alert(err);
        })

    }
  
    componentDidMount(){
        firebase.auth().onAuthStateChanged((user)=>{
            if(user){
                this.props.signInUser();
                this.props.history.replace('/home');
                
            }
        })
    }
    render() {
        // console.log(this.props.history)
      return (
        this.state.signIn ?
           <div className="form">
               <form onSubmit={this.signIn}>
               <h2>Login</h2>
                <TextField  label="Email" variant="outlined" margin="normal" type="email" name="email" value={this.state.email} onChange={this.changeHandler}/><br/>
                <TextField label="Password" variant="outlined" margin="normal" type="password" name="password" value={this.state.password} onChange={this.changeHandler}/><br/>
                <Button variant="contained" color="primary" type="submit" value="submit">Sign In</Button>
               </form>
                <p>Don't have account? | <span className="changeFormBtn" onClick={this.changeForm}>Sign Up</span></p>
           </div>
           :
           <div className="form">
               <form onSubmit={this.signUp}>
               <h2>Registration</h2>
                <TextField label="Name" variant="outlined" margin="normal"  type="text" name="name" value={this.state.name} onChange={this.changeHandler}/><br/>
                <TextField label="Email" variant="outlined" margin="normal"  type="email" name="email" value={this.state.email} onChange={this.changeHandler}/><br/>
                <TextField label="Password" variant="outlined" margin="normal" type="password" name="password" value={this.state.password} onChange={this.changeHandler}/><br/>
                <Button variant="contained" color="primary" type="submit" value="submit">Sign Up</Button>
               </form>
               <p>Already have account | <span className="changeFormBtn" onClick={this.changeForm}>Sign In</span></p>
           </div>
       )
    }
  }
  
  export default Login;