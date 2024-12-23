import './App.css';
import { calculateOperation, insertButton } from './actions/calculator';
import { ButtonTypes } from "./constants";
import { connect } from 'react-redux';

function App(props) {
  var operators = ['+', '-', '*', '/'];
  var digits = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

  function clickButton(input, buttonType) {
    props.dispatch(insertButton(input, buttonType));
  }

  function handleCalculation() {
    props.dispatch(calculateOperation());
  }

  return (
    <div className='wrapper w-64 mx-auto mt-32 px-6 py-10 rounded'>
      <div className='screen mb-7 p-4 h-16 text-xl bg-orange-200 rounded text-indigo-800 relative'>{props.displayedCharacter}
        <small className='err absolute text-red-500'>{props.error}</small>
      </div>
      <div className='flex gap-4'>
        <div className='grid grid-cols-3 gap-4'>
          {digits.map(digit => <div key={digit} className='relative w-10 h-10'><button className='btn w-10 h-10 bg-yellow-300 text-indigo-800' onClick={() => clickButton(digit, ButtonTypes.DIGIT)}>{digit}</button></div>)}
          <div className='relative h-10 col-span-2'><button className='btn h-10 w-full bg-orange-400 text-indigo-800' onClick={handleCalculation}>=</button></div>
        </div>
        <div className='grid grid-cols-1 gap-4'>
          {operators.map(operand => <div key={operand} className='relative w-10 h-10'><button className='btn w-10 h-10 bg-indigo-300' onClick={() => clickButton(operand, ButtonTypes.OPERAND)}>{operand}</button></div>)}
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state = { displayedCharacter: 0 }) => ({
  displayedCharacter: state.displayedCharacter,
  error: state.error
});

export default connect(mapStateToProps)(App);