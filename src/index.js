// bind method
const person = {
    name: "golamrabbani",
    age: 24,
    output() {
        console.log(this);
    }
}
person.output();

const getResult = person.output.bind(person);
getResult();


