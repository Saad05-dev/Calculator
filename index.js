// Variable that stores the buttons values
let calc = localStorage.getItem('result') || '' ;
displayCurrentValue();
//Function that captures user input and stores it in the variable calc 
function handleCalculation(operation)
{
    if( operation == "+" || operation == "-" || operation == "*" || operation == "/")
    {
        calc += ` ${operation} `;
    }
    else
    {
        calc += operation;
    }

    displayCurrentValue();


    localStorage.setItem('result',calc);
}
// Function that displays the input of user and result
function displayCurrentValue()
{
    document.querySelector('.display').innerHTML = " " + calc;
}
function calculateResult()
{
    let operation = calc.trim().split(' ');
    console.log(operation);
    
    switch (operation[1]) {
       case "+":
                return operation[0] + operation[2];

            case "-":
                return operation[0] - operation[2];

            case "*":
                return operation[0] * operation[2];

            case "/":
                return operation[0] / operation[2];

            default:
                return alert("unknown operation try again");
    }
}