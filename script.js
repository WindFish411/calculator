
//Our math operations
const add = (a, b) => parseFloat(a) + parseFloat(b); 
const subtract = (a, b) => parseFloat(a) - parseFloat(b);
const multiply = (a, b) => parseFloat(a) * parseFloat(b);
function divideNumbers(a, b) {
    if (b === 0) {
        return "Error: Division by zero is not allowed";
    }
    return parseFloat(a) / parseFloat(b);
}

//Adding solutionTracker to keep updated calculation. 
//This is more to free up num1 & num2 for all use cases. 
let calculation = {
    num1: "",
    operator: "",
    num2: "", 
    solutionTracker: ""
}

//THIS SECTION HANDLES THE NUMBER BUTTONS
let addClick = document.querySelectorAll(".number");

addClick.forEach(number => {
    number.addEventListener('click', () => {
        updateCalculation(number.textContent)
    }); 
});

function updateCalculation(buttonValue){
    let display = document.getElementById('display');
    display.textContent = buttonValue;



    if(calculation.operator === ""){  
            calculation.num1 += buttonValue;
            display.textContent = calculation.num1;
    }
    else {
        calculation.num2 += buttonValue;
        display.textContent = calculation.num2;
        
    };
};
//NUMBER BUTTON END 

//OPERATOR BUTTONS
let multiplication = document.getElementById('multiply');
multiplication.addEventListener('click', () => {
    calculation.operator = "*";
});

let division = document.getElementById('divide');
division.addEventListener('click', () => {
    calculation.operator = "/";
});

let addition = document.getElementById('addition');
addition.addEventListener('click', () => {
    calculation.operator = "+";
});

let subtraction = document.getElementById('subtraction');
subtraction.addEventListener('click', () => {
    calculation.operator = "-";
});
//END OPERATOR BUTTONS


let findSolution = document.getElementById('equals');
findSolution.addEventListener('click', () => {
    let display = document.getElementById('display');
    let solution = operate(calculation);
    display.textContent = solution;
    
    calculation.solutionTracker = solution;
    console.log(calculation.solutionTracker); 
    calculation.num1 = "";
    calculation.num2 = "";
    // console.log(calculation.num2)
    calculation.operator = "";
    // console.log(calculation.num1);
})




function operate(){
    if (calculation.operator === "*"){
         if(calculation.solutionTracker === ""){
            solution = multiply(calculation.num1, calculation.num2);
            return solution;
        }
        else{
            solution = multiply(calculation.solutionTracker, calculation.num2)
            return solution; 
        }
    }
    else if(calculation.operator === "/"){
        if(calculation.solutionTracker === ""){
            solution = divideNumbers(calculation.num1, calculation.num2);
            return solution;
        }
        else{
            solution = divideNumbers(calculation.solutionTracker, calculation.num2)
            return solution;
        }
    }
    else if(calculation.operator === "+"){
        if(calculation.solutionTracker === ""){
            solution = add(calculation.num1, calculation.num2);
            return solution; 
        }
        else {
            solution = add(calculation.solutionTracker, calculation.num2);
            return solution;
        }
    }
    else if(calculation.operator === "-"){
        if(calculation.solutionTracker === ""){
            solution = subtract(calculation.num1, calculation.num2);
            return solution;
        }
        else {
            solution = subtract(calculation.solutionTracker, calculation.num2);
            return solution; 
        }
    }
    
}
