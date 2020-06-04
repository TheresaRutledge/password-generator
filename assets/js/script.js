//Generate a random password based on user inputs for length and character criteria:cases, numeric, special characters

//random letter generator
var getLetter = () => {
  let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
  let index = Math.floor(Math.random() * 26);
  return alphabet[index];
}

//lowercase generator
var getLowerCase = () => {
  letter = getLetter();
  return letter.toLowerCase();
}

//uppercase generator
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
}

//randomly chooses a character type from array of types chosen by user
const randomCharacterTypes = (characterArr) => {
  debugger;
  let index = Math.floor(Math.random() * characterArr.length);
  console.log(`random type: ${characterArr[index]}`);
  return characterArr[index];
}

//prompt user for character types selection. Must choose at least one. Returns array of character types chosen
const getCharacterTypes = () => {
  alert('Select which character types to include. Must select at least one');
  while (!lowercase && !uppercase && !numeric && !specialCharacters) {
    var lowercase = window.confirm('Include lowercase?');
    var uppercase = window.confirm('Include uppercase?');
    var numeric = window.confirm('Include numeric?');
    var specialCharacters = window.confirm('Include special characters?');
    if (!lowercase && !uppercase && !numeric && !specialCharacters) {
      alert('must select at least one');
    }
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
  while (!passwordLength || passwordLength < 8 || passwordLength > 128) {
    var passwordLength = prompt('Choose password length between 8 and 128 characters.');
    if (!passwordLength) {
      alert('Must enter valid length');
    }
    if (passwordLength < 8 || passwordLength > 128) {
      alert('length must be between 8 and 128');
    }
  }
  passwordLength = parseInt(passwordLength);
  console.log(`Length: ${passwordLength}`);
  return passwordLength;
}

//returns an individual character based on the type passed in
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

//creates array for password making sure at least one of each type is represented. returns array joined as a string
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

//asks user for length and character type criterias then returns password string
const generatePassword = () => {
  let length = getPasswordLength();
  let characterTypes = getCharacterTypes();
  let password = getPassword(characterTypes, length);
  return password;
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
