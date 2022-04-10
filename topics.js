//USING RETAIL DOMAIN
// 1- DECLARING VARIABLES (var,let,const examples)
//let syntax : let name1 [= value1] [, name2 [= value2]] [, ..., nameN [= valueN];
let ITEM_ID = 1;

if (ITEM_ID === 1) {
    let ITEM_ID = 2;

    console.log(ITEM_ID); // expected output: 2
}
//-----------------------------------//
//var syntax:var varname1 [= value1] [, varname2 [= value2] ... [, varnameN [= valueN]]];
var ITEM_COST = 150;

if (ITEM_COST === 150) {
    var ITEM_COST = 200;

    console.log(ITEM_COST); // expected output: 200
}
//------------------------------------//
//const syntax: const name1 = value1 [, name2 = value2 [, ... [, nameN = valueN]]];
const ITEM_GST = ["100", "200", "250"];
console.log(ITEM_GST);
//-------------------------------------//

//2 -SCOPE OF VARIABLES (GLOBAL,LOCAL)// program to print a text
GLOBAL:
    let ITEM_NAME = "PIANO";

function greet() {
    console.log(ITEM_NAME);
}

greet(); //PIANO
//------------------------------------//
LOCAL:
    var ITEM_NAME = 'Hi PIANO';

function say() {
    var ITEM_NAME = 'Hello GUITAR';
    console.log(ITEM_NAME);
}

say();
console.log(ITEM_NAME);
//-----------------------------------//

//3- DATATYPES
STRING:
    const ITEM_NAME = 'PIANO';
const ITEM_DESCRIPTION = "KEYBOARD";
const RETAIL = `The names are ${ITEM_NAME} and ${ITEM_DESCRIPTION}`;
console.log(RETAIL);
//-----------------------------------//
NUMBER:
    const ITEM_PRICE = 3 / 0;
console.log(ITEM_PRICE); //INFINITY
//-----------------------------------//

//4 -OBJECTS DECLARING AND ACCESSING
// const RETAIL = {
ITEM_NAME: 'PIANO',
    ITEM_COST: 2000
};
console.log(RETAIL);
//----------------------------------//

//5 -OPERATORS
//ASSIGNMENT OPERATORS:
const ITEM_ID = 50;
console.log(ITEM_ID);
//ARITHMETIC OPERATORS:
const TOTAL_AMOUNT = 3 + 5;
console.log(TOTAL_AMOUNT);
//COMPARISON OPERATORS:
const ITEM_COSTA = 3,
    ITEM_COSTB = 2;
console.log(ITEM_COSTA > ITEM_COSTB);
//LOGICAL OPERATORS:
const ITEM_COSTA = 5,
    ITEM_COSTB = 3;
console.log(ITEM_COSTA < 6 && ITEM_COSTB < 5);
//STRING OPERATORS:
let ITEM_NAME = 'GUITAR';
ITEM_NAME += ' PIANO';
console.log(ITEM_NAME); //GUITAR PIANO
//-------------------------------------------//

//6- TYPE CONVERSION
ITEM_COST = '300' + 200;
console.log(ITEM_COST) //300200
ITEM_COST = '400' - '200';
console.log(ITEM_COST); //200
//-------------------------------------------//

//7- LOOPS
//FOR LOOP
const ITEM_ID = 5;
for (let i = 1; i <= ITEM_ID; i++) {
    console.log(`I love all the items.`); // looping from i = 1 to 5
}
//WHILE LOOP
let ITEM_ID = 1;
while (ITEM_ID < 10) {
    console.log(ITEM_ID);
    ITEM_ID += 2;
}
//------------------------------------------//

//8-THIS KEYWORD
Create an object:
    const RETAIL = {
        ITEM_NAME: "Guitar",
        ITEM_COST: 3000,

        INFO: function() {
            return this.ITEM_NAME + " " + this.ITEM_COST;
        }
    };

// // Display data from the object:
document.getElementById.innerHTML = person.INFO();
//------------------------------------------//

//9-CONSTRUCTOR
class RETAILS {
    constructor() {
        this.ITEM_NAME = 'GUITAR';
    }
}

const RETAIL = new RETAILS();

console.log(RETAIL.ITEM_NAME);
//------------------------------------------//

//10-ARRAYS
//1-ARRAY CONCAT
const ITEM_NAME = ['GUITAR', 'PIANO', 'KEYBOARD'];
const ITEM_COST = [1000, 2000, 1500];
const TOTAL = ITEM_NAME.concat(ITEM_COST);

console.log(TOTAL);
2 - ARRAY FILL
const ITEM_COST = [1000, 2000, 300, 4500];

// fill with 5 from position 1
console.log(array1.fill(5, 1));
// expected output: [1000, 5, 5, 5]
//--------------------------------------------//

//11-SPREAD OPERATORS
function TOTAL_AMOUNT(x, y, z) {
    return x + y + z;
}

const RETAIL = [1500, 2789, 3333];

console.log(TOTAL_AMOUNT(...RETAIL)); //76622
//-----------------------------------------------//

//12-REST OPERATORS
function TOTAL(...theArgs) {
    return theArgs.reduce((previous, current) => {
        return previous + current;
    });
}

console.log(TOTAL(100, 200, 300));
// // expected output: 600
//-----------------------------------------------//

//13-DESTRUCTURING
let ITEM_COST1, ITEM_COST2, rest;
[ITEM_COST1, ITEM_COST2] = [150, 200];

console.log(ITEM_COST1);
// expected output: 150

console.log(ITEM_COST2);
// expected output: 200

[ITEM_COST1, ITEM_COST2, ...rest] = [150, 200, 300, 400, 500];

console.log(rest);
// // expected output: Array [350,300,400,500]
//-----------------------------------------------//

//14-PROMISE
const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('RETAIL');
    }, 300);
});
//----------------------------------------------//

//15-HOISTING
using test before declaring
console.log(RETAIL); // undefined
var RETAIL;
//---------------------------------------------//

//16-OBJECT REFERENCING
const ITEM_NAME = {}
typeof ITEM_NAME
//---------------------------------------------//