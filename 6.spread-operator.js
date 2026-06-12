// Spread Operator(...)
// array er upadan guo k jodi comma akare venge felte chai, taile spread operator use korbo.

const arr = [3, 56, 77, 88, 70, 23, 67]
console.log(...arr);

//Ex:2
const values = [44, 66, 77, 99, 33, 11, 88];
console.log(Math.max(...values))

//Another uses of spread operator:
//Array copy korte  armra spread iperator use korbo, taile copied arry ta ar ek sahe change hobe na.

//Ex:1
const arr1 = [3, 44, 5, 78, 2];
const arr2 = [...arr1];
arr2.push(777);
console.log(arr1)
console.log(arr2);

//Ex:2 merge array using spread operator
const element1 = [33, 79, 33, 6, 89, 56]
const element2 = [34, 55, 78, 90]

const merge = [...element1, ...element2]
const mergeAdd = [...element1, 665, ...element2]
console.log(merge);
console.log(mergeAdd);


//Spread operator in object:
const data = { name: "kamrul", age: 38 };
const data2 = { location: "Dhaka", ...data }
console.log(data2);

//Another example:
const arrow = (x, y, z) => x + y + z;
const arrValue = [44, 55, 66];
const result = arrow(...arrValue);
console.log(result);
