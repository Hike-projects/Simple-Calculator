// index.js - Simple Node.js Calculator

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function performCalculation(num1, num2, operator) {
  switch (operator) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    case '/':
      return num1 / num2;
    default:
      return 'Invalid operator';
  }
}

rl.question('Enter first number: ', (num1) => {
  rl.question('Enter operator (+, -, *, /): ', (operator) => {
    rl.question('Enter second number: ', (num2) => {
      num1 = parseFloat(num1);
      num2 = parseFloat(num2);
      const result = performCalculation(num1, num2, operator);
      console.log(`Result: ${result}`);
      rl.close();
    });
  });
});