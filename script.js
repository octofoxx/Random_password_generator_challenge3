// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input

var lowercase= ("abcdefghijklmnopqrstuvwxyz");

var uppercase= ("ABCDEFGHIJKLMNOPQRSTUVWXYZ");

var numbers= (0123456789);

var special= ("!@#$%,^&*_-+=");

// Sets the initial values for the password and passwordType as blank, otherwise when password is generated causes extra text to appear
var password =("");

var passwordType =("");


function generatePassword(){


var passwordLength = prompt ("Please specify length of password.");

//This "if" statement will run if user chooses password length outside of desired parameters
if (passwordLength < 8 || passwordLength > 128) {
alert("Password must be between 8 and 128 characters.");
return"";
}

var includeLower = confirm("Use lowercase letters?");

var includeUpper = confirm("Use uppercase letters?");

var includeNumbers = confirm("Use numbers?");

var includeSpecial = confirm("Use special characters?");

// This "if" statement checks all confirms and if all return as false, alert pops to inform user they must make a selection of at least one type
if (includeLower==false && includeUpper==false && includeNumbers==false &&includeSpecial==false) {
alert("Password must contain at least one alphanumeric or symbol choice.");
return"";
}

//These "if" statements will add the values of the specified var to var passwordType
if (includeLower==true){
  passwordType+= lowercase;
}

if(includeUpper==true){
  passwordType += uppercase;
}

if(includeNumbers==true){
  passwordType += numbers;
}

if(includeSpecial==true){
  passwordType += special;
}

//The "for" loop here will add to var password randomly chosen elements based on the password length chosen earlier by user and the values they picked
for (var i=0; i < passwordLength; i++){
password += passwordType.charAt(Math.floor(Math.random() * passwordType.length));
}

//gives us our randomly generated password!
return password;
}

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
