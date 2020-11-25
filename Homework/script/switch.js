let a = +prompt('Введите число от 0 до 15');
let res = '';

switch (a) {
  case 0:
    res = a;
    a++;
  case 1:
    res = res + ' ' + a;
    a++;
  case 2:
    res = res + ' ' + a;
    a++;
  case 3:
    res = res + ' ' + a;
    a++;
  case 4:
    res = res + ' ' + a;
    a++;
  case 5:
    res = res + ' ' + a;
    a++;
  case 6:
    res = res + ' ' + a;
    a++;
  case 7:
    res = res + ' ' + a;
    a++;
  case 8:
    res = res + ' ' + a;
    a++;
  case 9:
    res = res + ' ' + a;
    a++;
  case 10:
    res = res + ' ' + a;
    a++;
  case 11:
    res = res + ' ' + a;
    a++;
  case 12:
    res = res + ' ' + a;
    a++;
  case 13:
    res = res + ' ' + a;
    a++;
  case 14:
    res = res + ' ' + a;
    a++;
  case 15:
    res = res + ' ' + a;
}

alert(res.trim());
