'use strict';

// let hasDriversLicense = false;
// const passTest = true;

// if (passTest) hasDriversLicense = true;
// if (hasDriversLicense) console.log('I can Drive');

//strict mode resevers these words cant use them as variables
// const interface = 'Audio';
// const private = 534;

//created function logger
// function logger() {
//     console.log('My name is Zach');
// }

// // calling / running / invoking function
// logger();
// logger();
// logger();

// function fruitProcessor(apples, oranges) {
//     const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
//     return juice;
// }

// // 5 and 0 are arugments
// const appleJuice = fruitProcessor(5, 0);
// console.log(appleJuice);

// const appleOrangeJuice = fruitProcessor(2, 4);
// console.log(appleOrangeJuice);

// const water = fruitProcessor(0, 0);
// console.log(water);

// //function declaration
// function calcAge1 (birthYear) {
//     return 2037- birthYear;
// }

// const age1 = calcAge1(1991);
// console.log(age1);

// // //function expression
// const calcAge2 = function (birthYear) {
//     return 2037- birthYear;
// }

// const age2 = calcAge2(1991);
// console.log(age1, age2);

// // arrow function
// const calcAge3 = birthYear => 2037-birthYear;
// const age3 = calcAge3(1991);
// console.log(age3);

// const yearsUntilRetirement = (birthYear, firstName) => {
//     const age = 2037 - birthYear;
//     const retirement = 65 - age;
//     //return retirement
//     return `${firstName} retires in ${retirement}`;
// }

// console.log(yearsUntilRetirement(1991, 'Zach'));
// console.log(yearsUntilRetirement(1980, 'Bob'));

// function cutFruitPieces (fruit) {
//     return fruit * 4;
// }

// function fruitProcessor(apples, oranges) {
//     const applePieces = cutFruitPieces(apples);
//     const orangePieces = cutFruitPieces(oranges);

//     const juice = `Juice with ${applePieces} apples and ${orangePieces} oranges.`;
//      return juice;
// }

// console.log(fruitProcessor(2, 3));

// const calcAge = function(birthYear) {
//     return 2037 - birthYear;
// }

// const yearsUntilRetirement = function (birthYear, firstName) {
//     const age = calcAge(birthYear);
//     const retirement = 65 - age;
    
//     if(retirement > 0) {
//         //return ends function anything below will be ignored
//         return retirement
//         //this will be ignored 
//         // return `${firstName} retires in ${retirement} years`;
//     } else {
//         return -1;
//     }


   
//     // return `${firstName} retires in ${retirement} years`;
// }

// console.log(yearsUntilRetirement(1991, 'Zach'));
// console.log(yearsUntilRetirement(1970, 'Mike'));


                //coding challenge 1
// Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new 
// gymnastics discipline, which works differently.
// Each team competes 3 times, and then the average of the 3 scores is calculated (so 
// one average score per team).
// A team only wins if it has at least double the average score of the other team. 
// Otherwise, no team wins!
// Your tasks:
// 1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
// 2. Use the function to calculate the average for both teams
// 3. Create a function 'checkWinner' that takes the average score of each team 
// as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner 
// to the console, together with the victory points, according to the rule above. 
// Example: "Koalas win (30 vs. 13)"
// 4. Use the 'checkWinner' function to determine the winner for both Data 1 and 
// Data 2
// 5. Ignore draws this time
// Test data:
// § Data 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
// § Data 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27
// Hints:
// § To calculate average of 3 values, add them all together and divide by 3
// § To check if number A is at least double number B, check for A >= 2 * B. 
// Apply this to the team's average scores 


//    const calcAverage = (a, b, c) => (a + b + c) /3;
// // console.log(calcAverage(3,4,5));

// // use let instead of const so can change scores later
// let scoreDolphins = calcAverage(44,23,71);
// let scoreKoalas = calcAverage(65,54,49);
// console.log(scoreDolphins, scoreKoalas);

