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


//random letter generator
var getLetter = () => {
  let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
  let index = Math.floor(Math.random() * 26);
  return alphabet[index];

}
//random lowercase generator
var getLowerCase = () => {
  letter = getLetter();
  return letter.toLowerCase();
}

//random uppercase generator
var getUpperCase = () => {
  letter = getLetter();
  return letter.toUpperCase();
}

//random numeric generator
var getNumeric = () => {
  return Math.floor(Math.random() * 10);
}

//random special character generator
var getSpecialCharacter = () => {
  let specialCharacters = '~!@#$%&*'.split('');
  let index = Math.floor(Math.random() * specialCharacters.length);
  return specialCharacters[index];
};

//randomly chooses a character type from array of types chosen by user
const randomCharacterTypes = (characterArr) => {
  let index = Math.floor(Math.random(0 * characterArr.length));
  return characterArr[index];
}




//prompt user for character types selection. Must choose at least one. Returns array of character types chosen
const getCharacterTypes = () => {
  alert('Select which character types to include. Must select at least one');
  var lowercase = window.confirm('Include lowercase?');
  var uppercase = window.confirm('Include uppercase?');
  var numeric = window.confirm('Include numeric?');
  var specialCharacters = window.confirm('Include special characters?');
  if (
    !lowercase && !uppercase && !numeric && !specialCharacters
  ) {
    alert('Must select at least one character type.')
    getCharacterTypes();
  }
  var characterTypesArr = [];
  if (lowercase) {
    characterTypesArr.push('lowercase');
    console.log('lowercase criteria added');
  }
  if (uppercase) {
    characterTypesArr.push('uppercase');
    console.log('uppercase criteria added');
  }
  if (numeric) {
    characterTypesArr.push('numeric');
    console.log('numeric criteria added');
  }
  if (specialCharacters) {
    characterTypesArr.push('specialCharacter');
    console.log('special characters criteria added');
  }
  return characterTypesArr;
}


//function to prompt user for password length between 8-128
const getPasswordLength = () => {
  debugger;
  while (!passwordLength || passwordLength < 8 || passwordLength > 128) {
    var passwordLength = prompt('Choose password length between 8 and 128 characters.');
  }
  passwordLength = parseInt(passwordLength);
  console.log(`Length: ${passwordLength}`);
  return passwordLength;

}

const getCharacter = (type) => {
  switch (type) {
    case 'lowercase':
      return getLowerCase();
      break;
    case 'uppercase':
      return getUpperCase();
      break;
    case 'numeric':
      return getNumeric();
      break;
    case 'specialCharacter':
      return getSpecialCharacter();
      break;
    default:
      alert('Error - generate password loop');
  }
}

//fill out rest of password 
const getPassword = (types, length) => {
  let password = [];
  for (i = 0; i < types.length; i++) {
    password.push(getCharacter(types[i]));
  }
  let remainingLength = length - password.length;
  for (i = 0; i < remainingLength; i++) {
    password.push(getCharacter(randomCharacterTypes(types)));
  }
  return password.join('');

}


//asks user for length, character type criterias and generates password ensuring each selected character type is used at least once
const generatePassword = () => {
  let length = getPasswordLength();
  let characterTypes = getCharacterTypes();
  let password = getPassword(characterTypes, length);
  return password;

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
