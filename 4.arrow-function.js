//function declaration:
function sum(num1, num2) {
    result = num1 + num2;
    console.log(result);
}
sum(20, 50);

//function expression:
const total = function (value1, value2) {
    return value1 + value2;
}
const argPass = total(30, 30)
console.log(argPass);


//arrow function : shortcut of function expression
const arrowSum = (num1, num2) => num1 + num2;

const arg = arrowSum(20, 20);
console.log(arg);

//Ex: 2
const mult = (a, b) => a * b; //inclusive: that's whay no need to return function. 
const res = mult(5, 5);
console.log(res);

//Ex:3 arrow function with multiple line.
const subtract = (x, y) => {
    const multX = x * 2;
    const multY = y * 10;
    const getResult = multX + multY;
    return getResult;
}
const getValue = subtract(5, 5);
console.log(getValue);
