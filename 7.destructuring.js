//Destructuring:
//Destructuring is a JavaScript feature that allows us to extract values from arrays or properties from objects and assign them to variables in a concise way.
//left ar right side e same datatype hobe-> {}={}, []=[]


const destructure = { name: "Anas", roll: 34, age: 45 };
//destructuring
const { name } = { name: "Anas", roll: 34, age: 45 };
console.log(name);

//Ex:2
const nm = { location: "USA", car: 4, house: 3, garden: 4 };
const { car } = nm;
console.log(car);

//Ex:3 Rename the property name object
const namesObject = { nam: "honda", model: "civic", color: "greenBlue" }
const { color: carColor } = namesObject;
console.log(carColor);

//Destructuring in array:
const numbers = [66, 5, 7, 8, 2, 6];
[num1, num2] = numbers;
console.log(num1);