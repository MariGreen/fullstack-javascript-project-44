import readlineSync from 'readline-sync';
import { getRandomInclusive, check } from '../utilits.js';
import name from '../user-name.js';

const isEven = () => {
  console.log(`Hello, ${name}! \nAnswer "yes" if the number is even, otherwise answer "no".`);
  for (let i = 0; i < 3; i += 1) {
    const number = getRandomInclusive(0, 100);
    console.log(`Question: ${number}`);
    const answer = readlineSync.question('Your answer: ');
    let correctAnswer = '';
    if (number % 2 === 0) {
      correctAnswer = 'yes';
    } else {
      correctAnswer = 'no';
    }
    check(answer, correctAnswer);
  }

  console.log(`Congratulations, ${name}`);
};

export default isEven;

// игра чет-нечет, логика
