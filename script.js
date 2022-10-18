// Assignment Code
var generateBtn = document.querySelector("#generate");

//Made seperate arrays of each character criteria
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var numbers = "0123456789";
var special = "!@,#$%&*{}[]/\\+=";

var chosenChar= [];
var password = "";

function generatePassword() {
  //Prompt for password length between 8 and 128 characters
  var length = prompt("Choose a password length between 8 and 128 characters");
  if ((length < 8)|(length >128)) {
    alert("Password length must be a number between 8 and 128 characters");
    generatePassword();
  }else if(isNaN(length)) {
    alert("You must choose a number between 8 and 128.");
  }
  
  //Prompt for each character criteria 
  var askLowerCase = confirm("Do you want lowercase letters included in your password?");
  var askUpperCase = confirm("Do you want uppercase letters included in your password?");
  var askNumbers = confirm("Do you want numbers included in your password?");
  var askSpecial = confirm("Do you want special characters included in your password?");
  
  //If user chose to, add lowercase characters to array of possible characters to be included in the password
  if(askLowerCase === true) {
    chosenChar += lowerCase;
  }
  
  //If user chose to, add uppercase characters to array of possible characters to be included in the password
  if(askUpperCase === true) {
    chosenChar += upperCase;
  }
  
  //If user chose to, add numbers to array of possible characters to be included in the password
  if(askNumbers === true) {
    chosenChar += numbers;
  }
  
  //If user chose to, add special characters to array of possible characters to be included in the password
  if(askSpecial === true) {
    chosenChar += special;
  }

  //If user did not select a character type, prompt user to pick at least 1
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
