
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
    } 
    else{
        calculation.num2 += buttonValue;
    }
    updateDisplay();
}

function updateDisplay() {
    const displayValue = calculation.num2 !== "" ? calculation.num2 : calculation.num1 || "0";

    display.textContent = displayValue;
  }

//Function sets calculation.operator
function setOperator(operator){
    if(calculation.operator !== ""){
        operate(); 
    }
    calculation.operator = operator;
}

//OPERATOR BUTTONS --------------------------------------
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
//END OPERATOR BUTTONS----------------------------------

//Equals Sign Button -----------------------------------
let equalsSign = document.getElementById('equals');
equalsSign.addEventListener('click', () => {
    operate(calculation);
})
//------------------------------------------------------

//CLEAR BUTTON -----------------------------------------
let clearButton = document.getElementById("clear");
clearButton.addEventListener('click', () => {
    clear(); 
});
//------------------------------------------------------

//SIGN BUTTON ------------------------------------------
let signButton = document.getElementById("sign");
signButton.addEventListener('click', () => {
    sign(); 
});
//------------------------------------------------------

//PERCENTAGE BUTTON ------------------------------------
let percentageButton = document.getElementById("percent");
percentageButton.addEventListener('click', () => {
    percentageButtonPress();
});
//------------------------------------------------------

//DECIMAL BUTTON ---------------------------------------
let decimalButton = document.getElementById("decimal");
decimalButton.addEventListener('click', () => {
    decimal(); 
});
//------------------------------------------------------


function operate(){
    let num1 = parseFloat(calculation.num1);
    let num2 = parseFloat(calculation.num2);

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
        if(num2 === 0){
            calculation.num1 = "";
            calculation.num2 = "";
            calculation.solutionTracker = "Learn Math";
            calculation.operator = "";
            break;
        }
        else{
        calculation.solutionTracker = num1 / num2;
        break;
        }
      case "%":
        num2 = 100; 
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

function clear(){
    calculation.num1 = "";
    calculation.num2 = "";
    calculation.solutionTracker = "";
    calculation.operator = "";
    display.textContent = "0"; 
    updateDisplay(); 
}

function sign(){
    if(display.textContent === calculation.num1){
        calculation.num1 = toggleSign(calculation.num1)
        //"-" + display.textContent;
    }
    else{
        calculation.num2 = toggleSign(calculation.num2)
        //"-" + display.textContent;
    }
    updateDisplay();
}

function toggleSign(numberString){
    if(numberString.charAt(0) === '-'){
        return numberString.slice(1);
    }
    else {
        return "-" + numberString;
    }
}

function percentageButtonPress(){
    setOperator("%");
    operate();
}


function decimal(){
    let randomNumber = display.textContent;
if(randomNumber.includes(".")){
    return;
}
else{
    if(randomNumber === calculation.num1){
            calculation.num1 = calculation.num1 + ".";
            updateDisplay();
        }
    else{
            calculation.num2 = calculation.num2 + ".";
            updateDisplay();
        }
        
    }
}

//Formatting
// function maxDigits(number, maxNumber){
//     let stringValue = number.toString(); 
//     if(stringValue.length <= maxNumber)
//     {
//         return stringValue; 
//     }
//     else{
//         return stringValue.substr(0, maxNumber);
//     }
// }



