'use strict';

// let hasDriversLicense = false;
// const passTest = true;

// if (passTest) hasDriversLicense = true;
// if (hasDriversLicense) console.log('I can Drive');

//strict mode resevers these words cant use them as variables
// const interface = 'Audio';
// const private = 534;

//created function logger
function logger() {
    console.log('My name is Zach');
}

// calling / running / invoking function
logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    return juice;
}

// 5 and 0 are arugments
const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);

const water = fruitProcessor(0, 0);
console.log(water);