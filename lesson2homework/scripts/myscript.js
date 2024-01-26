// let children = ["nino", "ana", "nika"]


// 1

console.log(Array.isArray(children));


// 2

let children = ["nino", "ana", "nika"]
console.log(children[0]);

// 3
let children1 = ["nino", "ana", "nika"]
let lastchiled = children1[children1.length-1];
console.log(lastchiled);

// 4

color = ["Blue ", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow "];
 o = ["th","st","nd","rd"]
 console.log(`1${o[1]} choice is ${color[0]}`);
 console.log(`2${o[2]} choice is ${color[1]}`);
 console.log(`3${o[3]} choice is ${color[2]}`);

//  5

let student = { 
    name: "ana",
    surname: "shonia"
};
// add
student.agg = 21;
student.telNumber = 555769067;
console.log(student);

// delete
delete student.telNumber;
console.log(student);
 
// replace
student.agg = 24;
console.log(student);