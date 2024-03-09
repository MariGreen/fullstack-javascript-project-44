import readlineSync from 'readline-sync';
import getRandomInclusive from '../random.js';
import name from '../user-name.js';

const count = () => {
  console.log(`Hello, ${name}! \nWhat is the result of the expression?`);
  for (let i = 0; i < 3; i += 1) {
    const firstNumber = getRandomInclusive(0, 10);
    const secondNumber = getRandomInclusive(0, 10);
    const operands = ['+', '-', '*'];
    const index = getRandomInclusive(0, 2);
    console.log(`Question: ${firstNumber}${operands[index]}${secondNumber}`);
    const answer = readlineSync.question('Your answer: ');
    let correctAnswer = 0;
    switch (operands[index]) {
      case '+': {
        correctAnswer = firstNumber + secondNumber;
        break;
      }
      case '-': {
        correctAnswer = firstNumber - secondNumber;
        break;
      }
      case '*': {
        correctAnswer = firstNumber * secondNumber;
        break;
      }
      default:
        console.log(operands[index]);
    }
    if (correctAnswer === Number(answer)) {
      console.log('congrats');
    } else {
      console.log('ups');
    }
  }
};

export default count();

// игра калькулятор, логика
