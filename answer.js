function evaluateRPN(expression) {
    const stack = [];
    const tokens = expression.split(' ');
  
    for (const token of tokens) {
      if (!isNaN(token)) {
        // If the token is a number, push it to the stack
        stack.push(Number(token));
      } else if (isOperator(token)) {
        // If the token is an operator, pop two values from the stack, apply the operation, and push the result back to the stack
        const operand2 = stack.pop();
        const operand1 = stack.pop();
        const result = performOperation(operand1, operand2, token);
        stack.push(result);
      } else {
        // Invalid token in the expression
        throw new Error('Invalid token: ' + token);
      }
    }
  
    if (stack.length !== 1) {
      throw new Error('Invalid expression');
    }
  
    return stack[0];
  }
  
  function isOperator(token) {
    return ['+', '-', '*', '/'].includes(token);
  }
  
  function performOperation(operand1, operand2, operator) {
    switch (operator) {
      case '+':
        return operand1 + operand2;
      case '-':
        return operand1 - operand2;
      case '*':
        return operand1 * operand2;
      case '/':
        if (operand2 === 0) {
          throw new Error('Division by zero');
        }
        return operand1 / operand2;
      default:
        throw Error('Invalid operator: ' + operator);
    }
  }
  
  module.exports = evaluateRPN;
  