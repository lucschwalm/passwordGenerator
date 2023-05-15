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

  console.log(passwordOptions);
  for(i=0; i<passwordOptions[0]; i++) {
    
  }
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

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);