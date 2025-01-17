// Factorial functions
function factorialIterative(n) {
    let result = 1;
    for (let i = 1; i <= n; i++) {
        result *= i;
    }
    return result;
}
function factorialRecursive(n) {
    if (n === 0 || n === 1) return 1;
    return n * factorialRecursive(n - 1);
}
// DOM Elements
const numberInput = document.getElementById('number');
const calculateButton = document.getElementById('calculate');
const resultOutput = document.getElementById('result');
const errorOutput = document.getElementById('error');

// Calculate factorial on button click
calculateButton.addEventListener('click', () => {
    const number = parseInt(numberInput.value);
    const method = document.querySelector('input[name="method"]:checked').value;

    // Input validation
    if (isNaN(number) || number < 0) {
        errorOutput.textContent = "Please enter a valid positive integer.";
        resultOutput.textContent = "";
        return;
    }

    errorOutput.textContent = ""; // Clear error

    // Calculate factorial
    const result = method === 'iterative' ? factorialIterative(number) : factorialRecursive(number);
    resultOutput.textContent = `The factorial of ${number} using the ${method} method is: ${result}`;
});
