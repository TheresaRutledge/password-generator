// Assignment code here

/generates password based on user prompt inputs
const generatePassword = () => {
  //get password length btwn 8-128 characters
  //if char type selected - what char types should be included (min one selected): lowercase, uppercase,numeric,special chars
  //if lowercase selected
  //if uppercase selected
  // if numeric selected
  // if special chars selected
  //return password based on selections

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
