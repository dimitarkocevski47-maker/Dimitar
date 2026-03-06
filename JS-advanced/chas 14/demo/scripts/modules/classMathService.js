export class Math {
  static PI = 3.14;

  static sum(a, b) {
    return a + b;
  }

  static difference(a, b) {
    return a - b;
  }

  static multiply(a, b) {
    return a * b;
  }

  static divson(a, b) {
    if (b === 0)
      throw new Error("DivideByZeroExpectation: Cnnot divide by zero!");
    return a / b;
  }
}
