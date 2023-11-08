function evaluateRPN(expression) {
    const stack = [];
    const tokens = expression.split(' ');
  
    for (const token of tokens) {
      if (!isNaN(token)) {
        // If the token is a number, push it to the stack
        stack.push(parseFloat(token)); // Parse numbers as floats
      } else if (isOperator(token)) {
        // If the token is an operator, perform the operation based on the arity
        if (token === 'sqrt') {
          if (stack.length < 1) {
            throw new Error('Not enough operands for sqrt');
          }
          const operand = stack.pop();
          if (operand < 0) {
            throw new Error('Cannot take square root of a negative number');
          }
          stack.push(Math.sqrt(operand));
        } else if (token === 'max') {
          if (stack.length < 2) {
            throw new Error('Not enough operands for max');
          }
          const operand2 = stack.pop();
          const operand1 = stack.pop();
          stack.push(Math.max(operand1, operand2));
        } else {
          if (stack.length < 2) {
            throw new Error('Not enough operands for ' + token);
          }
          const operand2 = stack.pop();
          const operand1 = stack.pop();
          stack.push(performOperation(operand1, operand2, token));
        }
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
    return ['+', '-', '*', '/', 'sqrt', 'max'].includes(token);
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
        throw new Error('Invalid operator: ' + operator);
    }
  }
  
  module.exports = evaluateRPN;
  