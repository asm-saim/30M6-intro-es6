//es-6 (Echma script) 6

// var - you can reassign value.
//const - you can not reassign value.

// const name = 'Halim';
// name = "kasfi";
// console.log(name); //will give error, can not reassign.

// console.log(number);
// const number = 45;

//array
const arr = [23, 45, 77, 99];
// arr=[34,66,9,78,5] //can not reassign, but can push or pop
arr.push(555);
console.log(arr);

// object:
const obj = { name: "Wasi", roll: 45 }
obj.roll = 100;
console.log(obj);  

// Quick Interview Answer
// var → Function-scoped, can be re-declared and re-assigned.
// let → Block-scoped, cannot be re-declared, can be re-assigned.
// const → Block-scoped, cannot be re-declared or re-assigned.
// Prefer const by default, use let when the value needs to change, and avoid var in modern JavaScript.