function appendToDisplay(value) {
    document.getElementById('display').value += value;
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function calculate() {
    let expression = document.getElementById('display').value;
    let operands = expression.split(/[\+\-\*\/]/);
    let operator = expression.match(/[\+\-\*\/]/);
    let result;

    if (operands.length !== 2 || !operator) {
        alert('Invalid expression');
        clearDisplay();
        return;
    }

    let num1 = parseFloat(operands[0]);
    let num2 = parseFloat(operands[1]);

    switch (operator[0]) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            if (num2 === 0) {
                alert('Division by zero error');
                clearDisplay();
                return;
            }
            result = num1 / num2;
            break;
    }

    document.getElementById('display').value = result;
}