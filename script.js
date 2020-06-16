// Assignment code here
var generatePassword = function () {
  // Enter character length
  var passLength = passwordLength();

  // switch to generate password based on choices from prompts
  var charChoice = characterChoice();

  // return password based on selections
  for (i = 1; 1 <= passLength; i++) {

  }
  
  // return password
  return password;
}



// prompt for password character length
var passwordLength = function() {
  var characterLength = window.prompt("How many characters should your password be? Please enter a number between 8 and 128.");
  // make sure charracterLength is a number between 8 and 128
  while (characterLength === "" || characterLength === null) {
      window.alert("Please enter a number between 8 and 128.");
      return passwordLength();
  }
  // make user's response into integer
  characterLength = parseInt(characterLength);

  // make sure user's response is a number between 8 and 128
  if (characterLength > 128 || characterLength < 8 || isNaN(characterLength)) {
      window.alert("Please enter a number between 8 and 128.")
      return passwordLength();
  }
  // return validated response
  return characterLength;
};



// prompts for character types: lowercase, uppercase, numeric, and/or special characters
var characterChoice = function() {
  var lowercaseConfirm = window.confirm("Should your password contain lowercase characters?");

  var uppercaseConfirm = window.confirm("Should your password contain uppercase characters?");

  var numericConfirm = window.confirm("Should your password contain numeric characters?");

  var specialConfirm = window.confirm("Should your password contain special characters?");

  // conditional statement to validate input and require at least one character type
  if (lowercaseConfirm === false && uppercaseConfirm === false && numericConfirm === false && specialConfirm === false) {
    window.alert("Please select at least one character type.");
    // start character select function again
  }
};









// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
