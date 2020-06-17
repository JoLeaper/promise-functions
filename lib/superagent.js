const request = require('superagent');

// prints a single futurama quote
request.get('http://futuramaapi.herokuapp.com/api/quotes/1')
  .then(res => console.log(res));

// to get more than one quote
request.get('http://futuramaapi.herokuapp.com/api/quotes/5')
  .then(res => console.log(res));

// to get quotes from a certain character
request.get('http://futuramaapi.herokuapp.com/api/characters/Bender')
  .then(res => console.log(res));
