task1

let showName = (fname, lname, ...args) => {
    let name = fname + " " + lname;
    for (let arg of args) {
        name += arg + "";
    }
    return name;
};
//console.log(showName('Ms', 'shreya ', ' Rao ', ));

task 2(Merging)

let num1 = [1, 2, 3, 4];
let num2 = [5, 6, 7, 8];

function mergeArrays(...arrays) {
    let mergedArray = [];

    arrays.forEach((array) => {
        mergedArray = [...mergedArray, ...array];
    });

    return mergedArray;
}

console.log(mergeArrays(num1, num2));
//task3
mouse events
btn.oncontextmenu = function() {
    btn.style.background = "yellow";
    alert('Button is clicked');

};
//task4
const promise1 = Promise.resolve(3);
const promise2 = 42;
const promise3 = new Promise((resolve, reject) => {
    setTimeout(resolve, 100, 'foo');
});

Promise.all([promise1, promise2, promise3]).then((values) => {
    console.log(values);
});