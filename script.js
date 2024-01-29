
//Our math operations
const add = (a, b) => a + b; 
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
function divideNumbers(a, b) {
    if (b === 0) {
        return "Error: Division by zero is not allowed";
    }
    return a / b;
}


let num1 = 0;
let operator = "";
let num2 = 0;


function operate(a, b){
    //upon click
    return add(a, b);
    // return subtract(num1, num2);
    // return multiply(num1, num2);
    // return divideNumbers(num1, num2);
}
console.log(operate(3, 4))