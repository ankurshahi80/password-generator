// Assignment code here
var passwordArray = [];
var lowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
var length = function() {
  // ask the user for a password length
  var passwordLength = window.prompt("Please enter the desired password length. Password must be between 8 to 128 characters long.");
  
  // check if the user canceled the prompt or left it empty
  // if(!passwordLength) {
  //   var cancelPassword = window.confirm("Would you like to cancel password generation? Click 'Ok' to cancel, 'Cancel' to continue.");
    
  //   // if yes (true), stop password generation
  //   if (cancelPassword) {
  //     return true;
  //   }
  // }

  // check if the prompt meets the password criteria 
  if( passwordLength<8 || passwordLength > 128){
      window.alert("Please enter a number between 8 and 128");
      return length();
    }
  
  return passwordLength;
}
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// prompts the user to select the criteria
var generatePassword = function() {
  var passLen = length();
  console.log(passLen);
  var isLowerCase = window.confirm("Would you like to include lowercase characters? Click 'OK' for yes, 'Cancel' for no.");
  var isUpperCase = window.confirm("Would you like to include uppercase characters? Click 'OK' for yes, 'Cancel' for no.");
  var isNumeric = window.confirm("Would you like to include numeric characters? Click 'OK' for yes, 'Cancel' for no.");
  var isSpecialChar = window.confirm("Would you like to include special characters? Click 'OK' for yes, 'Cancel' for no.");
  for( var i=0; i< passLen; i++) {
    switch ()
    passwordArray[i]= Math.round(Math.random()*10);
  }
  console.log(passwordArray);
  return passwordArray;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
