
//calculator
var add = function(num1,num2) {
	return num1 + num2;
  }

var subtract = function(num1, num2) {
	return num1 - num2;
}

var divide = function(num1, num2) {
	return num1 / num2;
}

var multiply = function(num1, num2) {
	return num1 * num2;
}

var num1 = parseInt(prompt("Enter a number"));
var result = prompt("enter operator");
var num2 = parseInt(prompt("Enter another"));

if (result === "+") {
   alert(add(num1, num2));
} else if (result === "-") {
   alert(subtract(num1, num2));
} else if (result === "/") {
  alert(divide(num1, num2));
} else if (result === "*") {
  alert(multiply(num1, num2));
}
