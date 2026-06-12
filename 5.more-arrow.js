//single parameter: parenthesis is optional- ()
const getSquare = x => x * x;
console.log(getSquare(5));

//Ex:2
const getHalf = (num) => num / 2;
console.log(getHalf(3));

//Ex:3
const firstElement = arr => arr[0];
console.log(firstElement([3, 445, 78, 9]));

//Ex:4
const secondElement = value => value[1];
console.log(secondElement([2, 777, 33, 84, 79, 78]));

//Ex: single parameter uses in event handler:
const res = document.getElementById("btn-2").addEventListener("click", number => {
}
)

//Empty parameter/ anonymous function:
const empParam = () => console.log(55);
empParam();
console.log(empParam());//


//Anonymous Function:
const value = document.getElementById("btn").addEventListener("click", () => {}
)
