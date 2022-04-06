let user = {
    uname: "shreya",
    surname: "Rao",
};
user.uname = "Shreyaaa";
user.surname = "";
delete user.surname; //delete function

for (let u in user) {
    //console.log(user[u]);
}
//task 2
let salaries = {
    john: 15000,
    Peter: 2000,
    Vignesh: 4500,
    Amy: 5000,
};
let sum = 0;
for (let key in salaries) {
    sum += salaries[key];
}
//console.log('sum is :', sum);

// task3

let pageInfo = {
    width: 500,
    height: 800,
    title: "My Page",
};

let total = 0;
for (let amount in pageInfo) {
    if (typeof pageInfo[amount] == "number") {
        pageInfo[amount] *= 2;
    }
}
//console.log('total:', total);

//object referencing

//copying objects without referencing
let candidateinfo = {
    cname: "Shreya",
    ccity: "Mangalore",
};
let newcandidate = {};
Object.assign(newcandidate, candidateinfo);
//console.log(newcandidate);

//task 4
let cal = {
    val1: 0,
    val2: 0,
    read: function() {
        this.val1 = +prompt("Enter first number");
        this.val2 = +prompt("Enter second number:");
    },
    add: function() {
        let add = this.val1 + this.val2;
        console.log("Addition: " + add);
    },
};
//cal.read();
//cal.add();

//task 5
let ladder = {
    step: 0,
    up() {
        this.step++;
    },
    down() {
        this.step--;
    },
    showstep: function() {
        alert(this.step);
    },
};
// ladder.up();
// ladder.up();
// ladder.down();
// ladder.showstep();
// ladder.up();
// ladder.showstep();

//ladder.up().up().down().showstep().up().showstep();

//constructor functions

//task 6
let Calculator = function() {
    this.val1 = 0;
    this.val2 = 0;
    this.read = function() {
        this.val1 = +prompt("Enter first number");
        this.val2 = +prompt("Enter second number:");
    };
    this.add = function() {
        let Addition = this.val1 + this.val2;
        console.log("Addition : " + Addition);
    };
    this.mul = function() {
        let multiply = this.val1 * this.val2;
        console.log("Multiplication : " + multiply);
    };
};

let Calculatorx = new Calculator();
// Calculatorx.read();
// Calculatorx.add();
// Calculatorx.mul();

//task7
function camelize(str) {
    let a = str.split("-");
    let camelizedstr = "";
    a.forEach((element, index) => {
        if (index != 0) {
            camelizedstr += element.charAt(0).toUpperCase() + element.slice(1);
        } else {
            camelizedstr += element;
        }
    });
    return camelizedstr;
}

//console.log(camelize("background-color"));
//task 8
let arrObj = [
    { name: "Shantanu", age: 27 },
    { name: "Vignesh", age: 24 },
    { name: "Priya", age: 24 },
    { name: "Goutham", age: 26 },
];
let obj = arrObj.map((item) => {
    return item.name;
});

//console.log(obj);

//task 9
//Displaying numbers using settimeout
function printNumbers(from, to) {
    for (let i = from; i <= to; i++) {
        setTimeout(() => {
            console.log(i);
        }, i * 1000);
    }
}
//printNumbers(5, 10);

//let i = 0;

//setTimeout(() => alert(i), 1000); //

//for (let j = 0; j < 100; j++) {
//i++; //1, 2, 3...99+1 = 100 -> answer
//}

//sorting an array
let arr = [5, 2, 1, -10, 8]
arr.sort();
//console.log(arr)