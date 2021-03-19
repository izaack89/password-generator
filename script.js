// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// function generatePassword



function generatePassword() {
  /*This variables will work for the criteria */
  var stringsLower = "abcdefghijklmnopqrstuvwxyz";
  var stringsUpper = stringsLower.toUpperCase();
  var numbers = '0123456789';
  var specialCharacters = '!”#$%&’()*+,-./:;<=>?@[\\]^_`{|}~';
  /*  This varaibles will help me to create a logic*/
  var password_temp = [];
  var checkLength = true;
  /* This variable will be the one that will contain the final password to present to the user */
  var password = "";
  return password;
}

