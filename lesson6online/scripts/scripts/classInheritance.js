class Vehicle {
    constructor(make, model) {
        this.make = make;
        this.model = model;
    }

    displayInfo() {
        console.log(`Make: ${this.make}, Model: ${this.model}`)
    };
};

class Car extends Vehicle {
    constructor(make, model, color) {
        super(make, model);
        this.color = color;
    }

    displayCarInfo() {
        console.log(`Color: ${this.color}`);
    }
}

const myCar = new Car('Toyota', 'Corolla', 'Blue');

myCar.displayInfo();
myCar.displayCarInfo();