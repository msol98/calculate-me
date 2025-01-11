import calculatorReducer from "../../reducers/calculator";
import { ButtonTypes } from "../../constants";

test('Should insert the first digit correctly.', () => {
  const result = calculatorReducer(
    { displayedCharacter: 0, operation: '', lastInsertType: null },
    { type: 'INSERT_BUTTON', button: 3, buttonType: ButtonTypes.DIGIT });
  expect(result).toEqual({ displayedCharacter: 3, operation: '3', lastInsertType: ButtonTypes.DIGIT });
});

test('Should insert a new digit correctly.', () => {
  const result = calculatorReducer(
    { displayedCharacter: 3, operation: '3', lastInsertType: ButtonTypes.DIGIT },
    { type: 'INSERT_BUTTON', button: 5, buttonType: ButtonTypes.DIGIT });
  expect(result).toEqual({ displayedCharacter: 35, operation: '35', lastInsertType: ButtonTypes.DIGIT });
});

test('Should insert an operand correctly.', () => {
  const result = calculatorReducer(
    { displayedCharacter: 35, operation: '35', lastInsertType: ButtonTypes.DIGIT },
    { type: 'INSERT_BUTTON', button: '+', buttonType: ButtonTypes.OPERAND });
  expect(result).toEqual({ displayedCharacter: '+', operation: '35+', lastInsertType: ButtonTypes.OPERAND });
});

test('Should insert a digit after an operand correctly.', () => {
  const result = calculatorReducer(
    { displayedCharacter: '+', operation: '35+', lastInsertType: ButtonTypes.OPERAND },
    { type: 'INSERT_BUTTON', button: 4, buttonType: ButtonTypes.DIGIT });
  expect(result).toEqual({ displayedCharacter: 4, operation: '35+4', lastInsertType: ButtonTypes.DIGIT });
});

test('Should show error when inserting an operand right after another operand.', () => {
  const result = calculatorReducer(
    { displayedCharacter: '+', operation: '35+', lastInsertType: ButtonTypes.OPERAND },
    { type: 'INSERT_BUTTON', button: '-', buttonType: ButtonTypes.OPERAND });
  expect(result).toEqual({ displayedCharacter: '+', operation: '35+', lastInsertType: ButtonTypes.OPERAND, error: 'PLEASE INSERT A DIGIT' });
});

test('Should show result when inserting equal.', () => {
  const result = calculatorReducer(
    { displayedCharacter: 4, operation: '35+4', lastInsertType: ButtonTypes.DIGIT },
    { type: 'CALCULATE' });
  expect(result).toEqual({ displayedCharacter: 39, operation: '', lastInsertType: null });
});