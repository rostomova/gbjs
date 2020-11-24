'use strict';
let tempCel = prompt('Введите температуру в цельсиях');

if (tempCel == '') {
  alert('Увы, дружочек, ты ничего не ввёл!');
} else if (isNaN(parseInt(tempCel))) {
  alert('Увы, дружочек, ты ввел не циферки!');
} else {
  var tempFar = (9 / 5) * tempCel + 32;
  alert('Температура по Фарентгейту: ' + tempFar);
}
