 //function to randomly select a char types. Parameter is array of types available
  //function to randomly select character based on charater type
  //prompt password length btwn 8-128 characters
  //prompt what char types should be included (min one selected): lowercase, uppercase,numeric,special chars
  //take chosen char types into an array
  //create password array and fill first indexes with character types selected to ensure each has at least one representation
  //pass types array to random type generator for remainder of password charaters 
  //once type is generated, randomly assign a character within type to password array
  //once password array has reach length goal convert to string
  //return password string

  //Functions:
  
//random charater type generator

//random lowercase generator

//random uppercase generator

//random numeric generator

//random special character generator

//prompt user for character types selection. Must choose at least one


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
  return passwordLength;
}




//generates password based on user prompt inputs
const generatePassword = () => {
  //password length
let length = getPasswordLength();
}


/*DO NOT DELETE BELOW HERE*/
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
