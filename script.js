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

function generatePassword() {
  /*This variables will work for the criteria */
  var stringsLower = "abcdefghijklmnopqrstuvwxyz";
  var stringsUpper = stringsLower.toUpperCase();
  var numbers = '0123456789';
  var specialCharacters = '!”#$%&’()*+,-./:;<=>?@[\\]^_`{|}~';
  /*  This varaibles will help me to create a logic*/
  var password_temp = [];
  var checkLength = true;
  var selectLower = "";
  var selectUpper = "";
  var selectNumber = "";
  var selectSpecial = "";
  /* This variable will be the one that will contain the final password to present to the user */
  var password = "";

  //With this code I'm sure that the user select a lenght between 8 and 128
  while (checkLength) {    
    var length = prompt("How many characters would you like your password to contain? ");
    if (length >= 8 && length <= 128) {
      checkLength = false
    } else {
      alert("Password length must be at least 8 character and lower of 128 characters")
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
    if (!confirm("Click OK to confirm including Lowercase characters.")) {
        hasLower = false;
    }
    // Display a confirm to check if the user want to have Upper Case words on the password
    if (!confirm("Click OK to confirm including Uppercase characters.")) {
        hasUpper = false;
    }
    // Display a confirm to check if the user want to have Special Characters on the password
    if (!confirm("Click OK to confirm including Special characters.")) {
        hasSpecial = false;
    }
    // Display a confirm to check if the user want to have Numbers on the password
    if (!confirm("Click OK to confirm including Numeric characters.  º")) {
        hasNumber = false;
    }
    //I  Check if any criteria is selected , if yes it outs of this loop if not it keep asking the user to select at least one criteria
    if (hasLower || hasUpper || hasSpecial || hasNumber) {
      checkConditions = false;
    }
    else {
      alert('Please select at least one password criteria!');
    }
  }
  // I create this loop in order to get the password according to the length 
  while (password_temp.length < length) {
    // This line id to get a random value of the string of the Lower Case letters
    selectLower = stringsLower.charAt(Math.ceil(stringsLower.length * Math.random() * Math.random()));
    // This line id to get a random value of the string of the Upper Case letters
    selectUpper = stringsUpper.charAt(Math.ceil(stringsUpper.length * Math.random() * Math.random()));
    // This line id to get a random value of the string of the Numbers
    selectNumber = numbers.charAt(Math.ceil(numbers.length * Math.random() * Math.random()));
    // This line id to get a random value of the string of the Special Character
    selectSpecial = specialCharacters.charAt(Math.ceil(specialCharacters.length * Math.random()*Math.random()));

    //V erify if on the criteria the user select that need an Lower Case Letter and if does I added to an array
    if (hasLower) {
      password_temp.push(selectLower);  
    }
    // Verify if on the criteria the user select that need an Upper Case Letter and if does I added to an array
    if (hasUpper) {
      password_temp.push(selectUpper);  
    }
    // Verify if on the criteria the user select that need a Special Character  and if does I added to an array
    if (hasSpecial) {
      password_temp.push(selectSpecial); 
    }
    // Verify if on the criteria the user select that need a Number and if does I added to an array
    if (hasNumber) {
      password_temp.push(selectNumber); 
    }
      
  }
  // I do the follow here , first I use sort and a function to create random sort of the values of the array
  // the random order is using this (0.5 - Math.random()), second I conver the array into a string usign join
  password = password_temp.sort(function () { return 0.5 - Math.random() }).join('');
  // Here I make sure that the lenght is what the user set so if on the loop I added more elements I can extract those with the function substr
  // I I return the value
  return password.substr(0, length);
}

