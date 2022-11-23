
let previousNumber = document.querySelector(".previous-number");
let sign = document.querySelector(".sign");
let resultNumber = document.querySelector(".result");
let numbers = document.querySelectorAll("#numbers");
let operators = document.querySelectorAll("#operator");
let clear = document.querySelector("#clear");


let equalsOperator = document.querySelector("#equalsOperator");


let result = "";

function clearScreen() {
    result = '';
    resultNumber.innerHTML = '';
    previousNumber.innerHTML = '';
    sign.innerHTML = '';
}

function displayNumber() {
    if(this.textContent === '.' && resultNumber.innerHTML.includes('.')) return;
    if(this.textContent === '.' && resultNumber.innerHTML === '') return resultNumber.innerHTML = '.0'

    resultNumber.innerHTML += this.textContent;
}

function operate() {
    if(resultNumber.innerHTML === '' && this.textContent ==='-'){
        resultNumber.innerHTML = '-';
        return;
    }
    else if (resultNumber.innerHTML === '') {
        return;
    }

    if(sign.innerHTML !== '') {
        showResult();
    }
    previousNumber.innerHTML = resultNumber.innerHTML;
    sign.innerHTML = this.textContent;
    resultNumber.innerHTML ='';
}

function showResult() {
    if(previousNumber.innerHTML === '' || resultNumber.innerHTML === '') return;

    let a = Number(resultNumber.innerHTML);
    let b = Number(previousNumber.innerHTML);
    let operator = sign.innerHTML;


    switch(operator) {
        case '+':
        result = a + b;
        break;
        case '-':
        result = b - a;
        break;
        case 'x':
        result = a * b;
        break;
        case '/':
        result = b / a;
        break;
        case '2^':
        result = b ** a;
        break;
    }

    resultNumber.innerHTML = result;
    previousNumber.innerHTML = '';
    sign.innerHTML = '';
}




// Слушатели
numbers.forEach((num) => num.addEventListener("click", displayNumber));

operators.forEach((num) => num.addEventListener("click", operate));

clear.addEventListener("click", clearScreen);

equalsOperator.addEventListener("click",showResult);

