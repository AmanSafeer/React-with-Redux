import React, { Component } from 'react';
import {connect} from 'react-redux';

function mapStateToProps(state) {
    return(
        {counter:state}
    )
}
function mapDispatchToProps(dispatch){
    return{
        increment: (num)=> dispatch({type:"Increment", payload:num}),
        decrement: (num)=> dispatch({type:"Decrement", payload:num})
    }

}

class Counter extends Component {
  constructor(){
      super();
      this.state={
          num:0
      }
  }  
render() {
    return (
        <div>
                {this.props.counter} <br />
                <input type="number" value={this.state.num} onChange={(ev) => { this.setState({ num: Number(ev.target.value) }) }} /><br/>
                <button onClick={()=>this.props.increment(this.state.num)}>Increment</button>
                <button onClick={()=>this.props.decrement(this.state.num)}>Decrement</button>
            </div>
        );
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Counter);