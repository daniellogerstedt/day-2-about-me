'use strict';

alert('The following questions are yes or no, please answer Y or N.');

var dogs = prompt('Does Dan like dogs?');
console.log('Dan number of dogs:', dogs);

var hats = prompt('Does Dan wear hats?');
console.log('Dan owns this many hats:', hats);

var games = prompt('Does Dan like video games?');
console.log('Dan owns how many games:', games);

var veteran = prompt('Is Dan a veteran?');
console.log('Dan is how old?', veteran);

var beer = prompt('Do you think I like beer?');
console.log('Dan likes beer:', beer);

if (dogs === 'Y' && hats === 'N' && games === 'Y' && veteran === 'Y' && beer === 'Y') {
  alert('Awesome! You know me very well!');
} else if (dogs === 'Y' || hats === 'N' || games === 'Y' || veteran === 'Y' || beer === 'Y') {
  alert('You\'re Partially Right!');
} else {
  alert('You don\'t know me very well');
}
