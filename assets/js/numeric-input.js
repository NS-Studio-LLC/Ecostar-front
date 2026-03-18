const numericInputs = document.querySelectorAll('.numeric-input');

numericInputs.forEach(input => {
    input.addEventListener('keydown', (e) => {
        const specialKeys = ['Backspace', 'Tab', 'Enter', 'Delete', 'ArrowLeft', 'ArrowRight'];
        
        if (!/[0-9]/.test(e.key) && !specialKeys.includes(e.key)) {
            e.preventDefault();
        }
    });

    input.addEventListener('paste', (e) => {
        const pasteData = e.clipboardData.getData('text');
        if (!/^\d+$/.test(pasteData)) {
            e.preventDefault();
        }
    });
});