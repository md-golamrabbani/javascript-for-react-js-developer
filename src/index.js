// classes
class Person {
    constructor(name) {
        this.name = name;
        console.log(this.name);
        
    }

    walk() {
        console.log("walk");
    }
}

const person = new Person("Golam Rabbani");
person.walk();

