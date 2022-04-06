task1

let showName = (fname, lname, ...args) => {
    let name = fname + " " + lname;
    for (let arg of args) {
        name += arg + "";
    }
    return name;
};
console.log(showName('Ms', 'shreya ', ' Rao ', ));