// Assignment code here
var generatePassword = function () {
  var password = "";

  // Choose password character length
  const passLength = passwordLength();

  // Choose character types in password
  const charChoice = characterChoice();
  console.log(charChoice.length);


  // generate password based on selections
  for (var i = 1; i <= passLength; i++) {
    password = password + charChoice.charAt(Math.floor(Math.random() * charChoice.length));
  }
  
  // return password
  return password;
};

// prompt for password character length
var passwordLength = function() {
  var characterLength = window.prompt("How many characters should your password be? Please enter a number between 8 and 128.");
  
  // make sure user actually typed something into the prompt
  while (characterLength === "" || characterLength === null) {
      window.alert("Please enter a number between 8 and 128.");
      return passwordLength();
  }
  
  // convert user's response into integer
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
  var charChoice = "";

  // define different character types
  const lower = "abcdefghijklmnopqrstuvwxyz";
  const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const number = "0123456789";
  const special = "!#$%&()*+,-./:;<=>?@[\]^_`{|}~";

  // character selection prompts
  const lowercaseConfirm = window.confirm("Should your password contain lowercase characters?");

  const uppercaseConfirm = window.confirm("Should your password contain uppercase characters?");

  const numericConfirm = window.confirm("Should your password contain numeric characters?");

  const specialConfirm = window.confirm("Should your password contain special characters?");

  // conditional statement to validate input and require at least one character type
  if (lowercaseConfirm === false && uppercaseConfirm === false && numericConfirm === false && specialConfirm === false) {
    window.alert("Please select at least one character type.");
    // start character select function again
    characterChoice();
  }

  if (lowercaseConfirm) {
    charChoice = charChoice + lower;
  }

  if (uppercaseConfirm) {
    charChoice = charChoice + upper;
  }

  if (numericConfirm) {
    charChoice = charChoice + number;
  }

  if (specialConfirm) {
    charChoice = charChoice + special;
  }

  return charChoice;
};
// Assignment code ends here

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
