

// 2.შექმენით მშობელი კლასი სახელად ‘Shape’: მას უნდა გააჩნდეს შემდეგი ატრიბუტები და მეთოდები:

// * ატრიბუტები:
//   ‘name’ (სტრიქონი) - “shape”-ის სახელის შესანახად.
// * მეთოდები:
//    constructor(name) - კონსტრუქტორი რომელიც მოახდენს ‘name’ ატრიბუტის ინიციალიზირებას.
//    area() - მეთოდი რომელიც ჯერჯერობით დააბრუნებს რაღაც ესეთ შეტყობინებას:
//    “Area calculation not implemented for generic shape.”

class shape {
    constructor(name) {
        this.name = name;
    }

    area() {
        console.log("Area calculation not implemented for generic shape.");
    }
}




// 3.შექმენით შვილობილი კლასები: შექმენით შვილობილი კლასები, თითოეული მათგანი უნდა წარმოადგენდეს განსხვავებულ გეომეტრიულ ფიგურას. შვილობილი კლასი მემკვიდრეობით უნდა იღებდეს მონაცემებს “Shape” კლასიდან და ახდენდეს area() მეთოდის ცვლილებას კონკრეტული ფიგურის ფართობის გამოსათვლელად.
class circle extends shape {
    constructor(name, radius) {
        super(name)
        this.radius = radius;
    }


    area() {
        console.log(`Area of ${this.name} ${Math.PI * this.radius * this.radius}`);
    }
}








// 4. გატესტეთ პოლიმორფიზმი: შექმენით თითოეული ფიგურის “shape”-ის ობიექტები: მაგ. let triangle = new Triangle(.......), მოახდინეთ პოლიმორფიზმის დემონსტრირება “area()” მეთოდის გამოძახებით თითოეულ ფიგურაზე იქნება ეს სამკუთხედი, წრე თუ მართკუთხედი და გამოიტანეთ დაანგარიშებული ფიგურის ფართობი პლიუს ამ ფიგურის სახელი ეკრანზე.


let rectangle = new Rectangle("rectangle", 10, 5);
let triangle = new Triangle("triangle", 10, 5);
let general = new Shape("general");
let circle = new Circle("circle", 10);

rectangle.area();
triangle.area();
general.area();
circle.area();
