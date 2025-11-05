
// Variable that stores the buttons values
let calc = String(localStorage.getItem('result') || '');
displayCurrentValue();

// Function to erase number or operator
function erase() {
    calc = String(calc).trim(); 
    if (calc.endsWith(' ')) {
        calc = calc.slice(0, -3); 
    } else {
        calc = calc.slice(0, -1); 
    }
    displayCurrentValue();
    localStorage.setItem('result', calc);
}

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
    document.querySelector('.display-text').innerHTML = " " + calc;
}
// Funtion to calculate result
function calculateResult()
{
    let operation = calc.trim().split(' ');

    let num1 = parseFloat(operation[0]);
    let num2 = parseFloat(operation[2]);
    let result;
    
    switch (operation[1]) {
       case "+":
                result = num1 + num2;
                break;

            case "-":
                result = num1 - num2;
                break;

            case "*":
                result = num1 * num2;
                break;

            case "/":
                if(operation[2] == 0)
                {
                    alert("can't divide by 0");
                    return;
                }
                result = num1 / num2;
                break;

            default:
                alert("unknown operation try again");
                return;
    }

    // Float values handling
    result = Math.round(result * 10000000000) / 10000000000;

    return result;
}