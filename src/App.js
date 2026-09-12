/*import React from 'react';
class Counter extends React.Component{
  constructor(props){
    super(props);
    this.state={
      count: 0
    };
    this.increment=this.increment.bind(this);
    this.decrement=this.decrement.bind(this);
    this.reset=this.reset.bind(this);
  }
  increment() {
    this.setState(prevState => ({
      count:prevState.count +  1
    }));
  }
  decrement(){
    this.setState(prevState => ({
      count:prevState.count -  1
    }));
  }
  reset() {
    this.setState({
      count: 0
    });
  }
  render() {
    return (
      <div>
        <h1>Current Count:{this.state.count}</h1>
        <button onClick={this.increment}>Increment</button>
        <button onClick={this.decrement}>Decrement</button>
        <button onClick={this.reset}>Reset</button>
      </div>
    );
  }
}
export default Counter;*/
import React, { useState } from "react";

function ClickHandlerExample() {
    const [message, setMessage] = useState("Click the button!");

    const handleClick = () => {
        setMessage("Button clicked!");
        console.log("Button was clicked");
    };
    return (
        <div>
            <h2>Button Click Event Example</h2>
            <p>{message}</p>
            <button onClick={handleClick}>
                Click Me
            </button>
        </div>
    );
}

export default ClickHandlerExample;