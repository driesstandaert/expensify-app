// 
// Object destructuring
//  


// const person  = {
//     name: 'Dries',
//     age: 36,
//     location: {
//         city: "London",
//         temp: 23
//     }
// }

// const { name: firstName = 'Anonymous', age } = person;

// // const name = person.name;
// // const age = person.age;

// console.log(`${firstName} is ${age}`);

// const { city, temp: temperature } = person.location
// if (city && temperature) {
//     console.log(`It's ${temperature} in ${city}`);
// }

// const book = {
//     title: 'Ego is the Enemy',
//     author: 'Ryan holiday',
//     publisher:  {
//         // name: 'Penguin'
//     }
// }

// const { name: publisherName = 'Self published' } = book.publisher;

// console.log(publisherName); // Penguin, self published.


// 
// Array destructuring
//  

const address = ['1299 S Juniper street', 'London', 'Uk', 'NDOWE9']
const [, city, state = 'New York'] = address;
console.log(`You are in ${city} ${state}`);


const item = ['Coffee (hot)', '2.00', '2.50', '2.75']
const [itemName, , mediumPrice, ] = item;
console.log(`A medium ${itemName} costs ${mediumPrice}`);
