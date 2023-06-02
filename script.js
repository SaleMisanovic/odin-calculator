let num1 = "";
let num2 = "";
let operator = "";
let displayValue = "";

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

let checkForFirst = false;

const operators = document.querySelectorAll("#operators");
operators.forEach((button) => {
  button.addEventListener("click", () => {
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
  });
});

const numbers = document.querySelectorAll("#numbers");
numbers.forEach((button) => {
  button.addEventListener("click", () => {
    if (operator === "") {
      if (checkForFirst === true) {
        num1 = "";
        displayValue = "";
        displayValue += button.innerHTML;
        num1 += button.innerHTML;
        document.getElementById("display").innerHTML = displayValue;
        checkForFirst = false;
        checkDecimal()
      } else if (checkForFirst === false) {
        displayValue += button.innerHTML;
        num1 += button.innerHTML;
        document.getElementById("display").innerHTML = displayValue;
        checkDecimal()
      }
    } else if (operator !== "") {
      displayValue += button.innerHTML;
      num2 += button.innerHTML;
      document.getElementById("display").innerHTML = displayValue;
      checkDecimal()
    }
  });
});

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
  checkDecimal() 
}

const backspace = document.querySelector("#backspace");
backspace.addEventListener("click", () => {
  if (operator === "") {
    num1 = num1.slice(0, -1);
    displayValue = num1;
    document.getElementById("display").innerHTML = displayValue;
  } else if (operator !== "") {
    num2 = num2.slice(0, -1);
    displayValue = num2;
    document.getElementById("display").innerHTML = displayValue;
  }
});

const decimal = document.querySelector(".decimal");
decimal.addEventListener("click", checkDecimal);

function checkDecimal() {
  if (displayValue.includes(".") ) {
    decimal.disabled = true;
  } else if(!displayValue.includes(".")) {
    decimal.disabled = false;
  }
}
