console.log(this);  // global context


let person = {
    firstName: "George",
    lastName: "Beridze",
    birthYear: 1980,
    salary: 700,

    age: function () {
        return 2024 - this.birthYear
    }


}
console.log(person.age())
