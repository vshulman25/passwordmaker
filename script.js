// Assignment Code for all arrays - numbers, special character, upper and lower
var numbersArray = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];                     //0   // 1     //2    //3
var lowerCaseArray = ["a", "b", "c", "d"]
/// add lowercase and uppercase array




function randomize(chosenArray) {
  var indexNumber = Math.floor(Math.random() * chosenArray.length); //grabs a random index number from chosen array

  var indexValue = chosenArray[indexNumber];//gives use a value based on randomIndex number

  return indexValue;//returns indexValue


}


// all user choices are below 

function userChoices() {
  var passwordLength = parseInt(prompt("how long would like your password to be?"));//parseInt changes string to integer
  if (passwordLength < 8) {
    alert("Must be greater than 8")
    return;
  }
  if (passwordLength > 128) { //takes in user choice of length
    alert("Must be less than 128")
    return;
  }
  //returns boolean value and stores it in variable
  var hasNumbers = confirm("Would you like to include numbers?");
  var hasSpecialCharacters = confirm("Would you like to include special characters?");
  /// create for upper and lowercase 

  var userOptions = { //takes in prompts/confirms and makes them usable values
    passwordLength: passwordLength,
    hasNumbers: hasNumbers,
    hasSpecialCharacters: hasSpecialCharacters,
    // create for upper and lower

  }

  console.log(userOptions)
  return userOptions;


}


// actually generates password w/ input choices 

function generatePassword() {
  var passwordChoices = userChoices();
  var newPassword = [];
  var possibleOptions = [];

  if (passwordChoices.hasNumbers) {
    possibleOptions = possibleOptions.concat(numbersArray);
    possibleOptions.push(randomize(numbersArray));
  }
  if (passwordChoices.hasSpecialCharacters) {
    possibleOptions = possibleOptions.concat(specialCharacters);
    possibleOptions.push(randomize(specialCharacters));
  }
  for (var i = 0; i < passwordChoices.passwordLength; i++) {
    var openCharacters = randomize(possibleOptions);
    newPassword.push(openCharacters);
  }
  console.log(newPassword)
  var assemble = newPassword.join("")
  return assemble;
}



// button - should not have to change

var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword(); 
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
