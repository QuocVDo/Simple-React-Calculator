import React, { useState } from 'react';
import './calcgrid.css';

function App() {
  const [currDisplay, updateDisplay] = useState('');
  const [prevDisplay, updatePreviousDisplay] = useState('');

  //Function to handle normal (numerical + operand) button presses
  function handleClick(value) {
    if (currDisplay === 'Syntax Error') {
      updateDisplay(value);
    } else {
      updateDisplay((prevOut) => prevOut + value);
    }
  }

  //Function to handle clearing the field
  function handleClear() {
    updateDisplay('');
  }

  //Function to handle deleting the last character in the field
  function handleDel() {
    if (currDisplay === 'Syntax Error') {
      updateDisplay('');
    } else {
      updateDisplay((prevOut) => prevOut.slice(0, -1));
    }
  }

  //Meat of the logic, handle the actual updating of the state logic
  function handleEval() {
    let result;

    if (currDisplay === 'Syntax Error' || currDisplay === '') {
      updateDisplay('');
    } else {
      try {
        result = eval(currDisplay).toString();
      } catch (error) {
        result = 'Syntax Error';
      }
      updatePreviousDisplay(currDisplay);
      updateDisplay(result);
    }
  }
  return (
    //Big Calculator Grid that encompasses all components
    <>
      <div className="title">
        <h1>Simple React Calculator</h1>
        <h2>By: Quoc-Zuy Do</h2>
      </div>

      <div className="calc-grid">
        <div className="output-box">
          <div className="previousOp">{prevDisplay}</div>
          <div className="currOp">{currDisplay}</div>
        </div>

        <button onClick={handleClear} className="span-two">
          AC
        </button>
        <button onClick={handleDel}>DEL</button>
        <button onClick={() => handleClick('/')}>/</button>
        <button onClick={() => handleClick('1')}>1</button>
        <button onClick={() => handleClick('2')}>2</button>
        <button onClick={() => handleClick('3')}>3</button>
        <button onClick={() => handleClick('*')}>*</button>
        <button onClick={() => handleClick('4')}>4</button>
        <button onClick={() => handleClick('5')}>5</button>
        <button onClick={() => handleClick('6')}>6</button>
        <button onClick={() => handleClick('+')}>+</button>
        <button onClick={() => handleClick('7')}>7</button>
        <button onClick={() => handleClick('8')}>8</button>
        <button onClick={() => handleClick('9')}>9</button>
        <button onClick={() => handleClick('-')}>-</button>
        <button onClick={() => handleClick('.')}>.</button>
        <button onClick={() => handleClick(0)}>0</button>
        <button onClick={handleEval} className="span-two">
          =
        </button>
      </div>
    </>
  );
}

export default App;
