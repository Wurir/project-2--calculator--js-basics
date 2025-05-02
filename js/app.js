function Calculator() {
    this.actions = ['+', '-', '*', '/', '^'];
    this.history = [];
    this.isNum
}

Calculator.prototype.isCorrectAction = function(action) {
    return this.actions.includes(action);
}

Calculator.prototype.getHistoryAsString = function() {
    return this.history.join('\n');
}

Calculator.prototype.add = function(num1, num2) {
    const {num1Number, num2Number, isValid} = this.parseAndValidate(num1, num2)

    if(isValid) {
        const result = num1Number + num2Number
        this.pushResult('+', num1, num2, result)
    }else {
        this.addError()
    }

}
Calculator.prototype.subtract = function(num1, num2) {
    const {num1Number, num2Number, isValid} = this.parseAndValidate(num1, num2)
    
    if(isValid) {
        const result = num1Number - num2Number
        this.pushResult('-', num1, num2, result)
    }else {
        this.addError()
    }

}
Calculator.prototype.multiply = function(num1, num2) {
    const {num1Number, num2Number, isValid} = this.parseAndValidate(num1, num2)

    if(isValid) {
        result = num1Number * num2Number
        this.pushResult('*', num1, num2, result)
    }else {
        this.addError()
    }

}
Calculator.prototype.divide = function(num1, num2) {
    const {num1Number, num2Number, isValid} = this.parseAndValidate(num1, num2)

    if(isValid) {
        const result = num1Number / num2Number
        this.pushResult('/', num1, num2, result)
    }else {
        this.addError()
    }

}
Calculator.prototype.compound = function(num1, num2) {
    const {num1Number, num2Number, isValid} = this.parseAndValidate(num1, num2)
    
    if(isValid) {
        let result = num1Number
        for(let i=1; i<num2Number; i++){
            result *= num1Number
        }
        this.pushResult('^', num1, num2, result)
    }else {
        this.addError()
    }

}
Calculator.prototype.isNumber = function(number1, number2){
    if(!isNaN(number1) && !isNaN(number2)){
        this.isNum = true
    } else {
        this.isNum = false
    }
}

Calculator.prototype.pushResult = function(action, num1, num2, result){
    this.history.push(num1 + ' ' + action + ' ' + num2 + ' = ' + result)
}
Calculator.prototype.addError = function(){
    this.history.push('Wrong input')
}
Calculator.prototype.parseAndValidate = function(num1, num2){
    const num1Number = Number(num1)
    const num2Number = Number(num2)
    this.isNumber(num1Number, num2Number)
    return {num1Number, num2Number, isValid: this.isNum }
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

        switch (action){
            case '+':
                calc.add(number1, number2);
                break
            case '-':
                calc.subtract(number1, number2);
                break
            case '*':
                calc.multiply(number1, number2);
                break
            case '/':
                calc.divide(number1, number2);
                break
            case '^':
                calc.compound(number1, number2);
                break
            default:
                break
        }
    }else {
        alert('Wrong action!')
    }
} while(calc.isCorrectAction(action));