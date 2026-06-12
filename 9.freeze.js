const data = { name: "Yamin", age: 23, location: "Khulna", pen: 5 };

//Object.freeze: it will freeze the object , no change will occur. add, delete, modify nothing allowed.

Object.freeze(data)

//update object
data.name = "Yasmin";

//delete property
delete data.pen;

//add new properties
data.height = '5.7'


//modify existing object:
data.height = data.height + " feet";
console.log(data);