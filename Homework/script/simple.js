// @ts-check
function simple(n) {
  let simpleRes;
  if (n == 1 || n == 2) {
    simpleRes = true;
  } else {
    for (let count = 2; count < n; count++) {
      if (n % count == 0) {
        simpleRes = false;
        break;
      } else {
        simpleRes = true;
      }
    }
  }
  return simpleRes;
}

let i = 0;
let end = 100;
let result = '';

while (i <= end) {
  if (simple(i) == true) {
    result = result + ' ' + i;
  }
  i++;
}

alert('Простые числа от 0 до 100: ' + result.trim());

// let a = +prompt('Введите число');
// if (simple(a) == true) {
//   alert('Простое число');
// } else {
//   alert('Не простое число');
// }
