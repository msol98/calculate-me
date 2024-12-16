export default (state = { displayedNum: 0 }, action) => {
  switch (action.type) {
    case 'INSERT_BUTTON':
      return { displayedNum: action.button };
    case 'CALCULATE':
      return { displayedNum: eval(action.operation) };
  }
}