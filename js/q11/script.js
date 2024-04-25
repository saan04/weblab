// Function to perform addition
function add(a, b) {
    return a + b;
  }
  
  // Function to perform subtraction
  function subtract(a, b) {
    return a - b;
  }
  
  // Function to perform multiplication
  function multiply(a, b) {
    return a * b;
  }
  
  // Function to perform division
  function divide(a, b) {
    if (b === 0) {
      return "Error: Division by zero";
    }
    return a / b;
  }
  
  // Main function to perform calculations based on user input
  function calculate() {
    var num1 = parseFloat(document.getElementById('num1').value);
    var num2 = parseFloat(document.getElementById('num2').value);
    var operator = document.getElementById('operator').value;
    var result;
  
    switch (operator) {
      case '+':
        result = add(num1, num2);
        break;
      case '-':
        result = subtract(num1, num2);
        break;
      case '*':
        result = multiply(num1, num2);
        break;
      case '/':
        result = divide(num1, num2);
        break;
      default:
        result = "Invalid operator";
    }
  
    document.getElementById('result').innerHTML = "Result: " + result;
  }
  