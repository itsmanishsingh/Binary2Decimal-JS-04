
function binarytodecimal() {
  const userInput = document.getElementById("binary");
  const userInputVal = +userInput.value;
  const decimal = parseInt(userInputVal, 2);
  document.querySelector(".resultvalue").innerText = decimal;
    
  // setTimeout( document.querySelector(".resultvalue").innerText = decimal, DELAY );
  console.log(decimal);
}
