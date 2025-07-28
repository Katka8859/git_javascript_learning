class Calculator {
  add(a, b) {
    return a + b;
  }

  subtract(a, b) {
    return a - b;
  }

  multiple(a, b) {
    return a * b;
  }

  divide(a, b) {
    return a / b;
  }
}

const calculation = new Calculator();

console.log("Výsledek součtu:", calculation.add(14, 41));
console.log("Výsledek odečítání:", calculation.subtract(174, 32));
console.log("Výsledek násobení:", calculation.multiple(47, 50));
console.log("Výsledek dělení:", calculation.divide(125, 7));
