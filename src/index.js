// inheritance
class Person {
    constructor(name) {
        this.name = name;
    }

    walk() {
        console.log("walk");
    }
}

class Teacher extends Person {
    constructor(name, degree) {
        super(name);
        this.degree = degree;
    }

    teach() {
        console.log(this.name, this.degree);
    }
}

const teacher = new Teacher("Golam Rabbani", "MSc");
teacher.teach();
