'use strict';

function plus(a, b) {
  return +a + +b;
}

function minus(a, b) {
  return a - b;
}

function multi(a, b) {
  return a * b;
}

function divi(a, b) {
  return a / b;
}

function mathOperation(arg1, arg2, operation) {
  switch (operation) {
    case 'Сложение':
      return plus(arg1, arg2);
      break;
    case 'Вычитание':
      return minus(arg1, arg2);
      break;
    case 'Умножение':
      return multi(arg1, arg2);
      break;
    case 'Деление':
      return divi(arg1, arg2);
      break;
  }
}

let arg1 = +prompt('Введите первое число');
let arg2 = +prompt('Введите второе число');
let operation = prompt(
  'Введите одну из операций: Сложение, Вычитание, Умножение, Деление'
);
alert(
  'Результат операции ' +
    operation +
    'между числами ' +
    arg1 +
    ' и ' +
    arg2 +
    ' будет равен ' +
    mathOperation(arg1, arg2, operation)
);
