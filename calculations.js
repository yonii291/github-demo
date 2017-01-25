function calculate(calculationHtmlId, calculationFunc) {

  var calculationHtmlElement = document.getElementById(calculationHtmlId);
  if (!calculationHtmlElement) {
    throw new Error('Could not find HTML element with ID "' + calculationHtmlId + '"');
  }

  var aElement = calculationHtmlElement.getElementsByClassName('a')[0];
  var bElement = calculationHtmlElement.getElementsByClassName('b')[0];
  var resultElement = calculationHtmlElement.getElementsByClassName('result')[0];

  function performCalculation() {
    var valueOfA = parseFloat(aElement.value);
    var valueOfB = parseFloat(bElement.value);
    resultElement.textContent = calculationFunc(valueOfA, valueOfB);
  }

  aElement.addEventListener('change', performCalculation);
  aElement.addEventListener('keyup', performCalculation);
  bElement.addEventListener('change', performCalculation);
  bElement.addEventListener('keyup', performCalculation);

  performCalculation();
}
