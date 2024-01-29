
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


let calculation = {
    num1: "",
    operator: "",
    num2: "" 
}
//access array in calculations:
//calculation.num1[0], or calculation.num1.length



//equals.click -> run operate function -> display solution



//THIS SECTION HANDLES THE NUMBER BUTTONS
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
    //I need the code to continue calculations in a specific manner. 
    //1.) If 2x2 = 4x2 = 8x2 = 16 --> this works
    //2.) But, 2x2=4, 2x2=4 does not work. It results in 88. I get a 22 somehow.
    calculation.numTracker = solution;
    console.log(calculation.numTracker); 
    calculation.num2 = "";
    console.log(calculation.num2)
    calculation.operator = "";
    console.log(calculation.num1);
})




function operate(){
    if (calculation.operator === "*"){
        solution = multiply(calculation.num1, calculation.num2);
        return solution;
    }
    if(calculation.operator === "/"){
        solution = divideNumbers(calculation.num1, calculation.num2);
        return solution;
    }
    if(calculation.operator === "+"){
        solution = add(calculation.num1, calculation.num2);
        return solution; 
    }
    if(calculation.operator === "-"){
        solution = subtract(calculation.num1, calculation.num2);
        return solution
    }
    console.log(solution);
}