// const checkWinner = function (avgDolphins, avgKoalas) {
//     if (avgDolphins >= 2* avgKoalas) {
//         console.log(`Dolphins Win(${avgDolphins}) vs. ${avgKoalas})`);
//     } else if (avgKoalas >= 2* avgDolphins) {
//         console.log(`Koalas Win(${avgKoalas}) vs. ${avgDolphins})`);
//     } else {
//         console.log('No team wins....');
//     }
// }
// checkWinner(scoreDolphins, scoreKoalas);

// //test 2
// scoreDolphins = calcAverage(85,54,41);
// scoreKoalas = calcAverage(23,34,27);
// console.log(scoreDolphins, scoreKoalas);
// checkWinner(scoreDolphins, scoreKoalas);

// const friend1 = 'Mcheal';
// const friend2 = 'Steven';
// const friend3 = 'Peter';

// const friends = ['Micheal', 'Steven', 'Peter'];
// console.log(friends);
// const y = new Array(1991, 1984, 2008, 2020);
// //arrays start at index 0
// console.log(friends[0]);
// console.log(friends[2]);
// //gets length of array
// console.log(friends.length);
// //gets the last element from array
// console.log(friends[friends.length - 1]);

// //mutates element at number 2 from Peter to Jay
// friends[2] = 'Jay';
// console.log(friends);
//arrays are not primative values so you can mutate them even though they were declared with const

//you can put an array inside another array
// const zach = ['Zach', 'Howell', 2037-1991, 'student' , friends];
// console.log(zach);
// console.log(zach.length);


// //Exerscise
// const calcAge = function(birthYear) {
//     return 2037 - birthYear;
// }
// const years = [1990, 1967, 2002, 2018];

// const age1 = calcAge(years[0]);
// const age2 = calcAge(years[1]);
// const age3 = calcAge(years[years.length - 1]);
// console.log(age1, age2, age3);

// const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])];
// console.log(ages);


// const friends = ['Micheal', 'Steven', 'Peter'];
// //adds Jay to end of friends array
// const newLength = friends.push('Jay');
// console.log(friends);
// console.log(newLength);

// //adds element Jay to begging of array
// friends.unshift('John');
// console.log(friends);

// //Removes last element of array
// friends.pop();
// const popped = friends.pop();
// console.log(popped);
// console.log(friends);

// //removes first element of array
// friends.shift();
// console.log(friends);

// //returns elements position in array if element is not in array will be -1
// console.log(friends.indexOf('Steven'));
// console.log(friends.indexOf('Bob'));

// //if element is not in array it will return false
// console.log(friends.includes('Steven'));
// console.log(friends.includes('Bob'));

// if (friends.includes('Steven')) {
//     console.log('You have a friend named Steven');
// }


// const calcTip = function(bill) {
//     return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2
// }

// const bills = [125, 555, 44];
// const tips = [calcTip(bills[0]), calcTip(bills[1], calcTip(bills[2]))];
// console.log(bills, tips);












// Objects
    // key is firstName and value is 'Jonas' ect. this is called object literal syntax
// const jonas = {
//     firstName: 'Jonas',
//     lastName: 'Schedtmann',
//     age: 2037 - 1991,
//     job: 'teacher',
//     friends: ['Micheal', 'Peter', 'Steven']
// };
// console.log(jonas);

// //DOT NOTATION
// console.log(jonas.lastName);
// //BRACKET NOTATION
// console.log(jonas['lastName']);


// const nameKey = 'Name';
// console.log(jonas['first' + nameKey]);
// console.log(jonas['last' + nameKey]);


// // retrieving elements from an object
// const interestedIn = prompt("What do you want to know about Jonas? Choose between firstName, lastName, age, job, and friends");


// if(jonas[interestedIn]) {
//     console.log(jonas[interestedIn]);
// } else {
//     console.log('What are you doing?');
// }

// // adding elements to object using bracket or dot notaion
// jonas.location = 'Portugal';
// jonas['twitter'] = '@jonasSchem';
// console.log(jonas);

// console.log(`${jonas.firstName} has ${jonas.friends.length} friends and his best friend is called ${jonas.friends[0]}`);









//OBJECT Methods any function thats attached to an object is a method 


