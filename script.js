let expression = "";
const display = document.getElementById('display');
const buttons = document.getElementsByTagName('button');
//logic for performing operators
function  evaluateResult() {
  console.log('expression:', expression)
  const convertedValue = expression
    .replace("×", "*")
    .replace("÷", "/")
    .replace('%', '*0.01')
    .replace('log', 'Math.log10')
    .replace('e', 'Math.E')
    .replace('√', 'Math.sqrt');
  
  console.log('convertedValue:', convertedValue)
  
  const result = eval(convertedValue);
 expression = result.toString();
 display.value = expression;
}

for (let i = 0; i < buttons.length; i++) {
  const button = buttons[i];
  button.addEventListener('click',  function() {
    const value = button.innerText;

    try {
        if (value == "AC") {//for starting new calculation
            expression = "";
            display.value = expression;
          } 
          else if(value == "=") {//displaying result
            evaluateResult();
          } else {
            expression += value;
            display.value = expression;
          }
    } catch (error) {//displaying error
        console.error(error);
        expression = "ERROR";
        display.value = expression;
    }

    
  })
  
}