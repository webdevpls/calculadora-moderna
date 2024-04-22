document.querySelectorAll('.key').forEach(button => {
    button.addEventListener('click', function() {
        const display = document.getElementById('display');
        if (this.dataset.num) {
            if (display.innerText === '0') {
                display.innerText = this.dataset.num;
            } else {
                display.innerText += this.dataset.num;
            }
        } else if (this.dataset.op) {
            display.innerText += ' ' + this.dataset.op + ' ';
        } else if (this.id === 'clear') {
            display.innerText = '0';
        } else if (this.id === 'equals') {
            display.innerText = eval(display.innerText);
        }
    });
});
