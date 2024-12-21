import { ButtonTypes } from "../constants";

export default (state = { displayedNum: 0, operation: '', lastInsertType: null, error: null }, action) => {
  switch (action.type) {
    case 'INSERT_BUTTON':
      var displayedNum = action.button;
      if (action.buttonType === ButtonTypes.DIGIT && state.lastInsertType === ButtonTypes.DIGIT)
        displayedNum = updateNumber(state.displayedNum, action.button);
      const isValid = validateInsert(action.buttonType, state.lastInsertType);
      return isValid ? { displayedNum, operation: state.operation + (action.button).toString(), lastInsertType: action.buttonType } : { ...state, error: 'PLEASE INSERT A DIGIT' };

    case 'CALCULATE':
      return state.lastInsertType === ButtonTypes.DIGIT ? { displayedNum: eval(state.operation), operation: '' } : { ...state, error: 'PLEASE INSERT A DIGIT' };
  }
}

function validateInsert(buttonType, lastInsertType) {
  return lastInsertType !== ButtonTypes.OPERAND || buttonType !== ButtonTypes.OPERAND; 
}

function updateNumber(oldNumber, newDigit) {
  return (oldNumber | 0) * 10 + newDigit;
}