// start with strings, numbers and booleans
let age = 100;
let age2 = age;
console.log(age, age2); // 100 100
age = 200;
console.log(age, age2); // 200 100
// changing original did not update age2

// Let's say we have an array
const players = ['Wes', 'Sarah', 'Ryan', 'Poppy'];

// and we want to make a copy of it.
const team = players;

// You might think we can just do something like this:
team[3] = 'Jacquelyn';

// however what happens when we update that array?
// it changes the original array of players
console.log(players, team);

// Why? It's because that is an array reference, not an array copy. They both point to the same array!

// So, how do we fix this? We take a copy instead!

	// one way
const team2 = players.slice(); //returns entire array
team2[1] = 'Lux';
console.log(players, team2);

// or create a new array and concat the old one in
const team3 = [].concat(players);

// or use the new ES6 Spread
const team4 = [...players];
team4[1] = 'Bob';
console.log(players, team4);

const team5 = Array.from(players);

// now when we update it, the original one isn't changed

// The same thing goes for objects, let's say we have a person object

// with Objects
const person = {
  name: 'Jacquelyn Marcella',
  age: 80
};

// and think we make a copy:
const captain = person;
// captain.number = 99;
console.log(person, captain);

// how do we take a copy instead?
const captain2 = Object.assign({}, person, { number: 100});
console.log(person, captain2);

// We will hopefully soon see the object ...spread

// Things to note - this is only 1 level deep - both for Arrays and Objects. lodash has a cloneDeep method, but you should think twice before using it.
