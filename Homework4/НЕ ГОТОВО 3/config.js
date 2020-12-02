'use sctrict';

class Question {
  constructor(text, varA, varB, varC, varD, rightVar) {
    this.text = text;
    this.varA = varA;
    this.varB = varB;
    this.varC = varC;
    this.varD = varD;
    this.rightVar = rightVar;
  }

  check(userVar) {
    if (this.rightVar == userVar) {
      return true;
    } else {
      return false;
    }
  }
}

const question1 = new Question(
  'Зимой и летом одним цветом',
  'Берёза',
  'Липа',
  'Ёлка',
  'Огород',
  'c'
);
const question2 = new Question('', '', '', '', '', '');
