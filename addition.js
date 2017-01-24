var addition = document.getElementById('addition');
var aElement = addition.getElementsByClassName('a')[0];
var bElement = addition.getElementsByClassName('b')[0];
var resultElement = addition.getElementsByClassName('result')[0];

function add(a, b) {
  return a * b;
}

var valueOfA = parseFloat(aElement.textContent);
var valueOfB = parseFloat(bElement.textContent);
resultElement.textContent = add(valueOfA, valueOfB);
