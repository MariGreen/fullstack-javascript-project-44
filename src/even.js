import readlineSync from 'readline-sync';
import name from './cli.js';

const getRandomInclusive = (min, max) => {
  const bottom = Math.ceil(min);
  const top = Math.floor(max);
  return Math.floor(Math.random() * (top - bottom + 1) + bottom);
};

const isEven = () => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  for (let i = 0; i < 3; i += 1) {
    const number = getRandomInclusive(0, 100);
    console.log(`Question: ${number}`);
    const answer = readlineSync.question('Your answer: ');
    if ((number % 2 === 0 && answer === 'yes') || (number % 2 !== 0 && answer === 'no')) {
      console.log('Correct!');
    } else if (number % 2 !== 0 && answer === 'yes') {
      console.log('\'yes\' is wrong answer ;(. Correct answer was \'no\'.');
      console.log('Let\'s try again, Bill!');
      return;
    } else if (number % 2 === 0 && answer === 'no') {
      console.log('\'no\' is wrong answer ;(. Correct answer was \'yes\'.');
      console.log('Let\'s try again, Bill!');
      return;
    } else {
      console.log('Let\'s try again, Bill!');
      return;
    }
  }
  console.log(`'Congratulations, ${name}'`);
};

export default isEven;

// игра чет-нечет, логика
