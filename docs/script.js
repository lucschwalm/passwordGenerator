// Assignment code here
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

function generatePassword() {
  var passwordOptions = createPasswordOptions();
  var password = "";
  var trueOptions = [];

  if(passwordOptions[1] == true) {
    trueOptions.push("lowercase");
  }
  if(passwordOptions[2] == true) {
    trueOptions.push("uppercase");
  }
  if(passwordOptions[3] == true) {
    trueOptions.push("numbers");
  }
  if(passwordOptions[4] == true) {
    trueOptions.push("special");
  }

  console.log(passwordOptions);
  console.log(trueOptions);
  for(i=0; i<passwordOptions[0]; i++) {
    var charType = Math.floor(Math.random() * trueOptions.length);
    var character = getCharacters[trueOptions[charType]]();
    password = password + character;
  }
  console.log(password);
  return password;
}

function createPasswordOptions() {
  var passwordLength = prompt("How long would you like the password to be? (8-128 characters)"); 

  if(passwordLength < 8 || passwordLength > 128) {
    alert("Please try again, password length must be between 8 and 128 characters.");
    return null;
  }

  var includeLowercase = confirm("Use lowercase characters? (Press ok for yes and cancel for no.)");
  var includeUppercase = confirm("Use uppercase characters?");
  var includeNumbers = confirm("Include numbers?");
  var includeSpecial = confirm("Include special characters?");

  if(!(includeLowercase || includeUppercase || includeNumbers || includeSpecial)) {
    alert("Please try again, at least one character type must be selected.");
    return null;
  }

  return [passwordLength, includeLowercase, includeUppercase, includeNumbers, includeSpecial];
}

var getCharacters = {
  lowercase: function getLowercase() {
    const lowercaseChar = "abcdefghijklmnopqrstuvwxyz"
    return lowercaseChar.charAt(Math.floor(Math.random() * lowercaseChar.length));
  },

  uppercase: function getUppercase() {
    const UppercaseChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    return UppercaseChar.charAt(Math.floor(Math.random() * UppercaseChar.length));
  },

  numbers: function getNum() {
    return Math.floor(Math.random() * 10)
  },

  special: function getSpecial() {
    const specialChar = " ~`!@#$%^&*()-_+={}[]|:;<>,.?"
    return specialChar.charAt(Math.floor(Math.random() * specialChar.length));
  },
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);