const rangeInput = document.getElementById('range1');
const rangeValue = document.getElementById('rangeValue');

rangeInput.addEventListener('input', function() {
    let currentVal = this.value;
    
    if (currentVal >= 100) {
        rangeValue.innerText = "50+";
    } else {
        rangeValue.innerText = currentVal;
    }
});