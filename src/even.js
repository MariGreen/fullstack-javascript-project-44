import readlineSync from 'readline-sync';
import getRandomInclusive from './random.js';

const isEven = () => {
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  for (let i = 0; i < 3; i += 1) {
    const number = getRandomInclusive(0, 100);
    console.log(`Question: ${number}`);
    const answer = readlineSync.question('Your answer: ');
    if ((number % 2 === 0 && answer === 'yes') || (number % 2 !== 0 && answer === 'no')) {
      console.log('Correct!');
    } else if (number % 2 !== 0 && answer === 'yes') {
      console.log(`'yes' is wrong answer ;(. Correct answer was 'no'.\n Let's try again, ${name}!`);
      return;
    } else if (number % 2 === 0 && answer === 'no') {
      console.log(`'no' is wrong answer ;(. Correct answer was 'yes'.\n Let's try again, ${name}!`);
      return;
    } else {
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}`);
};

export default isEven;

// игра чет-нечет, логика
