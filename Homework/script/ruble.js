'use strict';

function ruble(a) {
  let sum = String(a);
  let count = sum.length;
  let last = sum.charAt(count - 1);
  let previous = sum.charAt(count - 2);
  if (count > 1 && previous == 1) {
    alert('Ваша сумма в ' + a + ' рублей успешно зачислена.');
  } else {
    switch (+last) {
      case 1:
        alert('Ваша сумма в ' + a + ' рубль успешно зачислена.');
        break;
      case 2:
      case 3:
      case 4:
        alert('Ваша сумма в ' + a + ' рубля успешно зачислена.');
        break;
      case 5:
      case 6:
      case 7:
      case 8:
      case 9:
      case 0:
        alert('Ваша сумма в ' + a + ' рублей успешно зачислена.');
        break;
    }
  }
}

let userSum = prompt('Введите сумму в рублях, которую хотите положить на счет');

if (userSum == '' || isNaN(parseInt(userSum))) {
  alert('Дружочек, что-то пошло не так. Введи циферки!');
} else {
  ruble(userSum);
}
