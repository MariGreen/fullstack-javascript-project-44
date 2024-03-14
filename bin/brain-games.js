#!/usr/bin/env node
import readlineSync from 'readline-sync';
import isEven from '../src/games/even.js';
import getCount from '../src/games/calc.js';
import setMaxDivisor from '../src/games/gcd.js';
import getNumberRow from '../src/games/progression.js';
import isPrime from '../src/games/prime.js';

console.log('Welcome to the Brain Games!');

const games = ['Even-Odd', 'Calculate', 'GCD', 'Progression', 'Prime'];
const index = readlineSync.keyInSelect(games, 'Which game do you prefer?');

const startBrainGame = () => {
  switch (games[index]) {
    case 'Even-Odd': {
      isEven();
      break;
    }
    case 'Calculate': {
      getCount();
      break;
    }
    case 'GCD': {
      setMaxDivisor();
      break;
    }
    case 'Progression': {
      getNumberRow();
      break;
    }
    case 'Prime': {
      isPrime();
      break;
    }
    default:
      console.log('May be next time...');
  }
};

startBrainGame(games[index]);

// общий файл, оболочка
