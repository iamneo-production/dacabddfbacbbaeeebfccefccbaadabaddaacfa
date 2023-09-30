import React, { useState } from 'react';
import '../App.css';

function Calculator() {
  const [display, setDisplay] = useState('0');
  const [firstOperand, setFirstOperand] = useState(null);
  const [operator, setOperator] = useState(null);
  const [waitingForSecondOperand, setWaitingForSecondOperand] = useState(false);

  const handleNumberClick = (number) => {
    if (waitingForSecondOperand) {
      setDisplay(number);
      setWaitingForSecondOperand(false);
    } else {
      setDisplay(display === '0' ? number : display + number);
    }
  };

  const handleOperatorClick = (nextOperator) => {
    if (firstOperand === null) {
      setFirstOperand(parseFloat(display));
    } else if (operator) {
      const result = performCalculation();
      setDisplay(result.toString());
      setFirstOperand(result);
    }
    setWaitingForSecondOperand(true);
    setOperator(nextOperator);
  };

  const performCalculation = () => {
    const secondOperand = parseFloat(display);
    switch (operator) {
      case '+':
        return firstOperand + secondOperand;
      case '-':
        return firstOperand - secondOperand;
      case '*':
        return firstOperand * secondOperand;
      case '/':
        return firstOperand / secondOperand;
      default:
        return secondOperand;
    }
  };

  const handleEqualsClick = () => {
    if (operator) {
      const result = performCalculation();
      setDisplay(result.toString());
      setFirstOperand(result);
      setOperator(null);
      setWaitingForSecondOperand(false);
    }
  };

  const handleClearClick = () => {
    setDisplay('0');
    setFirstOperand(null);
    setOperator(null);
    setWaitingForSecondOperand(false);
  };

  return (
    <div className="calculator">
      <div data-testid="result-display" className="display">
        {display}
      </div>
      <div className="buttons">
        <div className="row">
          <button onClick={() => handleNumberClick('7')}>7</button>
          <button onClick={() => handleNumberClick('8')}>8</button>
          <button onClick={() => handleNumberClick('9')}>9</button>
          <button onClick={() => handleOperatorClick('/')}>/</button>
        </div>
        <div className="row">
          <button onClick={() => handleNumberClick('4')}>4</button>
          <button onClick={() => handleNumberClick('5')}>5</button>
          <button onClick={() => handleNumberClick('6')}>6</button>
          <button onClick={() => handleOperatorClick('*')}>*</button>
        </div>
        <div className="row">
          <button onClick={() => handleNumberClick('1')}>1</button>
          <button onClick={() => handleNumberClick('2')}>2</button>
          <button onClick={() => handleNumberClick('3')}>3</button>
          <button onClick={() => handleOperatorClick('-')}>-</button>
        </div>
        <div className="row">
          <button onClick={() => handleNumberClick('0')}>0</button>
          <button onClick={() => handleClearClick()}>C</button>
          <button onClick={() => handleEqualsClick()}>=</button>
          <button onClick={() => handleOperatorClick('+')}>+</button>
        </div>
      </div>
    </div>
  );
}
export default Calculator
