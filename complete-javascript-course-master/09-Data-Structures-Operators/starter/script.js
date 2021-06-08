// // 'use strict';

// // // Data needed for a later exercise
// // const flights =
// //   '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// // // Data needed for first part of the section
// // const restaurant = {
// //   name: 'Classico Italiano',
// //   location: 'Via Angelo Tavanti 23, Firenze, Italy',
// //   categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
// //   starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
// //   mainMenu: ['Pizza', 'Pasta', 'Risotto'],

// //   openingHours: {
// //     thu: {
// //       open: 12,
// //       close: 22,
// //     },
// //     fri: {
// //       open: 11,
// //       close: 23,
// //     },
// //     sat: {
// //       open: 0, // Open 24 hours
// //       close: 24,
// //     },
// //   },
// //   order: function (starterIndex, mainIndex) {
// //     return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
// //   },

// //   orderDelivery: function ({
// //     starterIndex = 1,
// //     mainIndex = 0,
// //     time = '20.00',
// //     address,
// //   }) {
// //     // console.log(`Order recieved! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`);
// //   },

// //   orderPasta: function(ing1, ing2, ing3) {
// //     // console.log(`Here is your delicious pasta with ${ing1}, ${ing2}, and ${ing3}`);
// //   }
// // };

// // //pulling elements from array
// // // const {name, openingHours, categories} = restaurant;
// // // console.log(name, openingHours, categories);

// // // //giving new varible names to elements in array
// // const {name: resturauntName, openingHours: hours, categories: tags} = restaurant;
// // // console.log(resturauntName, hours, tags);

// // // //very helful with third party api's Default Values
// // const { menue = [], starterMenu: starters = []} = restaurant;
// // console.log(menue, starters);

// // //mutating varibles
// // let a = 111;
// // let b = 999;
// // const obj = { a: 23, b: 7, c: 14 };

// // ({ a, b } = obj);
// // // console.log(a, b);

// // //NESTED OBJECTS
// // const { fri } = openingHours;
// // // console.log(fri);

// // // const arr = [2, 3, 4];
// // // const a = arr[0];
// // // const b = arr[1];
// // // const c = arr[2];

// // // //destructuring array from right side
// // // const [x, y, z] = arr;
// // // console.log(x, y, z);

// // //first skips second element in array and then gets the third
// // // let [main, , secondary] = restaurant.categories;
// // // console.log(main, secondary);

// // // //switching varibles
// // // // const temp = main;
// // // // main = secondary;
// // // // secondary = temp;
// // // // console.log(main, secondary);

// // // [main, secondary] = [secondary, main]
// // // console.log(main, secondary);

// // // //recieve 2 return values from a function
// // // const [starter, mainCourse] = restaurant.order(2, 0);
// // // console.log(starter, mainCourse);

// // // //nested destructuring
// // // const nested = [2, 4, [5, 6]];
// // // // const [i, , j] = nested;
// // // // console.log(i, j);
// // // const [i, , [j, k]] = nested;
// // // console.log(i, j, k);

// // // //Default Values
// // // const [p=1, q=1, r=1] = [8, 9];
// // // console.log(p,q,r);

// // const arr = [7, 8, 9];
// // const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
// // console.log(badNewArr);

// // const newArr = [1, 2, ...arr];
// // console.log(newArr);
// // //... spread operator 

// // //creating completly new array using spread operator
// // const newMenu = [...restaurant.mainMenu, 'Gnocci'];
// // console.log(newMenu);

// // //copy array
// // const mainMenuCopy = [...restaurant.mainMenu];

// // //join 2 arrays or more together
// // const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
// // console.log(menu);

// // //Iterables: arrays, strings, maps, sets. NOT objects
// // const str = 'Jonas';
// // const letters = [...str, '', 'S.'];
// // console.log(letters);

// // //Real World Example
// // // const ingredients = [prompt('Let\'s make pasta! Ingredient 1?'),prompt('Let\'s make pasta! Ingredient 2?'), prompt('Let\'s make pasta! Ingredient 3?')];
// // // console.log(ingredients);

