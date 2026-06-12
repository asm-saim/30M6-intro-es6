//String er modde dynamic vabe kono kisu bosate amra template string use korbo.

//normal string:

function sum(num1, num2) {
    result = num1 + num2
    const total = "sum of " + num1 + " and " + num2 + " is " + result;
    console.log(total);
}

sum(10, 20);

//using template string:

function templateString(number1, number2) {
    result = `sum of ${number1} and ${number2} is ${number1 + number2}`
    console.log(result);
}
templateString(50,100)