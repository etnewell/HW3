// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {



  var characterPrompt =   prompt("How many characters do you want 8-124?");
  var lowerConfirm = confirm("Do you want lowercase letters?")
  var numberConfirm = confirm("Do you want numbers?");
  var specialConfirm = confirm("Do you want special characters?");
  var caseConfirm = confirm("Do you need upper case as well?");
  var charNum = parseInt(characterPrompt)

  // static String[] AlphabetWithDigits = {"0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"};
  var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  var capitalLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  var specialCharacters = ["!", "@", "#", "$", "%", "&", "?"]
  
  var password = ""

  while (password.length < charNum){

    if (lowerConfirm === true && password.length < charNum){
      password += alphabet[math.floor(math.random() * alphabet.length)]
    };

    if (numberConfirm === true && password.length < charNum){
      password += numbers[math.floor(math.random() * numbers.length)]
    };

    if (specialConfirm === true && password.length < charNum){
      password += specialCharacters[math.floor(math.random() * specialCharacters.length)]
    };

  } 
  // var password = generatePassword();
  // var passwordText = document.querySelector("#password");


  
      
  console.log(alphabet)
  console.log(numbers)
  console.log(capitalLetters)
  console.log(specialCharacters)

console.log(totalchar)

// for (var i = 0; i < (totalchar); i++) {
//   // Randomly chooses a choice from the options array. This is the Computer's guess.
//   var lowercase2 = [alphabet[Math.floor(Math.random())]];

// }
// lowercase2 = [];

//         while (i = 0, i < (totalchar), i++) {
//           // Prints a message and the current i value to the console.
//           lowercase2.push(alphabet[math.floor(Math.random() * 26)]);
//         };

//         console.log(lowercase2)

//     characterPrompt();

// numNum(numberAmt(numberConfirm()));

  // specialConfirm(){
  //   if (specialConfirm === true){
  //     specialAmt()
  //   }
  // }

  // if (numberConfirm === true){
  //   numberAmt()
  // }
  // if (caseConfirm === true){
  //   caseAmt()
  // }

  // if (specialConfirm === true){
  //   specialAmt()
  // }



// if (characterPrompt)

  passwordText.value = password;
      };


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// console.log(specAmtNum)
// console.log(caseAmtNum)
// console.log(numNum)


// ```
// GIVEN I need a new, secure password
// WHEN I click the button to generate a password
// THEN I am presented with a series of prompts for password criteria
// WHEN prompted for password criteria
// THEN I select which criteria to include in the password
// WHEN prompted for the length of the password
// THEN I choose a length of at least 8 characters and no more than 128 characters
// WHEN prompted for character types to include in the password
// THEN I choose lowercase, uppercase, numeric, and/or special characters
// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected
// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria
// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page
// ```

// parseInt

//       // Creating an array of vegetables.
//       var vegetables = ["Carrots", "Peas", "Lettuce", "Tomatoes"];

//       // Looping through each item in the array and logging a message to the console.
//       for (var i = 0; i < vegetables.length; i++) {
//         console.log("I love " + vegetables[i]);



