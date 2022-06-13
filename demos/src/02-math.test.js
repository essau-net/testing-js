const { sum, multiply, divide } = require('./02-math');

test('adds 1 + 3 should be 4', () => {
  const result = sum(1, 3);
  expect(result).toBe(4);
});

test('should be 4', () => {
  const result = multiply(1, 4);
  expect(result).toBe(4);
});

test(' should divide', () => {
  const result = divide(6, 3);
  expect(result).toBe(2);
  const result2 = divide(5, 2);
  expect(result2).toBe(2.5);
});

test(' should divide for zero', () => {
  const result = divide(6, 0);
  expect(result).toBeNull();
  const result2 = divide(5, 0);
  expect(result2).toBeNull();
});
