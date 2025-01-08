import { insertButton, calculateOperation } from "../../actions/calculator";
import { ButtonTypes } from "../../constants";

test('Should setup insertButton action object for a digit button', () => {
  const result = insertButton(1, ButtonTypes.DIGIT);
  expect(result).toEqual({
    type: 'INSERT_BUTTON',
    button: 1,
    buttonType: ButtonTypes.DIGIT
  });
});

test('Should setup insertButton action object for an operand', () => {
  const result = insertButton('+', ButtonTypes.OPERAND);
  expect(result).toEqual({
    type: 'INSERT_BUTTON',
    button: '+',
    buttonType: ButtonTypes.OPERAND
  });
});

test('Should setup calculateOperation action object', () => {
  const result = calculateOperation();
  expect(result).toEqual({
    type: 'CALCULATE'
  });
});
