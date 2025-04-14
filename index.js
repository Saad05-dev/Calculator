// Variable that stores the buttons values
let calc = '' || localStorage.getItem('result') ;;

calculation();
//Function that captures user input and stores it in the variable calc 
function updateCalculation(operation)
{
    calc += operation;

    calculation();

    localStorage.setItem('result',calc);
}
// Function that displays the input of user and result
function calculation()
{
    document.querySelector('.display').innerHTML = calc;
}