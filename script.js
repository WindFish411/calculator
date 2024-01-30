
let calculation = {
    num1: "",
    operator: "",
    num2: "", 
    solutionTracker: ""
}

let addClick = document.querySelectorAll(".number");
addClick.forEach(number => {
    number.addEventListener('click', () => {
        setNumbers(number.textContent)
    }); 
});

function setNumbers(buttonValue){
    if(calculation.operator === ""){
        calculation.num1 += buttonValue;
        // display.textContent = calculation.num1;
        // console.log(calculation.num1);
    } 
    else{
        calculation.num2 += buttonValue;
        // display.textContent = calculation.num2;
        // console.log(calculation.num2);
    }
    updateDisplay();
}

function updateDisplay() {
    // if(calculation.solutionTracker !== ""){
    //     console.log("here1");
    //     display.textContent = calculation.solutionTracker;
    // }
    if(calculation.num2 !== ""){
        console.log("here2");
        display.textContent = calculation.num2;
    }
    else{
        console.log("here3");
    display.textContent = calculation.num1;
    }
  }

//Function sets calculation.operator
function setOperator(operator){
    if(calculation.operator !== ""){
        operate(); 
    }
    calculation.operator = operator;
    //updateDisplay();
}

//OPERATOR BUTTONS
let multiplication = document.getElementById('multiply');
multiplication.addEventListener('click', () => {
    setOperator("*");
});

let division = document.getElementById('divide');
division.addEventListener('click', () => {
    setOperator("/");
});

let addition = document.getElementById('addition');
addition.addEventListener('click', () => {
    setOperator("+")
});

let subtraction = document.getElementById('subtraction');
subtraction.addEventListener('click', () => {
    setOperator("-")
});
//END OPERATOR BUTTONS

//Equals Sign Button -----------------------------------
let equalsSign = document.getElementById('equals');
equalsSign.addEventListener('click', () => {
    operate(calculation);
})
//------------------------------------------------------

function operate(){
    const num1 = parseFloat(calculation.num1);
    const num2 = parseFloat(calculation.num2);

    switch (calculation.operator) {
      case "+":
        calculation.solutionTracker = num1 + num2;
        break;
      case "-":
        calculation.solutionTracker = num1 - num2;
        break;
      case "*":
        calculation.solutionTracker = num1 * num2;
        break;
      case "/":
        calculation.solutionTracker = num1 / num2;
        break;
      default:
        return;
    }
    calculation.num1 = calculation.solutionTracker;
    calculation.num2 = "";
    calculation.operator = "";
    updateDisplay(); 
}




//I need this program to work without the use of the equals sign button. 
//That means I need to be ablet of ind the solution just using the number and operator buttons. 
//When do I call findSolution? How do I update the object and use the solutionTracker element to do this? 
//Currently 1.) Hit number button -> this updates the display and stores number in calculation
//2.) Hit operator button -> This stores the operator in calculation
//3.) Hit number buttons -> Update display ad stores number2 in calculation
//4.) Hit operator button -> This stores operator in calculation 
//                --Need this to 1.) Find solution based on calculation & display it when the operator button is clicked a second time
//                               2.) I think it needs to store the solution in calculation.solutionTracker & empty num1/num2
//                               3.) Then solutionTracker = num1 when finding the second solution? 

// function findSolution(){
//     let display = document.getElementById('display');
//     let solution = operate(calculation);
//     display.textContent = solution;

//     calculation.solutionTracker = solution;
//     console.log(calculation.solutionTracker); 
//     calculation.num1 = "";
//     calculation.num2 = "";
    // console.log(calculation.num2)
    //calculation.operator = "";
    // console.log(calculation.num1);
// }





     // updateDisplay();
//     if (calculation.operator === "*"){
//          if(calculation.solutionTracker === ""){
//             solution = multiply(calculation.num1, calculation.num2);

//             return solution; 
//         }
//         else{
//             solution = multiply(calculation.solutionTracker, calculation.num2)
//             return findSolution(solution); 
//         }
//     }
// }
    
//     else if(calculation.operator === "/"){
//         if(calculation.solutionTracker === ""){
//             solution = divideNumbers(calculation.num1, calculation.num2);
//             return solution;
//         }
//         else{
//             solution = divideNumbers(calculation.solutionTracker, calculation.num2)
//             return solution;
//         }
//     }
//     else if(calculation.operator === "+"){
//         if(calculation.solutionTracker === ""){
//             solution = add(calculation.num1, calculation.num2);
//             return solution; 
//         }
//         else {
//             solution = add(calculation.solutionTracker, calculation.num2);
//             return solution;
//         }
//     }
//     else if(calculation.operator === "-"){
//         if(calculation.solutionTracker === ""){
//             solution = subtract(calculation.num1, calculation.num2);
//             return solution;
//         }
//         else {
//             solution = subtract(calculation.solutionTracker, calculation.num2);
//             return solution; 
//         }
//     }
    

