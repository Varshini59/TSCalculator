const operation = document.querySelector('#operations') as HTMLInputElement
const operand1 = document.querySelector('#operand1') as HTMLInputElement
const operand2 = document.querySelector('#operand2') as HTMLInputElement
const answerDiv = document.querySelector('#answer') as HTMLInputElement
const InputForm = document.querySelector('form')!;

console.log(answerDiv)

const add = (a: number, b: number): number => {
    return a + b;
}

const subtract = (a: number, b: number): number => {
    return a - b;
}

const multiply = (a: number, b: number): number => {
    return a * b;
}

const divide = (a: number, b: number): number => {
    if(a===0 && b ===0)
      return 0;
    return a / b;
}

InputForm.addEventListener('submit', (e) => {
    e.preventDefault();
    let answer:number=0;
    switch (operation.value) {
        case 'addition'      : answer = add(operand1.valueAsNumber, operand2.valueAsNumber); break;
        case 'subtraction'   : answer = subtract(operand1.valueAsNumber, operand2.valueAsNumber); break;
        case 'multiplication': answer = multiply(operand1.valueAsNumber, operand2.valueAsNumber); break;
        case 'division'      : answer = divide(operand1.valueAsNumber, operand2.valueAsNumber); break;
    }  
answerDiv.innerHTML=`<p>${answer}</p>`
})