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

  //With this code I'm sure that the user select a lenght between 8 and 128
  while (checkLength) {    
    var length = prompt("Length between 8 and 128 ");
    if (length >= 8 && length <= 128 ) {
      checkLength = false
    }
  }
  /*Added this loop that will help that the user must select at least one option criteria for the password*/
  var checkConditions = true;
  while(checkConditions){
    var hasLower = true;
    var hasUpper = true;
    var hasSpecial = true;
    var hasNumber = true;
    if (!confirm("Lower case!")) {
        hasLower = false;
    }
    if (!confirm("Upper case!")) {
        hasUpper = false;
    }
    if (!confirm("Special Character!")) {
        hasSpecial = false;
    }
    if (!confirm("Numbers!")) {
        hasNumber = false;
    }
    if (hasLower || hasUpper || hasSpecial || hasNumber) {
      checkConditions = false;
      // I set this console to check if the logic is correct 
      console.log("enter if",hasLower , hasUpper , hasSpecial , hasNumber)
    }
    // I use this console to check the values
    console.log("check values:",hasLower , hasUpper , hasSpecial , hasNumber)
  }

  return password;
}

