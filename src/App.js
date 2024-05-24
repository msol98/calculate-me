import { useState } from 'react';
import './App.css';

function App() {
  var operators = ['+', '-', '*', '/'];
  var digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

  const [num, setNum] = useState();
  const [result, setResult] = useState();
  const [operations, setOperations] = useState('');

  function updateNumber(oldNumber, newDigit) {
    return (oldNumber | 0) * 10 + newDigit;
  }

  function insertDigit(input) {
    setNum(updateNumber(num, input));
  }

  function insertOperand(input) {
    const oldO = operations;
    setOperations(oldO + num + input);
    setNum(null);
  }

  function handleCalculation() {
    const oldOperations = operations;
    setResult(eval(oldOperations + num));
    setOperations(null);
    setNum(null);
  }

  return (
    <div>
      <div>
        {operators.map(operand => <button onClick={() => insertOperand(operand)} key={operand}>{operand}</button>)}
        <button onClick={handleCalculation}>=</button>
      </div>
      <br />
      <div>
        {digits.map(digit => <button onClick={() => insertDigit(digit)} key={digit}>{digit}</button>)}
      </div>
    </div>
  );
}

export default App;
