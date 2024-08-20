const form = document.querySelector('form');
const minInput = document.querySelector('#min');
const maxInput = document.querySelector('#max');
const generateButton = document.querySelector('#generate');
const resultElement = document.querySelector('#result');

generateButton.addEventListener('click', generateRandomNumber);

function generateRandomNumber(e) {
  e.preventDefault();
  const minValue = parseInt(minInput.value);
  const maxValue = parseInt(maxInput.value);
  const randomNumber = Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue;
  resultElement.textContent = `Random Number: ${randomNumber}`;
}