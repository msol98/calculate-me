import { ButtonTypes } from "../constants";

export default (state = { displayedNum: 0, operation: null, lastInsertType: null }, action) => { // todo: handle errors
  switch (action.type) {
    case 'INSERT_BUTTON':
      var displayedNum = action.button;
      if (action.buttonType === ButtonTypes.DIGIT && state.lastInsertType === ButtonTypes.DIGIT)
        displayedNum = updateNumber(state.displayedNum, action.button);
      const isValid = validateInsert(action.buttonType, state.lastInsertType);
      return isValid ? { displayedNum, operation: state.operation + action.button, lastInsertType: action.buttonType } : state;

    case 'CALCULATE':
      return state.lastInsertType === ButtonTypes.DIGIT ? { displayedNum: eval(state.operation), operation: null } : state;
  }
}

function validateInsert(buttonType, lastInsertType) {
  return lastInsertType !== ButtonTypes.OPERAND || buttonType !== ButtonTypes.OPERAND; 
}

function updateNumber(oldNumber, newDigit) {
  return (oldNumber | 0) * 10 + newDigit;
}