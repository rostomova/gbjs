'use strict';

let a = prompt('Введите число a');
let b = prompt('Введите число b');
let c;

if (a == '' || b == '' || isNaN(parseInt(a)) || isNaN(parseInt(b))) {
  alert('Дружочек, что-то пошло не так. Введи циферки!');
} else if (a >= 0 && b >= 0) {
  c = a - b;
  alert('a - b = ' + c);
} else if (a < 0 && b < 0) {
  c = a * b;
  alert('a * b = ' + c);
} else {
  c = +a + +b;
  alert('a + b =' + c);
}
