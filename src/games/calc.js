import getRandomInclusive from '../utilits.js';
import constractGame from '../index.js';

const getTurnData = () => {
  const firstNumber = getRandomInclusive(0, 10);
  const secondNumber = getRandomInclusive(0, 10);
  const operands = ['+', '-', '*'];
  const index = getRandomInclusive(0, 2);
  const question = `${firstNumber} ${operands[index]} ${secondNumber}`;
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
  return [question, correctAnswer];
};

const getCount = () => {
  const task = 'What is the result of the expression?';
  constractGame(task, getTurnData);
};

export default getCount;
