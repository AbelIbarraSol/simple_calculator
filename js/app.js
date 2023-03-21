var btn_number = document.getElementsByClassName('number');
var btn_operation = document.getElementsByClassName('operation');
var btn_equal = document.getElementsByClassName('equal')[0];
var btn_clear = document.getElementsByClassName('clear')[0];
let display = document.getElementsByClassName('contentMain-display')[0];
let currentOpe = '';
let previousOpe = '';
let operation = undefined;


for (var i = 0; i < btn_number.length; i++)
    btn_number[i].addEventListener("click", function (button) {
        // alert(button.srcElement.innerHTML);
        addNumber(button.srcElement.innerText);
    });

for (var i = 0; i < btn_operation.length; i++)
    btn_operation[i].addEventListener("click", function (button) {
        // alert(button.srcElement.innerHTML)
        addOperation(button.srcElement.innerText);
    });

btn_equal.addEventListener('click', function () {
    calculate();
    updateDisplay();
});

btn_clear.addEventListener('click', function () {
    clear();
    updateDisplay();
});

function addNumber(num) {
    currentOpe = currentOpe.toString() + num.toString();
    updateDisplay();
}

function addOperation(op) {
    if (currentOpe === '') return;
    if (previousOpe !== '') {
        calculate();
    }
    operation = op.toString();
    previousOpe = currentOpe;
    currentOpe = '';
}

function calculate() {
    var calculate;
    const previous = parseFloat(previousOpe);
    const current = parseFloat(currentOpe);
    if (isNaN(previous) || isNaN(current)) return;
    switch (operation) {
        case '+':
            calculate = previous + current;
            break;
        case '-':
            calculate = previous - current;
            break;
        case '×':
            calculate = previous * current;
            break;
        case '÷':
            calculate = previous / current;
            break;
        case '%':
            calculate = previous*0.01;
            console.log(calculate);
            break;
        default:
            break;
    }

    currentOpe = calculate;
    operation = undefined;
    previousOpe = '';

}

function clear() {
    currentOpe = '';
    previousOpe = '';
    operation = undefined;
}

function updateDisplay() {
    display.value = currentOpe;
}

clear();