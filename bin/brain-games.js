#!/usr/bin/env node
import promptly from 'promptly';

async function greetings() {
  console.log('Welcome to the Brain Games!');
  const name = await promptly.prompt('May I have your name?: ');
  console.log(`Hello, ${name}!`);
}

greetings()
  .catch((error) => {
    console.log('brain-games.js: something went wrong');
    console.error(error);
  });
