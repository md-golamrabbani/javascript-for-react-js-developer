// object destructuring
const address = {
    city: "Nawabganj",
    village: "Hogla",
    phone: 1772708647
};

// const city = address.city;
// const village = address.village;
// const phone = address.phone;
// console.log(phone);
// all data set new variable
const { city, village, phone } = address;
// if specific variable -> save data
const { city: myCity } = address;
console.log(myCity);
