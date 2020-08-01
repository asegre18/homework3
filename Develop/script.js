// Assignment Code
// let generateBtn = document.querySelector("#generate");
// target each html element to make it easier later on
const $passwordParam = document.querySelector("#passwordParam");
const $finalPassword = document.querySelector("password");
const $genarateBtn = document.querySelector("#generate");
const $copyBtn = document.querySelector("copy");
let promptParameter = document.querySelector("#passwordParam");
// prompt user for these variables once they click generateBtn
let symbols = ["!","#","$","(",")","*","&","'","^","%","@","_","-","+","=","?","{","}","[","]","~"];
let numbers = ["0","1","2","3","4","5","6","7","8","9"];
let lowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
let upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
let password = [];
// Write password to the #password input
// function writePassword() {
//   let password = generatePassword();
//   let passwordText = document.querySelector("#password");

//   passwordText.value = password;

// }

// console.log($passwordParam);
// console.log(promptParameter);


// alert the prompt instructions once the prompt button is clicked
promptParameter = $passwordParam.addEventListener("click", function () {
  alert('Criteria\nThis tool will generate a password for you with the criteria you select\nYou will be selecting which criteria to include in the password\nYou will be selecting the length of the password\nYou may type lowercase, uppercase, numeric values\nYou may select special characters\nYou will be selecting the length of the password');
});

$genarateBtn.addEventListener("click", function () {
  password = generatePassword();

});
// function generatePassword() {


// }

// this will activate the function once the generate button is clicked
// needs to fit the specified parameters and then change $finalPassword
// $generateBtn.addEventListener("click", function () {


// });
