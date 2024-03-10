import name from './user-name.js';

const getRandomInclusive = (min, max) => {
  const bottom = Math.ceil(min);
  const top = Math.floor(max);
  return Math.floor(Math.random() * (top - bottom + 1) + bottom);
};

const check = (userAnswer, calcedValue) => {
  if (userAnswer === calcedValue) {
    console.log('Correct!');
    console.log(userAnswer);
    console.log(calcedValue);
  } else {
    console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${calcedValue}.\n Let's try again, ${name}!`);
  }
};

export { getRandomInclusive, check };
