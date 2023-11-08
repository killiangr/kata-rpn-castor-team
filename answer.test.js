const evaluateRPN = require('./answer');

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
