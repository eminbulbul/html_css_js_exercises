let num1 = +prompt('Enter first number');
let operator = prompt('enter your operator');
let num2 = +prompt('Enter second number');


switch (operator) {
    case "+":
        console.log(num1 + num2);
        break;
    case "-":
        console.log(num1 - num2);
        break;
    case "*":
        console.log(num1 * num2);
        break;
    case "/":
        (num2 === 0) ? console.log("Zero division error"): console.log(num1 / num2);
        //ternary if
        break;
    default:
        result = "something mistake, try again"
        break;
}