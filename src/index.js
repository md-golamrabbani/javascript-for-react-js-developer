// object
const person = {
    firstname: "Golam",
    lastname: "Rabbani",
    age: 20,
    address() {
        return this.firstname + this.lastname
    }
}

console.log(person.age);
console.log(person.address());

