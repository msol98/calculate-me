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
    if (result)
      setResult();
  }

  function insertOperand(input) {
    setOperations(operations => operations + num + input);
    setNum();
  }

  function handleCalculation() {
    setResult(eval(operations + num));
    setOperations('');
    setNum();
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
