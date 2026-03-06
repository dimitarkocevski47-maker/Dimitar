export default function sum(a, b) {
  return a + b;
}

export function difference(a, b) {
  return a - b;
}

export function multiply(a, b) {
  return a * b;
}

export function divson(a, b) {
  if (b === 0)
    throw new Error("DivideByZeroExpectation: Cnnot divide by zero!");
  return a / b;
}
