//default parameter

function number(num1, num2) {
    let total = num1 + num2;
    console.log(num1, num2, total);
}
number(10)
// not declared = undefined
// 10 + not declared = NaN
//if we do not pass declared parameter value , it will give undefined. 


// So , we should use default value:
function numbers(num1, num2 = 0) {
    totals = num1 + num2;
    console.log(num1, num2, totals)
}

numbers(10);

// thumb rule for functions default parameter( values those will not impact the original value):
// sum, subtract -> 0
// multiplication, division -> 1
//string -> ''
// default parameter declared with = sign;

function name(name1, name2 = "") {
    full = name1 + '' + name2;
    console.log(full);
}
name("faisal")