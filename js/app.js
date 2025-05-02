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
    // 1. zamień wartości przekazane przez parametr na typ number
    const num1Number = Number(num1)
    const num2Number = Number(num2)
    let result 
    // 2. sprawdź czy są one poprawne
    if(typeof num1Number === 'number' && typeof num2Number === 'number') {
        // 3. jeśli tak to wykonaj działanie i zapisz jego rezultat
        result = num1Number + num2Number
    }
    // 4. dodaj do historii operacji to działanie w formie: 1 + 1 = 2
    this.history.push(num1 + ' + ' + num2 + ' = ' + result)
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
    }
    
} while(calc.isCorrectAction(action));