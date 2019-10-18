// this keyword
// this is a object base object, such as, it is a person object. because it setup a veriable
const person = {
    name: "golamrabbani",
    age: 24,
    output() {
        console.log(this);
    }
}
person.output();

// this is windows object
function name() {
    console.log(this);
}
name();


