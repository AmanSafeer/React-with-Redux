import React, {Component} from 'react';
import { connect } from 'react-redux';

function mapStateToProps(state){
    return{user:state}
}

function mapDispatchToProps(dispatch){
    return{
        // submitForm: (obj)=> dispatch({type:"SUBMIT", payload:obj})
    }
}

class Dashboard extends Component{
    constructor(){
        super();
    }
    
    render(){
        return(
            <div>
                <h1>Dashboard</h1>
            {this.props.user ?
                <table className="table">
                    <tr>
                <td>{this.props.user.firstname}</td>
                <td>{this.props.user.lastname}</td>
                <td>{this.props.user.email}</td>
                    </tr>
                </table>:""}
            </div>
            )
        }
}
export default connect(mapStateToProps,mapDispatchToProps)(Dashboard)