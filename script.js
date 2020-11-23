// changed bad UX "prompt" and "alerts" to checkboxes and textarea to improve code
// also changed querySelector to getElementById in that process
// this was all approved by the instructor prior to implementation as welcomed improvements

// Function to display numbers for ranged input
function updateTextInput(val) {
  document.getElementById('textInput').value=val; 
}

// Function to return random upper case letters
function getRandomUpperCase(){
  return String.fromCharCode(Math.floor(Math.random()*26)+65);
 }

 // Function to return random lower case letters
 function getRandomLowerCase(){
  return String.fromCharCode(Math.floor(Math.random()*26)+97);
}

// Function to return random numbers
function getRandomNumber(){
  return String.fromCharCode(Math.floor(Math.random()*10)+48);
}

// Function to return random special characters
function getRandomSymbol(){
  var symbol = "!@#$%^&*(){}[]=<>/,.|~?";
  return symbol[Math.floor(Math.random()*symbol.length)];
}

// Declaring variables
var answerEl = document.getElementById("answer");
var lengthEl = document.getElementById("length");
var numberEl = document.getElementById("number");
var lowerEl = document.getElementById("lower");
var upperEl = document.getElementById("upper");
var symbolEl = document.getElementById("symbol");
var copyEl = document.getElementById("copy");
// Assignment Code
var generateBtn = document.getElementById("generate");

// QuerySelector replaced by getElementById as ID was used in HTML
// var generateBtn = document.querySelector("#generate");

const randomFunc = {
  upper : getRandomUpperCase,
  lower : getRandomLowerCase,
  number : getRandomNumber,
  symbol : getRandomSymbol
};

// Add event listener to generate button
generateBtn.addEventListener('click', () => {

  const length = +lengthEl.value;
  const hasUpper = upperEl.checked;
  const hasLower = lowerEl.checked;
  const hasNumber = numberEl.checked;
  const hasSymbol = symbolEl.checked;

answerEl.innerText = generatePassword(hasUpper, hasLower, hasNumber, hasSymbol, length);
});

// Write password to the #password input
function generatePassword(upper, lower, number, symbol, length){
  // var password = generatePassword();
  // var passwordText = document.querySelector("#password");

  // passwordText.value = password;
  let generatedPassword = "";

  const typesCount = upper + lower + number + symbol;

  //console.log(typesCount);

  const typesArr = [{upper}, {lower}, {number}, {symbol}].filter(item => Object.values(item)[0]);

  if(typesCount === 0) {
      return '';
  }

// Loop to assemble password
  for(let i=0; i<length; i+=typesCount) {
      typesArr.forEach(type => {
          const funcName = Object.keys(type)[0];
          generatedPassword += randomFunc[funcName]();
      });
  }

  const finalPassword = generatedPassword.slice(0, length);

  return finalPassword;
}




