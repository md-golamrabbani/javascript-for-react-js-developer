// object diff
const person = {
    talk() {
        // this is a windows object
        // setTimeout(function() {
        //     console.log("this", this);
        // }, 1000);
        // this is a person object
        // var self = this;
        // setTimeout(function() {
        //     console.log("self", self);
        // }, 1000);
        // now, we are use fat arrow function.
        setTimeout(() => {
            console.log("this", this);
        }, 1000);
    }
}

console.log(person.talk());
