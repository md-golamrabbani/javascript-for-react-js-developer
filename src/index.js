// spread operator
const first = [1, 2, 3];
const second = [4, 5, 6];

// old way
// const combined = first.concat(second);
// console.log(combined);

// new way -> three dot means (...) spread operator
const combined = [...first, ...second];
console.log(combined);

