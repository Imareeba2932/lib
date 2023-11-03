import React, { useState } from 'react';
// import './Counter.css'; // Import a CSS file for styling

function Counter() {
  // Define a state variable 'count' and a function 'setCount' to update it
  const [count, setCount] = useState(0);

  // Event handler to increment the count when the "Increment" button is clicked
  const handleIncrement = () => {
    setCount(count + 1);
  };

  // Event handler to decrement the count when the "Decrement" button is clicked
  const handleDecrement = () => {
    setCount(count - 1);
  };

  // Event handler to reset the count to 0 when the "Reset" button is clicked
  const handleReset = () => {
    setCount(0);
  };

  return (
    <div className="counter-container">
      <h1>Counter Example</h1>
      <p className="count-display">Count: {count}</p>
      <div className="button-container">
        <button onClick={handleIncrement} className="increment-button">
          Increment
        </button>
        <button onClick={handleDecrement} className="decrement-button">
          Decrement
        </button>
        <button onClick={handleReset} className="reset-button">
          Reset
        </button>
      </div>
    </div>
  );
}

export default Counter;
