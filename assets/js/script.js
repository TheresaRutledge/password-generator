// Assignment code here


//function to prompt user for password length between 8-128
const getPasswordLength = () => {
  let passwordLength = prompt('Choose password length between 8 and 128 characters.');
  passwordLength = parseInt(passwordLength);
  if (!passwordLength){
    alert('Length must be a number');
    getPasswordLength();
  } else if(passwordLength<8 || passwordLength > 128){
    alert('Password must be between 8 and 128 characters.');
    getPasswordLength();
  }
}


//generates password based on user prompt inputs
const generatePassword = () => {
  //get password length
  getPasswordLength();
  //if char type selected - what char types should be included (min one selected): lowercase, uppercase,numeric,special chars
  //if lowercase selected
  //if uppercase selected
  // if numeric selected
  // if special chars selected


}


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
