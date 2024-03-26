import getRandomInclusive from '../utilits.js';
import constractGame from '../index.js';

const getRandomOperator = () => {
  const operators = ['+', '-', '*'];
  return operators[getRandomInclusive(0, operators.length - 1)];
};

const calculation = (operand1, operand2, symbol) => {
  switch (symbol) {
    case '+':
      return operand1 + operand2;
    case '-':
      return operand1 - operand2;
    case '*':
      return operand1 * operand2;
    default:
      throw new Error(`Invalid operator - ${symbol}`);
  }
};

const getTurnData = () => {
  const firstNumber = getRandomInclusive(0, 10);
  const secondNumber = getRandomInclusive(0, 10);
  const operator = getRandomOperator();
  const question = `${firstNumber} ${operator} ${secondNumber}`;
  const correctAnswer = calculation(firstNumber, secondNumber, operator);
  return [question, correctAnswer];
};

const getCount = () => {
  const task = 'What is the result of the expression?';
  constractGame(task, getTurnData);
};

export default getCount;
