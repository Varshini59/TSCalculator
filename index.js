"use strict";
const operation = document.querySelector('#operations');
const operand1 = document.querySelector('#operand1');
const operand2 = document.querySelector('#operand2');
const answerDiv = document.querySelector('#answer');
const InputForm = document.querySelector('form');
console.log(answerDiv);
const add = (a, b) => {
    return a + b;
};
const subtract = (a, b) => {
    return a - b;
};
const multiply = (a, b) => {
    return a * b;
};
const divide = (a, b) => {
    if (a === 0 && b === 0)
        return 0;
    return a / b;
};
InputForm.addEventListener('submit', (e) => {
    e.preventDefault();
    let answer = 0;
    switch (operation.value) {
        case 'addition':
            answer = add(operand1.valueAsNumber, operand2.valueAsNumber);
            break;
        case 'subtraction':
            answer = subtract(operand1.valueAsNumber, operand2.valueAsNumber);
            break;
        case 'multiplication':
            answer = multiply(operand1.valueAsNumber, operand2.valueAsNumber);
            break;
        case 'division':
            answer = divide(operand1.valueAsNumber, operand2.valueAsNumber);
            break;
    }
    answerDiv.innerHTML = `<p>${answer}</p>`;
});
