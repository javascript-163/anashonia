class Shape {
    area() {
        console.log("Area calcuation is not implemented yet!");
    }
}

class Square extends Shape {
    constructor(side) {
        super()
        this.side = side;
    }

    area() {
        return this.side * this.side;
    }
}

class Circle extends Shape {
    constructor(radius) {
        super();
        this.radius = radius;
    }

    area() {
        return Math.PI * this.radius ** 2;
    }
}

function calcuateArea(Shape) {
    console.log(`Area of the shape is ${Shape.area()}`);

}
const Square = new Square(5);
const Circle = new Circle(3);

calcuateArea(Square);
calcuateArea(Circle);