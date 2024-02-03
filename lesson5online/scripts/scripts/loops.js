// ·Loops (მარყუჟები, ციკლები);

// let waterInTank = 0;

// while (waterInTank < 10) {
//     console.log(waterInTank);
//     waterInTank = waterInTank + 3;
// }


// ციკლი
// for (let waterintank = 0; waterintank < 10; waterintank++) {
//     console.log(waterintank)
// }

let names = ["George", "Ketevan", "Mikael", "Davit", "Nika"];

for(let index = 0; index < names.length; index++) {
    console.log(names[index]);
};
console.log("==============")
for (let name of names) {
    console.log(name);
};