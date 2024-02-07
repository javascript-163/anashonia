class Animal {
    constructor(name, surname) {
        this.firstName = name;
        this.lastName = surname;
    }

    speak(age=1) {
        console.log(`${this.firstName} ${this.lastName} makes a sound, and he's ${age} years old!`);
    }
}

const dog = new Animal('Dog', "guss"); // here we create a new instance of a class // კლასის გამოძახებას ვახდენთ მასზედ ახალი (new) მისამართი მაგალითის შექმნით.
dog.speak(10);