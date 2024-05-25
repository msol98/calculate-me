import { useState } from 'react';
import './App.css';

function App() {
  var operators = ['+', '-', '*', '/'];
  var digits = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

  const [num, setNum] = useState();
  const [displayedNum, setDisplayedNum] = useState(0);
  const [operations, setOperations] = useState('');

  function updateNumber(oldNumber, newDigit) {
    return (oldNumber | 0) * 10 + newDigit;
  }

  function insertDigit(input) {
    const newNum = updateNumber(num, input)
    setNum(newNum);
    setDisplayedNum(newNum);
  }

  function insertOperand(input) {
    setOperations(operations => operations + num + input);
    setNum();
  }

  function handleCalculation() {
    setDisplayedNum(eval(operations + num));
    setOperations('');
    setNum();
  }

  return (
    <div className='wrapper w-64 mx-auto mt-32 px-6 py-10 rounded'>
      <div className='screen mb-7 p-4 h-16 text-xl bg-orange-200 rounded text-indigo-800'>{displayedNum}</div>
      <div className='flex gap-4'>
        <div className='grid grid-cols-3 gap-4'>
          {digits.map(digit => <div key={digit}><button className='btn w-10 h-10 bg-yellow-300 text-indigo-800' onClick={() => insertDigit(digit)}>{digit}</button></div>)}
          <button className='btn h-10 bg-orange-400 text-indigo-800 col-span-2' onClick={handleCalculation}>=</button>
        </div>
        <div className='grid grid-cols-1 gap-4'>
          {operators.map(operand => <div key={operand}><button className='btn w-10 h-10 bg-indigo-300' onClick={() => insertOperand(operand)}>{operand}</button></div>)}
        </div>
      </div>
    </div>
  );
}

export default App;
