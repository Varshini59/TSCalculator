"use strict";
const buttons = document.querySelectorAll('button');
const displayField = document.querySelector('#display');
const operators = ['+', '*', '/', '='];
const operatorsWithMinus = ['+', '-', '*', '/', '='];
for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', () => {
        let btnText = buttons[i].textContent;
        let dispContent = displayField.textContent;
        if (buttons[i].textContent === 'C')
            displayField.textContent = '';
        else if (buttons[i].textContent === 'DEL')
            displayField.textContent = dispContent.slice(0, -1);
        //If the expression starts with an operator ('-' is allowed)
        else if (displayField.textContent === '' && operators.findIndex((opr) => opr === buttons[i].textContent) !== -1)
            displayField.textContent = dispContent;
        //If the expression's last char is an operator and another operator is clicked
        else if (operatorsWithMinus.findIndex((opr) => opr === buttons[i].textContent) !== -1 && operatorsWithMinus.findIndex((opr) => opr === dispContent.slice(-1)) !== -1)
            displayField.textContent = dispContent;
        else if (buttons[i].textContent === '=') {
            dispContent = math.evaluate(dispContent);
            displayField.textContent = dispContent;
        }
        else {
            displayField.textContent += btnText;
        }
    });
}
