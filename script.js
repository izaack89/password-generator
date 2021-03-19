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
    // Display a confirm to check if the user want to have Lower Case words on the password
    if (!confirm("Lower case!")) {
        hasLower = false;
    }
    // Display a confirm to check if the user want to have Upper Case words on the password
    if (!confirm("Upper case!")) {
        hasUpper = false;
    }
    // Display a confirm to check if the user want to have Special Characters on the password
    if (!confirm("Special Character!")) {
        hasSpecial = false;
    }
    // Display a confirm to check if the user want to have Numbers on the password
    if (!confirm("Numbers!")) {
        hasNumber = false;
    }
    //CHeck if any criteria is selected , if yes it outs of this loop if not it keep asking the user to select at least one criteria
    if (hasLower || hasUpper || hasSpecial || hasNumber) {
      checkConditions = false;
    }
    else {
      alert('Please select at least one password criteria!');
    }
  }

  return password;
}