// // // restaurant.orderPasta(...ingredients);

// // //Objects
// // const newRestaurant = { foundedIn: 1998, ...restaurant, founder: 'Guiseppe'}
// // console.log(newRestaurant);

// // const restaurantCopy = {...restaurant};
// // restaurantCopy.name = 'Ristorante Roma';
// // console.log(restaurantCopy.name);
// // console.log(restaurant.name);

// //SPRED, because on right side of =
// // const arr = []

// // || or
// // Use ANY data type, return ANY data type, short circuiting
// console.log('---- OR ----');
// console.log(3 || 'Jonas');
// console.log('' || 'Jonas');
// console.log(true || 0);
// console.log(undefined || null);

// //prints our hello because its the first truthy value 
// // falsey, falsey, falsey, truthy
// //the result is true if first operant is true 
// console.log(undefined || 0 || '' || 'Hello' || 23 || null);

// //short circuits when the first operator is false opposite of || or operator
// console.log('---- AND ----');
// console.log(0 && 'Jonas');
// console.log(7 && 'Jonas');

// //prints out null because first falsey value then short circuits
// console.log('Hello' && 23 && null && 'jonas');

// ?? operator nullish coalish
// Nullish: null and undefined (NOT 0 or '')
//only nullish values will short circuit 


// CODING CHALLENGE ------------------------------------------

// Your tasks:
// 1. Create one player array for each team (variables 'players1' and 
// 'players2')
// 2. The first player in any player array is the goalkeeper and the others are field 
// players. For Bayern Munich (team 1) create one variable ('gk') with the 
// goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 
// field players
// 3. Create an array 'allPlayers' containing all players of both teams (22 
// players)
// 4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a 
// new array ('players1Final') containing all the original team1 players plus 
// 'Thiago', 'Coutinho' and 'Perisic'
// 5. Based on the game.odds object, create one variable for each odd (called 
// 'team1', 'draw' and 'team2')
// 6. Write a function ('printGoals') that receives an arbitrary number of player 
// names (not an array) and prints each of them to the console, along with the 
// number of goals that were scored in total (number of player names passed in)
// 7. The team with the lower odd is more likely to win. Print to the console which 
// team is more likely to win, without using an if/else statement or the ternary 
// operator.
// Test data for 6.: First, use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'. 
// Then, call the function again with players from game.score

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
  [
  'Neuer',
  'Pavard',
  'Martinez',
  'Alaba',
  'Davies',
  'Kimmich',
  'Goretzka',
  'Coman',
  'Muller',
  'Gnarby',
  'Lewandowski',
  ],
  [
  'Burki',
  'Schulz',
  'Hummels',
  'Akanji',
  'Hakimi',
  'Weigl',
  'Witsel',
  'Hazard',
  'Brandt',
  'Sancho',
  'Gotze',
  ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski',
  'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
  team1: 1.33,
  x: 3.25,
  team2: 6.5,
  },
  };


  //1. creating one varible for each of two arrays by destructuring arrays
  const [players1, players2] = game.players
  console.log(players1, players2);

  //2. create var with goalkeepers and one for remaining players whith spread operator
  const [gk, ...fieldPlayers] = players1;
  console.log(gk, fieldPlayers);

  //3. create varible with all players from both arrays using spread operator
  const allPlayers =[...players1, ...players2];
  console.log(allPlayers);

  //4.
  const players1Final = [...players1, 'Thiago', 'Coutino', 'Periscic'];

  //5.
  const {odds: {team1, x: draw, team2}} = game;
  console.log(team1, draw, team2);

  //6.
  const printGoals = function(...players) {
    console.log(`${players.length} goals were scored`);
  };

  // printGoals('Davis', 'Muller', 'Lewandowski', 'Kimmich');
  // printGoals('Davis', 'Muller');
  printGoals(...game.scored);

  //7.
  team1 < team2 && console.log('Team 1 is more likely to win');
  team1 > team2  



