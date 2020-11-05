function power(val, pow) {
  if (pow == 1) {
    return val;
  } else {
    return val * power(val, --pow);
  }
}

var dval = +prompt('Введите число');
var dpow = +prompt('Введите степень');
alert(
  'Число ' + dval + ' в степени ' + dpow + ' будет равно ' + power(dval, dpow)
);
