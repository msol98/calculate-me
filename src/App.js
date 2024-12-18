import store from './stores/configStore';
import './App.css';
import { calculateOperation, insertButton } from './actions/calculator';
import { connect } from 'react-redux';

function App(props) {
  var operators = ['+', '-', '*', '/'];
  var digits = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

  function insertDigit(input) {
    store.dispatch(insertButton(input, 'digit'));
  }

  function insertOperand(input) {
    store.dispatch(insertButton(input, 'operand'));
  }

  function handleCalculation() {
    store.dispatch(calculateOperation());
  }

  return (
    <div className='wrapper w-64 mx-auto mt-32 px-6 py-10 rounded'>
      <div className='screen mb-7 p-4 h-16 text-xl bg-orange-200 rounded text-indigo-800'>{props.displayedNum}</div>
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

const mapStateToProps = (state = { displayedNum: 0 }) => ({
  displayedNum: state.displayedNum
});

export default connect(mapStateToProps)(App);