// const jonas = {
//     firstName: 'Jonas',
//     lastName: 'Schedtmann',
//     //integer value
//     birthyear: 1991,
//     //string value
//     job: 'teacher',
//     //array value
//     friends: ['Micheal', 'Peter', 'Steven'],
//     //boolean value
//     hasDriversLicense: true,
    //function value
    // calcAge: function(birthyear) {
    //     return 2037 - birthyear;
    // }

    //this is reference to the object itself aka jonas
    // calcAge: function() {
    //     console.log(this);
    //     return 2037 - this.birthyear;
    // }

//     calcAge: function() {
//         this.age = 2037 - this.birthyear;
//         return this.age;
//     },
    
//     // "jonas is a 46-year old teacher, and he has a/no driver license"
//     //object method to get the summary
//     getSummary: function () {
//         return `${this.firstName} is a ${this.calcAge()} year old ${this.job} and he 
//         has ${this.hasDriversLicense ? 'a' : 'no'} drivers license.`
//         //ternary operator above
//     }
// };

// console.log(jonas.calcAge());

// console.log(jonas.age);
// // console.log((jonas['calcAge'](1991)));


// // "jonas is a 46-year old teacher, and he has a/no driver license"


// // if (jonas.hasDriversLicense) {
// // console.log(`${jonas.firstName} is a ${jonas.age} year old ${jonas.job} and he has a drivers license`); 

// // } else {
// //     console.log(`${jonas.firstName} is a ${jonas.age} year old ${jonas.job} and he has no fricking drivers license`); 
// // }

// console.log(jonas.getSummary());







//coding challenge 3

// const mark = {
//     firstName: 'mark',
//     lastName: 'miller',
//     mass: 78,
//     height: 1.69,
//     calcBMI: function () {
//         this.BMI = this.mass / (this.height * this.height)
//         return this.BMI
//     },
// }

// console.log(mark.calcBMI());

// const john = {
//     firstName: 'john',
//     lastName: 'smith',
//     mass: 92,
//     height: 1.95,
//     calcBMI: function () {
//         this.BMI = this.mass / (this.height * this.height)
//         return this.BMI
//     },
// }

// console.log(john.calcBMI());


// if (john.BMI > mark.BMI) {
//     console.log(`(${john.BMI}) john's BMI is higher than (${mark.BMI}) marks BMI`);
// } else {
//     console.log(`(${mark.BMI}) marks's BMI is higher than (${john.BMI}) johns BMI`);
// }





//  ITERATION THE FOR LOOP


//will keep looping and adding one to rep until 10 is reached
// for loop keeps running while condition is true
// for(let rep = 1; rep <= 10; rep++) {
//     console.log(`Lifting weights repetition ${rep}`);
// }





// looping through arrays backwards and loops in Loops
// const jonas = [
//     'jonas',
//     'Schedtmann',
//     2037 - 1991,
//     'teacher',
//     ['Micheal','Peter', 'Steven']
// ];

// 0, 1, ....4
// 4, 3, ...0


// // looping through array backwards until element 0
// for(let i = jonas.length -1; i >= 0; i--) {
//     console.log(i, jonas[i]);
// }

// for ( let exercise = 1; exercise < 4; exercise++) {
//     console.log(`-----starting exercise ${exercise}`)

//     for (let rep = 1; rep < 6; rep++) {
//         console.log(`Exercise ${exercise} Lifting Weight Repition ${rep}`);
//     }
// }




// WHILE LOOPS

// for (let rep =1; rep <= 10; rep++) {
//     console.log(`Lifting shit repetition ${rep}`);
// }


// let rep = 1;
// while (rep <= 10) {
//     console.log(` WHILE: Lifting shit repetition ${rep}`);
//     rep++;
// }

// let dice = Math.trunc(Math.random() * 6) + 1;

// while (dice  !== 6) {
//     console.log(`You rolled a ${dice}`);
//     dice = Math.trunc(Math.random() * 6) + 1;
//     if (dice === 6) console.log('Loop is about to end...');
// }

const calcTip = function(bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}
const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

for (let i = 0; i < bills.length; i++) {
    const tip = calcTip(bills[i]);
    tips.push(tip);
    totals.push(tip + bills[i]);
}

console.log(bills, tips, totals);



