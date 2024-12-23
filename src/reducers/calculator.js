import { ButtonTypes } from "../constants";

export default (state = { displayedCharacter: 0, operation: '', lastInsertType: null, error: null }, action) => {
  switch (action.type) {
    case 'INSERT_BUTTON':
      const isValid = validateInsert(action.buttonType, state.lastInsertType);
      if (isValid) {
        var displayedCharacter = action.button;
        if (action.buttonType === ButtonTypes.DIGIT && state.lastInsertType === ButtonTypes.DIGIT)
          displayedCharacter = updateNumber(state.displayedCharacter, action.button);
      }
      return isValid ?
        { displayedCharacter, operation: state.operation + (action.button).toString(), lastInsertType: action.buttonType } :
        { ...state, error: 'PLEASE INSERT A DIGIT' };

    case 'CALCULATE':
      return state.lastInsertType === ButtonTypes.DIGIT ?
        { displayedCharacter: eval(state.operation), operation: '' } :
        { ...state, error: 'PLEASE INSERT A DIGIT' };
  }
}

function validateInsert(buttonType, lastInsertType) {
  return lastInsertType !== ButtonTypes.OPERAND || buttonType !== ButtonTypes.OPERAND;
}

function updateNumber(oldNumber, newDigit) {
  return (oldNumber | 0) * 10 + newDigit;
}