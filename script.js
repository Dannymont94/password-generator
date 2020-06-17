// Assignment code start
var password = "";

var generatePassword = function () {
  // reset password to empty string each time button is pressed
  password = "";
  // Choose password character length
  var passLength = getPassLength();

  // Choose password character types
  var charChoice = getCharChoice();

  // generate random password based on selections
  for (var i = password.length; i < passLength; i++) {
    password += getRandomChar(charChoice);
  }
  
  return password;
};

// prompt for password character length
var getPassLength = function() {
  // ask user their password length
  var passLength = window.prompt("How many characters should your password be? Please enter a number between 8 and 128.");
  
  // make sure user actually typed something into the prompt
  if (passLength === "" || passLength === null) {
      window.alert("Please enter a number between 8 and 128.");
      return getPassLength();
  }
  
  // convert user's response to number data type and round down if they entered a float
  passLength = Math.floor(Number(passLength));

  // make sure user's response is a number between 8 and 128
  if (passLength > 128 || passLength < 8 || isNaN(passLength)) {
      window.alert("Please enter a number between 8 and 128.");
      return getPassLength();
  }

  return passLength;
};

// prompts for character types: lowercase, uppercase, numeric, and/or special characters
var getCharChoice = function() {
  // reset charChoice to empty string each time button is pressed
  var charChoice = "";

  // define different character types
  var lower = "abcdefghijklmnopqrstuvwxyz";
  var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var num = "0123456789";
  var special = "!#$%&()*+,-./:;<=>?@[\]^_`{|}~";

  // character selection prompts
  var lowerConfirm = window.confirm("Should your password contain lowercase characters?");
  var upperConfirm = window.confirm("Should your password contain uppercase characters?");
  var numConfirm = window.confirm("Should your password contain numeric characters?");
  var specialConfirm = window.confirm("Should your password contain special characters?");

  // check that user selected at least one character type
  if (lowerConfirm === false && upperConfirm === false && numConfirm === false && specialConfirm === false) {
    window.alert("Please select at least one character type.");
    return getCharChoice();
  }

  if (lowerConfirm) {
    // guarantee a lowercase character in the password by generating a random character and adding it to password, then add lower to charChoice
    password += getRandomChar(lower);
    charChoice += lower;
  }

  if (upperConfirm) {
    // guarantee an uppercase character in the password by generating a random character and adding it to password, then add upper to charChoice
    password += getRandomChar(upper);
    charChoice += upper;
  }

  if (numConfirm) {
    // guarantee a numeric character in the password by generating a random character and adding it to password, then add num to charChoice
    password += getRandomChar(num);
    charChoice += num;
  }
  
  if (specialConfirm) {
    // guarantee a special character in the password by generating a random character adding it to password, then add special to charChoice
    password += getRandomChar(special);
    charChoice += special;
  }

  return charChoice;
};

// generate random index from charString
var getRandomChar = function(charString) {
  return charString[Math.floor(Math.random() * charString.length)];
};
// Assignment code end



// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var finalPassword = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = finalPassword;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
