/*
Cvičení - kalkulačka, funkce (⌛10:00)
Vytvoř jednoduchou kalkulačku pomocí funkcí. Zvol function nebo constant function. Složka: javascript/exercises, název souboru: calculator.js
Vytvoř 4 funkce: add, subtract, multiply, divide, které budou mít 2 parametry (2 čísla)
Funkce také zapíší výsledek do konzole.
Vytvoř volání:
add: 15+48
subtract: 98-41
multiply: 54*30
divide: 88/6
*/
const add = (add) => {
  console.log("Součet dvou čísel je: " + add);
};
const substract = (substract) => {
  console.log("Odečet dvou čísel je " + substract);
};
const multiply = (multiply) => {
  console.log("Nasobení dvou čísel je: " + multiply);
};
const divide = (divide) => {
  console.log("Dělení dvou čísel je: " + divide);
};

add(15 + 48);
substract(98 - 41);
multiply(54 * 30);
divide(88 / 6);

function add2(a, b) {
  const result = a + b;
  console.log(`${a} + ${b} = ${result}`);
}

function subtract2(a, b) {
  const result = a - b;
  console.log(`${a} - ${b} = ${result}`);
}

const multiply2 = (a, b) => {
  const result = a * b;
  console.log(`${a} * ${b} = ${result}`);
};

const divide2 = (a, b) => {
  const result = a / b;
  console.log(`${a} / ${b} = ${result}`);
};

add2(15, 48);
subtract2(98, 41);
multiply2(54, 30);
divide2(88, 6);
