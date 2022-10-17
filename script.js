// Assignment Code
var generateBtn = document.querySelector("#generate");

var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var numbers = "0123456789";
var special = "!@,#$%&*{}[]/\\+=";
var chosenChar= [];
var password = "";

function generatePassword() {
  var length = prompt("Choose a password length between 8 and 128 characters");
  if ((length < 8)|(length >128)) {
    alert("Password length must be a number between 8 and 128 characters");
    generatePassword();
  }else if(isNaN(length)) {
    alert("You must choose a number between 8 and 128.");
  }
    
  var askLowerCase = confirm("Do you want lowercase letters included in your password?");
  var askUpperCase = confirm("Do you want uppercase letters included in your password?");
  var askNumbers = confirm("Do you want numbers included in your password?");
  var askSpecial = confirm("Do you want special characters included in your password?");
  
  if(askLowerCase === true) {
    chosenChar += lowerCase;
  }
  
  if(askUpperCase === true) {
    chosenChar += upperCase;
  }
  
  if(askNumbers === true) {
    chosenChar += numbers;
  }
  
  if(askSpecial === true) {
    chosenChar += special;
  }

  if(!askLowerCase && !askUpperCase && !askNumbers && !askSpecial) {
    alert("You must select at least one character type.")
  }

  for (var i =0; i <length; i++) {
    password += chosenChar.charAt(Math.floor(Math.random() * chosenChar.length));
  }

  return password;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
