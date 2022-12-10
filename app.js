const userInput = document.getElementById('binary').value;
console.log(userInput);
function binarytodecimal(){
    const decimal = parseInt(userInput,2);
    console.log(decimal);
    document.getElementsByClassName('resultvalue').innerText = decimal;
}

document.getElementsByClassName("btn")[0].addEventListener("click", binarytodecimal());




