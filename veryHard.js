// 5)

// VERY HARD: Create a simple calculator that prompts the user for a number, an operator (either +, -, * or /) and another number, 
// and then uses the functions created in the hard challenge to output the value in sentence form. Example output: "3 + 4 = 7"

// const operator = prompt("Enter operator ( either +, -, * or / ): ");
const num1 = parseFloat(prompt("Enter first Number"));
const operator = prompt("Enter operator ( either +, -, * or / ): ");
const num2 = parseFloat(prompt("Enter second Number"));

let result;

if (operator == '+') {
    result = num1 + num2;

} else if (operator == '-') {
    result = num1 - num2;
}
else if (operator == '*') {
    result = num1 * num2;
}
else if (operator == '/') {
    result = num1 / num2;
}
else {
    prompt("Invalid operator")
};
console.log(`${num1} ${operator} ${num2} = ${result}`);




