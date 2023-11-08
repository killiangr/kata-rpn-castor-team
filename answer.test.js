const evaluateRPN = require('./answer');

test('Valid RPN expression: Addition', () => {
  const rpnExpression = "20 2 +";
  expect(evaluateRPN(rpnExpression)).toBe(22);
});

test('Valid RPN expression: Mixed Arithmetic', () => {
  const rpnExpression = "4 2 + 3 -";
  expect(evaluateRPN(rpnExpression)).toBe(3);
});

test('Valid RPN expression: Complex Expression', () => {
  const rpnExpression = "3 4 + 2 *";
  expect(evaluateRPN(rpnExpression)).toBe(14);
});

test('Valid RPN expression: Square Root', () => {
  const rpnExpression = "16 sqrt";
  expect(evaluateRPN(rpnExpression)).toBe(4);
});

test('Valid RPN expression: Max of Operands', () => {
  const rpnExpression = "5 8 10 max";
  expect(evaluateRPN(rpnExpression)).toBe(10);
});

test('Handle all possible errors, with nice error messages', () => {
  const rpnExpression = "3 +";
  expect(evaluateRPN(rpnExpression)).toBe("Invalid Expression");
});

test('Valid RPN expression: Floating Point', () => {
  const rpnExpression = "3.5 2.1 +";
  expect(evaluateRPN(rpnExpression)).toBeCloseTo(5.6, 2);
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
  const rpnExpression = "3 +";
  expect(() => evaluateRPN(rpnExpression)).toThrow('Not enough operands for +');
});

test('Invalid expression: Complex Numbers', () => {
  const rpnExpression = "3 4 + i *";
  expect(() => evaluateRPN(rpnExpression)).toThrow('Invalid expression: Complex numbers not supported');
});

test('Invalid expression: Undefined Operation', () => {
  const rpnExpression = "3 4 ? 2 *";
  expect(() => evaluateRPN(rpnExpression)).toThrow('Invalid token: ?');
});
