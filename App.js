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
/*import React,{ useState } from "react";
function Counter(){
    const [count,setCount] = useState(0);
    const handleIncrement =() => {
        setCount(prevCount => prevCount + 1);
    };
    const handleDecrement = () => {
        setCount(prevCount => prevCount - 1);
    };
    const handleReset = () => {
        setCount(0);
    };
    return (
        <div>
            <h1>Counter:{count}</h1>
            <button onClick={handleIncrement}>Increment</button>
            <button onClick={handleDecrement}>Decrement</button>
            <button onClick={handleReset}>Reset</button>
        </div>
    );
}
export default Counter;*/

import React, { useState } from 'react';

function UserGreetings() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div>
      <h2>Conditional Rendering with Ternary Operator</h2>

      <button onClick={() => setIsLoggedIn(!isLoggedIn)}>
        {isLoggedIn ? 'Logout' : 'Login'}
      </button>

      <h3>
        {isLoggedIn ? (
          'Welcome back, user!'
        ) : (
          'Please log in to continue'
        )}
      </h3>
    </div>
  );
}
export default UserGreetings;

/*import React from 'react';
function App() {
  return (
    <div>
      <h2>About React</h2>
      <p>
        {'React is a javascript library for building user interface it allows developers to create reusable ui  components.This makes building complex and interactive web applications more effecient.'};
      </p>
    </div>
  );
}
export default App;*/