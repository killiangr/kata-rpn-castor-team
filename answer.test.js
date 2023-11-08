const evaluateRPN = require('./answer');

test('Valid RPN expression from the exercise', () => {
  const rpnExpression = "20 2 +";
  expect(evaluateRPN(rpnExpression)).toBe(22);
});

test('Valid RPN expression from the exercise 2', () => {
  const rpnExpression = "4 2 + 3 -";
  expect(evaluateRPN(rpnExpression)).toBe(3);
});

test('Valid RPN expression', () => {
  const rpnExpression = "3 4 + 2 *";
  expect(evaluateRPN(rpnExpression)).toBe(14);
});

test('Division by zero', () => {
  const rpnExpression = "4 0 /";
  expect(() => evaluateRPN(rpnExpression)).toThrow('Division by zero');
});

test('Invalid token', () => {
  const rpnExpression = "3 4 @";
  expect(() => evaluateRPN(rpnExpression)).toThrow('Invalid token: @');
});

test('Invalid expression', () => {
  const rpnExpression = "3 + 4";
  expect(() => evaluateRPN(rpnExpression)).toThrow('Invalid expression');
});
