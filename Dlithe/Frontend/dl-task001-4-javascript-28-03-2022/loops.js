//map function
const array1 = [1, 4, 9, 16];

const map1 = array1.map(x => x * 2);

console.log(map1);

//slice(end not included)
const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];

console.log(animals.slice(1, 5));


//splice
const months = ['Jan', 'March', 'April', 'June'];

months.splice(1, 0, 'Feb');

console.log(months);