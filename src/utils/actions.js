const ACTIONS = {
  ADD_DIGIT: 'add-digit',
  CHOOSE_OPERATION: 'choose-operation',
  CLEAR: 'clear',
  DELETE_DIGIT: 'delete-digit',
  EVALUATE: 'evaluate'
}

export { ACTIONS };

const evaluate = ({currentOperand, previousOperand, operation}) => {
  const prev = parseFloat(previousOperand);
  const curr = parseFloat(currentOperand);
  if (isNaN(prev) || isNaN(curr)) return '';
  switch (operation) {
    case '+':
      return prev + curr;
    case '-':
      return prev - curr;
    case 'x':
      return prev * curr;
    case '/':
      return prev / curr;
    default:
      return '';
  }
}
export {evaluate};