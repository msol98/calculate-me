export const insertButton = (button, buttonType) => ({
  type: 'INSERT_BUTTON',
  button,
  buttonType
});

export const calculateOperation = () => ({
  type: 'CALCULATE'
});