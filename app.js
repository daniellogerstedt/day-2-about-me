'use strict';

alert('The following questions are yes or no, please answer Y or N.');

// First Question.
var dogs = prompt('Does Dan like dogs?');
console.log('Dan likes dogs:', dogs);

// Second Question.
var hats = prompt('Does Dan wear hats?');
console.log('Dan wears hats:', hats);

// Third Question.
var games = prompt('Does Dan like video games?');
console.log('Dan likes games:', games);

// Fourth Question.
var veteran = prompt('Is Dan a veteran?');
console.log('Dan is a veteran:', veteran);

// Fifth Question.
var beer = prompt('Do you think I like beer?');
console.log('Dan likes beer:', beer);

// Validation Conditional Statements: This code verifies whether the person got all answers, some answers, or no answers correct.
if (dogs.toLowerCase() === 'y' && hats.toLowerCase() === 'n' && games.toLowerCase() === 'y' && veteran.toLowerCase() === 'y' && beer.toLowerCase() === 'y') {
  alert('Awesome! you know me very well!');
} else if (dogs.toLowerCase() === 'y' || hats.toLowerCase() === 'n' || games.toLowerCase() === 'y' || veteran.toLowerCase() === 'y' || beer.toLowerCase() === 'y') {
  alert('you\'re Partially Right!');
} else {
  alert('you don\'t know me very well');
}

// Validation Conditional Statements: This code verifies each individual answer to determine which answers were correctly answered and which weren't.
if (dogs.toLowerCase() === 'y') {
  alert('Yeah, Dan does like dogs!');
} else {
  alert('Nah, Dan does infact like dogs.');
}

if (hats.toLowerCase() === 'n') {
  alert('Correct, Dan doesn\'t usually wear hats.');
} else {
  alert('Nah, Dan owns hats but wears none.');
}

if (games.toLowerCase() === 'y') {
  alert('Heck ya! Dan\'s a gamer!');
} else {
  alert('Dan actually does like games.');
}

if (veteran.toLowerCase() === 'y') {
  alert('Dan was a soldier for sure.');
} else {
  alert('Incorrect, Dan was in the Army.');
}

if (beer.toLowerCase() === 'y') {
  alert('Duh, Beer is tasty!');
} else {
  alert('Wrong, Beer is super diverse and great.');
}
