import React, {Component} from "react";

class ClassComp extends Component{

 
    constructor(){
        super();
        this.state = {
            count: 0,
        };
    }

    incrementFn = () =>{
        this.setState({
            count: this.state.count + 1
        })
    }

    decreaseFn = () =>{
        this.setState({
            count: this.state.count - 1
        })
    }

    restfn = () =>{
        this.setState({
            count: this.state.count = 0
        })
    }

    render(){
        return(
            <div style={{textAlign:"center", marginTop:"100px"}}>
              <h1>Count {this.state.count}</h1>
              <button onClick={this.incrementFn}>Increment</button>&emsp;
              <button onClick={this.decreaseFn}>Decrement</button>&emsp;
              <button onClick={this.restfn}>Reset</button>
            </div>
        )
    }
}

export default ClassComp;

