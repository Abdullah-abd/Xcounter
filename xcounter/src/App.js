import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    // Step 1: Initialize state to track the count
    this.state = {
      count: 0
    };
  }

  // Step 2: Increment function
  increment = () => {
    this.setState((prevState) => ({
      count: prevState.count + 1
    }));
  };

  // Step 3: Decrement function
  decrement = () => {
    console.log("executing");
    this.setState((prevState) => ({
      count: prevState.count - 1
    }));
  };

  render() {
    return (
      <div>
        {/* Step 4: Display count */}
        <h1>Counter App</h1>
        <h1>Count: {this.state.count}</h1>

        {/* Step 5: Buttons for increment and decrement */}
        <button onClick={this.increment}>Increment</button>
        <button onClick={this.decrement}>Decrement</button>
      </div>
    );
  }
}

export default App;
