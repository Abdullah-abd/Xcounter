import React, { useState } from 'react';

function App() {
  // Step 1: Define state to track the count, initialized to 0
  const [count, setCount] = useState(0);

  // Step 2: Increment function
  const increment = () => {
    setCount(prevCount => prevCount + 1);
  };

  // Step 3: Decrement function
  const decrement = () => {
    console.log("executing")
    setCount(prevCount => prevCount - 1);
  };

  return (
    <div>
      {/* Step 4: Display count */}
      <h1>Counter App</h1>
      <h1>Count: {count}</h1>

      {/* Step 5: Buttons for increment and decrement */}
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
}

export default App;
