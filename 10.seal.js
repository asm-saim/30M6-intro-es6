const data = { name: "Yamin", age: 23, location: "Khulna", pen: 5 };

//Object.seal: it allows only modify the existing objects, not add or delete allowed.
Object.seal(data)

//update object
data.name = "Yasmin";

//delete property
delete data.pen;

//add new properties
data.height = '5.7'


//modify existing object:
data.name= data.name + " Khan";
console.log(data);