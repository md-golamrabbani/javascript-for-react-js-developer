import { Person } from "./person";

//export function promote();

export default class Teacher extends Person {
    constructor(name, degree) {
        super(name);
        this.degree = degree;
    }

    teach() {
        console.log(this.name, this.degree);
    }
}