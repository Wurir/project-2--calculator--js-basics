function Calculator() {
    this.actions = ['+', '-', '*', '/', '^'];
    this.history = [];
}

Calculator.prototype.isCorrectAction = function(action) {
    return this.actions.includes(action);
}

Calculator.prototype.getHistoryAsString = function() {
    return this.history.join('\n');
}

Calculator.prototype.add = function(num1, num2) {
    
    const num1Number = Number(num1)
    const num2Number = Number(num2)
    let result 

    if(typeof num1Number === 'number' && typeof num2Number === 'number') {
        result = num1Number + num2Number
    }

    this.history.push(num1 + ' + ' + num2 + ' = ' + result)
}
Calculator.prototype.subtract = function(num1, num2) {
    
    const num1Number = Number(num1)
    const num2Number = Number(num2)
    let result 

    if(typeof num1Number === 'number' && typeof num2Number === 'number') {
        result = num1Number - num2Number
    }

    this.history.push(num1 + ' - ' + num2 + ' = ' + result)
}
Calculator.prototype.multiply = function(num1, num2) {
    const num1Number = Number(num1)
    const num2Number = Number(num2)
    let result 

    if(typeof num1Number === 'number' && typeof num2Number === 'number') {
        result = num1Number * num2Number
    }

    this.history.push(num1 + ' * ' + num2 + ' = ' + result)
}
Calculator.prototype.divide = function(num1, num2) {
    const num1Number = Number(num1)
    const num2Number = Number(num2)
    let result 

    if(typeof num1Number === 'number' && typeof num2Number === 'number') {
        result = num1Number / num2Number
    }

    this.history.push(num1 + ' / ' + num2 + ' = ' + result)
}
Calculator.prototype.compound = function(num1, num2) {
    const num1Number = Number(num1)
    const num2Number = Number(num2)
    
    let result = num1Number
    if(typeof num1Number === 'number' && typeof num2Number === 'number') {
        for(let i=1; i<num2Number; i++){
            result *= num1Number
        }
    }
    
    this.history.push(num1 + ' ^ ' + num2 + ' = ' + result)
}

const calc = new Calculator();
let action, promptContent, isCorrectAction, number1, number2;
do { 
    promptContent = 'Podaj jaką operację chcesz wykonać (+, -, *, /, ^) i potwierdź. \n'; // \n - znak nowej linii
    promptContent += 'Jeśli chcesz zrezygnować wciśnij Anuluj. \n';
    promptContent += 'Lista poprzednich operacji: \n' + calc.getHistoryAsString();

    action = prompt(promptContent);
    isCorrectAction = calc.isCorrectAction(action);
    if(isCorrectAction) {
        number1 = prompt('Podaj liczbę nr 1');
        number2 = prompt('Podaj liczbę nr 2');

        if(action === '+') {
            calc.add(number1, number2);
        }
        if(action === '-') {
            calc.subtract(number1, number2);
        }
        if(action === '*') {
            calc.multiply(number1, number2);
        }
        if(action === '/') {
            calc.divide(number1, number2);
        }
        if(action === '^') {
            calc.compound(number1, number2);
        }
    }
    
} while(calc.isCorrectAction(action));