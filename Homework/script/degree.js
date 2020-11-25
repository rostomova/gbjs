'use strict';

function power(val, pow) {
  if (pow == 1) {
    return val;
  } else {
    return val * power(val, --pow);
  }
}

let dval = +prompt('Введите число');
let dpow = +prompt('Введите степень');
alert(
  'Число ' + dval + ' в степени ' + dpow + ' будет равно ' + power(dval, dpow)
);
