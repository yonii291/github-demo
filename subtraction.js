var subtraction = document.getElementById('subtraction');
var aElement = subtraction.getElementsByClassName('a')[0];
var bElement = subtraction.getElementsByClassName('b')[0];
var resultElement = subtraction.getElementsByClassName('result')[0];

function subtract(a, b) {
  return '?';
}

var valueOfA = parseFloat(aElement.textContent);
var valueOfB = parseFloat(bElement.textContent);
resultElement.textContent = subtract(valueOfA, valueOfB);
