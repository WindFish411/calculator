
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


let calculation = {
    num1: "",
    operator: "",
    num2: "" 
}
//access array in calculations:
//calculation.num1[0], or calculation.num1.length


//psuedo-code attempt: 
//button.click -> store number -> display number
// -Notes here: when a number is entered, several buttons can be pressed, as well as the dot "." for decimals
// -So until an operator is clicked, the number is appended with the next button clicked
//operator.click -> store operator
//button2.click -> store number -> display number
//equals.click -> run operate function -> display solution

let addClick = document.querySelectorAll(".number");

addClick.forEach(number => {
    number.addEventListener('click', () => {
        updateCalculation(number.textContent)
    }); 
});

function updateCalculation(buttonValue){
    let display = document.getElementById('display');

    if(calculation.operator === ""){  
            calculation.num1 += buttonValue;
            display.textContent = calculation.num1;
    }
    else {
        //display.textContent = "";

        calculation.num2 += buttonValue;
        display.textContent = calculation.num2;
        
    };
};
//OPERATOR BUTTONS
let multiplication = document.getElementById('multiply');
multiplication.addEventListener('click', () => {
    calculation.operator = "*";
});

let division = document.getElementById('divide');
multiplication.addEventListener('click', () => {
    calculation.operator = "/";
});

let addition = document.getElementById('addition');
multiplication.addEventListener('click', () => {
    calculation.operator = "+";
});

let subtraction = document.getElementById('subtraction');
multiplication.addEventListener('click', () => {
    calculation.operator = "-";
});
//END OPERATOR BUTTONS







function operate(num1, operator, num2){
    parseFloat(num1);
    parseFloat(num2);
    if (operator === "*"){
        solution = multiply(num1, num2);
        return solution;
    }
    if(operator === "/"){
        solution = divideNumbers(num1, num2);
        return solution;
    }
    if(operator === "+"){
        solution = add(num1, num2);
        return solution; 
    }
    if(operator === "-"){
        solution = subtract(num1, num2);
        return solution
    }

}
//console.log(operate(3, "/", 4))