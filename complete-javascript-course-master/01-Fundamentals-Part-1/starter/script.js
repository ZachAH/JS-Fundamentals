// const age = 15;


// if (age >= 18) {
//     console.log('Sarah can start driving license 🤣');
// } else {
//     const yearsLeft = 18 - age;
//     console.log(`Sarah is to young. wait another ${yearsLeft} years :)`);
// }

// const birthYear = 1998;
// let centuary
// if (birthYear <= 2000) {
//     let century = 20;
// } else {
//     let century = 21;
// 

// const massMark = 95;
// const heightMark = 1.88;
// const massJohn = 85;
// const heightJohn = 1.76;

// const BMIMark = massMark / heightMark ** 2;
// const BMIJohn = massJohn / (heightJohn * heightJohn);


// console.log(BMIMark, BMIJohn);

// if (BMIMark > BMIJohn) {
//     console.log("Mark's BMI is higher than John's!")
// } else {
//     console.log("JOhns  BMI is higher than marky bois!")
// }

// const massMark = 78;
// const heightMark = 1.69;
// const massJohn = 92;
// const heightJohn = 1.95;

// const BMIMark = massMark / heightMark ** 2;
// const BMIJohn = massJohn / (heightJohn * heightJohn);
// console.log(BMIMark, BMIJohn);

// if(BMIMark > BMIJohn) {
//     console.log(`Marks BMI (${BMIMark}) IS WAY HIGHER THAN JOHNNYS(${BMIJohn})!`)
// } else {
//     console.log(`Johns BMI (${BMIJohn}) IS WAY HIGHER THAN MARKY BOIS!(${BMIMark})`)
// }

//type conversion
// const inputYear = '1991';
// console.log(Number(inputYear), inputYear);
// console.log(Number(inputYear) + 18);

// console.log(String(23), 23);

// //type coercion + operator turns all numbers into strings
// console.log('I am ' + 23 + ' years old');
// console.log('23' - '10' - 3);
// console.log('23' / '2');
// console.log('23' > '18');

// let n ='1' + 1;
// n = n - 1;
// console.log(n);
// //answer is 10

// 5 falsy values: 0, '', undefined, null, NaN

// console.log(Boolean(0));
// console.log(Boolean(undefined));
// console.log(Boolean('Jonas'));
// console.log(Boolean(''));

// const money = 100;
// if(money) {
//     console.log("Don't Spend it all");
// } else {
//     console.log('You should get a job');
// }

// let height = 0;
// if(height) {
//     console.log('Yay! height is defined');
// } else {
//     console.log('Height is undefined');
// }

// const age = 18;
// if(age === 18) console.log('You just became an adult');

// const favorite = Number (prompt("What's your favorite number?"));
// console.log(favorite);
// console.log(typeof favorite);

// if (favorite === 23) {
//     console.log('Cool! 23 is an amazing number!');
// } else if (favorite === 7) {
//     console.log('7 is also a cool number');
// } else if (favorite === 9) {
//     console.log('9 is also a sick number');
// } else {
//     console.log('Number is not 23 or 7');
// }

// if(favorite !== 23) console.log('Why not 23?');

// const hasDriversLicense = true; //A
// const hasGoodVision = true; //B

// console.log(hasDriversLicense && hasGoodVision);
// console.log(hasDriversLicense || hasGoodVision);
// console.log(!hasDriversLicense);


// if (hasDriversLicense && hasGoodVision) {
//     console.log('Sarah is able to drive!');
// } else {
//     console.log('Someone else should drive!');
// }

// const isTired = false; //C
// console.log(hasDriversLicense && hasGoodVision && isTired);

// if (hasDriversLicense && hasGoodVision && !isTired) {
//     console.log('Sarah is able to drive!');
// } else {
//     console.log('Someone else should drive!');
// }

// const scoreDolphins = (88 + 91 + 50) /3; 
// const scoreKoalas = (88 + 91 + 50) /3;
// console.log(scoreKoalas, scoreDolphins); 

// if (scoreDolphins > scoreKoalas && scoreDolphins >= 100) {
//     console.log('Doplphins Win!!');
// } else if (scoreKoalas > scoreDolphins && scoreKoalas >= 100) {
//     console.log('Koalas Win!!');
// } else if (scoreDolphins === scoreKoalas && scoreDolphins >= 100 && scoreKoalas >= 100) {
//     console.log('it is a tie!!');
// } else {
//     console.log('No one wins the trophy');
// }

// const day = 'thursday'

// switch(day) {
//     case 'monday': // day === 'monday'
//     console.log('Plan course structure');
//     console.log('Go to coding meetup');
//     break;
//    case 'tuesday': 
//    console.log('Prepare theory videos');
//    break;
//    case 'wednesday': 
//    case 'thursday': 
//     console.log('Write code examples');
//     break;
//     case 'friday':
//         console.log('Record videos');
//         break;
//     case 'saturday': 
//     case 'sunday': 
//     console.log('enjoy the weekend');  
//     break;
//     default: 
//     console.log('not a valid day!');  
// }


// if (day === 'friday') {
//     console.log('good job sonny');
// } else if ( day === 'monday') {
//     console.log('nice dog sonny');
// } else {
//     console.log('not a good day for sonny');
// }

//expressions
// 3 + 4
// 1991
// true && false && !false


// //statement
// if (23 > 10) {
//     const str = '23 is bigger'; //when ends with ; that is a statement 
// }

// console.log(`I'm ${2037 - 1991 }years old.`)

// const age = 24;
// age >= 18 ? console.log('I like to drink wine') : console.log('I like to drink water');// 

// if age is greater or = 18 wine else water
// const drink = age >= 18 ? 'wine' : 'water';
// console.log(drink);

// // code above is way easier to write than that below both do the same thing one is a ternary operator
// let drink2;
// if(age >= 18) {
//     drink2 = 'wine';
// } else {
//     drink2 = 'water';
// }
// console.log(drink2);

// console.log(`I like to drink ${age >= 18 ? 'wine' : 'water'}`);

//hint to calulate 20% of a value, simply mutliply by 20/100 = .02
//value  >= 50 && <= 300


const bill = 250;
console.log(bill);
const tip =  bill <=300 && bill >=50 ? Number(`${bill * 15/100}`) : Number(`${bill * 20/100 }`);
console.log(tip);

const totalBill =Number(`${bill + tip}`);
console.log(totalBill);

console.log(`The bill was ${bill}, the tip was ${tip}, the total bill was ${totalBill} dollars`);



// const tip = bill >= 50 <= 300 ? console.log('15percent') : console.log('20percent');














