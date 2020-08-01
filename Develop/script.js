// Assignment Code
let generateBtn = document.querySelector("#generate");
// target each html element to make it easier later on
const $passwordParam = document.querySelector("passwordParam");
const $finalPassword = document.querySelector("password");
let promptParameter = document.querySelector("passwordParam");
// prompt user for these variables once they click generateBtn
let symbols = ["!", "#", "$", "(", ")", "*", "&", "'", "^", "%", "@", "_", "-", "+", "=", "?", "{", "}", "[", "]", "~"];
let numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
let lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
let upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
let availableChar = [];
let passwordLength = 0;
let password = '';
let symbolBool = false;
let numberBool = false;
let lowerCaseBool = false;
let upperCaseBool = false;

console.log(generateBtn);

generateBtn.addEventListener("click", addingArray);

function addingArray() {
  passwordLength = parseInt(prompt('What length do you want your new password to be between 8 characters and 128 characters?'));

  while (passwordLength < 8 || passwordLength > 128) {
    passwordLength = parseInt(prompt('Your password must be between 8 characters and 128 characters, Please enter a new password Length.'));
    console.log(passwordLength);
  }
  while (!symbolBool && !numberBool && !lowerCaseBool && !upperCaseBool) {
    symbolBool = confirm('Do you want your password to have Special Characters?');
    numberBool = confirm('Do you want your password to have lowercase letters?');
    lowerCaseBool = confirm('Do you want your password to have uppercase letters?');
    upperCaseBool = confirm('Do you want your password to have numbers');
  }
  // If statements for each case
  if (symbolBool) {
    // availableChar = add symbols to the Array...
    for (let i = 0; i < symbols.length; i++) {
      availableChar.push(symbols[i]);
    }
    console.log(availableChar);
  }
  if (numberBool) {
    // availableChar = add symbols to the Array...
    for (let i = 0; i < numbers.length; i++) {
      availableChar.push(numbers[i]);
    }
    console.log(availableChar);
  }
  if (lowerCaseBool) {
    // availableChar = add symbols to the Array...
    for (let i = 0; i < lowerCase.length; i++) {
      availableChar.push(lowerCase[i]);
    }
    console.log(availableChar);
  }
  if (upperCaseBool) {
    // availableChar = add symbols to the Array...
    for (let i = 0; i < upperCase.length; i++) {
      availableChar.push(upperCase[i]);
    }
    console.log(availableChar);
  }

  for (let i = 0; i < passwordLength; i++) {
    password = availableChar[i];
    // make it randomly select an index from the available charcters
  }
  writePassword();
}
// Write password to the #password input
function writePassword() {
  password = generatePassword();
  let passwordText = document.querySelector("#password");
  passwordText.value = password;
}
function generatePassword() {
  let newPassword = "";
  for (let i = 0; i < passwordLength; i++) {
    let randomChar = Math.floor(Math.random() * availableChar.length);
    newPassword += availableChar[randomChar];
  }
  return newPassword;
}

// possibly add an initial prompt
// alert the prompt instructions once the prompt button is clicked
// promptParameter = $passwordParam.addEventListener("click", function () {
//   alert('Criteria\nThis tool will generate a password for you with the criteria you select\nYou will be selecting which criteria to include in the password\nYou will be selecting the length of the password\nYou may type lowercase, uppercase, numeric values\nYou may select special characters\nYou will be selecting the length of the password');
//   console.log($passwordParam);
//   console.log(promptParameter);
// });

// this will activate the function once the generate button is clicked
// needs to fit the specified parameters and then change $finalPassword
// $generateBtn.addEventListener("click", function () {


// });
