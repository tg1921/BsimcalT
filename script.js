
const screen = document.querySelector('input');
screen.value = '0';

let firstNum = 0;
let operation = '';

document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', function() {
        const num = this.getAttribute('data-number');
        const op = this.getAttribute('data-opration');
        const action = this.getAttribute('data-action');
        
        
        if (num) {
            if (screen.value === '0') {
                screen.value = num;
            } else {
                screen.value += num;
            }
        }
        
        
        if (op) {
            
            firstNum = Number(screen.value);
            
            if (op === 'addition') operation = '+';
            if (op === 'minus') operation = '-';
            if (op === 'x') operation = '×';
            if (op === '/') operation = '÷';
            
            // Clear screen 
            screen.value = '';
        }
        
        
        if (action === 'Equal') {
            let secondNum = Number(screen.value);
            let answer = 0;
            
            if (operation === '+') answer = firstNum + secondNum;
            if (operation === '-') answer = firstNum - secondNum;
            if (operation === '×') answer = firstNum * secondNum;
            if (operation === '÷') answer = firstNum / secondNum;
           
            screen.value = answer;
            firstNum = 0;
            operation = '';
            
        }
        

        // Clear button
        if (action === 'clear') {
            screen.value = '0';
            firstNum = 0;
            operation = '';
        }
        
        // Delete button
        if (action === 'delete') {
            if (screen.value.length > 1) {
                screen.value = screen.value.slice(0, -1);
            } else {
                screen.value = '0';
            }
        }
        
        // Decimal
        if (action === 'point') {
            if (!screen.value.includes('.')) {
                screen.value += '.';
            }
        }
    });
});