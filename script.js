let num1 = "";
let num2 = "";
let operator = "";
let displayValue = "";
let checkForFirst = false;

function add(num1, num2) {
  return parseFloat(num1) + parseFloat(num2);
}

function substract(num1, num2) {
  return num1 - num2;
}

function multiply(num1, num2) {
  return num1 * num2;
}

function divide(num1, num2) {
  return num1 / num2;
}

function operate(num1, num2, operator) {
  if (operator === "+") {
    return add(num1, num2);
  } else if (operator === "-") {
    return substract(num1, num2);
  } else if (operator === "*") {
    return multiply(num1, num2);
  } else if (operator === "/") {
    return divide(num1, num2);
  }
}

//// OPERATORS
const operators = document.querySelectorAll("#operators");

operators.forEach((button) => {
  button.addEventListener("click", () => {
    getOperator(button);
  });
});

function getOperator(button) {
  if (operator === "") {
    displayValue = "";
    operator = button.innerHTML;
    num2 = "";
  } else if (operator !== "") {
    if (num2 === "") {
      displayValue = "";
      operator = button.innerHTML;
      num2 = "";
    } else if (num2 !== "") {
      resultValue = operate(num1, num2, operator);
      displayValue = resultValue;
      document.getElementById("display").innerHTML = displayValue;
      num1 = resultValue;
      displayValue = "";
      operator = button.innerHTML;
      num2 = "";
      checkForFirst = true;
    }
  }
}

//// NUMBERS
const numbers = document.querySelectorAll("#numbers");

numbers.forEach((button) => {
  button.addEventListener("click", () => {
    getNumber(button);
  });
});

//document.addEventListener("keydown", (event2) => {

/* for (let i = 0; i < 9; i++) {
    console.log("hello")
    if (event.keycode+i === 96) {
      console.log("hello")
      getNumber(numbers.item(i))
    }
  } */
//});

function getNumber(button) {
  if (operator === "") {
    if (checkForFirst === true) {
      num1 = "";
      displayValue = "";
      displayValue += button.innerHTML;
      num1 += button.innerHTML;
      document.getElementById("display").innerHTML = displayValue;
      checkForFirst = false;
      checkDecimal();
    } else if (checkForFirst === false) {
      displayValue += button.innerHTML;
      num1 += button.innerHTML;
      document.getElementById("display").innerHTML = displayValue;
      checkDecimal();
    }
  } else if (operator !== "") {
    displayValue += button.innerHTML;
    num2 += button.innerHTML;
    document.getElementById("display").innerHTML = displayValue;
    checkDecimal();
  }
}



const result = document.querySelector("#result");
result.addEventListener("click", resultFunction);

function resultFunction() {
  if (num1 === "" || num2 === "" || operator == "") {
  } else {
    resultValue = operate(num1, num2, operator);
    displayValue = resultValue;
    document.getElementById("display").innerHTML = displayValue;
    num1 = resultValue;
    operator = "";
    checkForFirst = true;
  }
}

const clear = document.querySelector("#clear");
clear.addEventListener("click", clearFunction);

function clearFunction() {
  displayValue = "";
  document.getElementById("display").innerHTML = displayValue;
  num1 = "";
  num2 = "";
  operator = "";
  resultValue = "";
  checkDecimal();
}

const backspace = document.querySelector("#backspace");
backspace.addEventListener("click", () => {
  backspaceFunction();
});

function backspaceFunction() {
  if (operator === "") {
    num1 = num1.slice(0, -1);
    displayValue = num1;
    document.getElementById("display").innerHTML = displayValue;
  } else if (operator !== "") {
    num2 = num2.slice(0, -1);
    displayValue = num2;
    document.getElementById("display").innerHTML = displayValue;
  }
}

const decimal = document.querySelector(".decimal");
decimal.addEventListener("click", checkDecimal);

function checkDecimal() {
  if (displayValue.includes(".")) {
    decimal.disabled = true;
  } else if (!displayValue.includes(".")) {
    decimal.disabled = false;
  }
}

//// KEYBOARD
  document.addEventListener("keydown", (event) => {
    if (event.keyCode === 107) {
      getOperator(operators.item(0));
    } else if (event.keyCode === 109) {
      getOperator(operators.item(1));
    } else if (event.keyCode === 106) {
      getOperator(operators.item(2));
    } else if (event.keyCode === 111) {
      getOperator(operators.item(3));
    } else if (event.keyCode === 96) {
      getNumber(numbers.item(0));
    } else if (event.keyCode === 97) {
      getNumber(numbers.item(1));
    } else if (event.keyCode === 98) {
      getNumber(numbers.item(2));
    } else if (event.keyCode === 99) {
      getNumber(numbers.item(3));
    } else if (event.keyCode === 100) {
      getNumber(numbers.item(4));
    } else if (event.keyCode === 101) {
      getNumber(numbers.item(5));
    } else if (event.keyCode === 102) {
      getNumber(numbers.item(6));
    } else if (event.keyCode === 103) {
      getNumber(numbers.item(7));
    } else if (event.keyCode === 104) {
      getNumber(numbers.item(8));
    } else if (event.keyCode === 105) {
      getNumber(numbers.item(9));
    }else if(event.keyCode===110){
      getNumber(numbers.item(10))
    }else if(event.keyCode === 13){
      resultFunction();
    }else if(event.keyCode===8){
      backspaceFunction();
    }else if(event.keyCode===46){
      clearFunction();
    }
  });