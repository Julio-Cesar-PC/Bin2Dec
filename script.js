const input = document.querySelector('#input');
let output = document.querySelector('#result');
const button0 = document.querySelector('#convert');
const button1 = document.querySelector('#copy');


button0.addEventListener('click', () => {verifyInput(input.value) ? output.innerHTML = convert(input.value) : null});
output.addEventListener('click', () => {copyToClipboard()});
button1.addEventListener('click', () => {copyToClipboard()});

function verifyInput(input) {
    if (!isBinary(input)) {
        return false, alert('Please enter a valid number');
    }
    return true;
}

function convert(input) {
    return parseInt(input, 2)
}

function isBinary(input) {
    return /^[0-1]+$/.test(input);
}

function copyToClipboard() {
    navigator.clipboard.writeText(output.innerHTML);
}