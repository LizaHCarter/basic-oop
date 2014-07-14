/*global prompt:true*/
var prompt = require('sync-prompt').prompt;

var dogs = [];

var option = prompt('Do you want to add a (d)og or (q)uit? ');

while(option === 'd'){
  var dog = {};
  dog.name = prompt('Dog name: ');
  dog.age = prompt('Dog age: ');
  dog.age = parseInt(dog.age);
  dog.breed = prompt('Dog breed: ');
  dogs.push(dog);
  option = prompt('Add another (d)og or (q)uit? ');
}

if(option !== 'd'){
  console.log(dogs);
}
