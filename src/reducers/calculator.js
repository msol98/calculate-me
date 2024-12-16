export default (state = { displayedNum: 0 }, action) => { 
  switch (action.type) {
    case 'CALCULATE':
      return { displayedNum: eval(action.operation) };
  }
}