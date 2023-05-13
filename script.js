// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
var password_choices ={
lowercase: ["a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z"],

uppercase: ["A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z"],

numbers: [0,1,2,3,4,5,6,7,8,9],

special: ["!,@,#,$,%,^,&,,,*,_,-,+,="],
};

function generatePassword(){

var passwordLength = prompt ("Please specify length of password.");

if (passwordLength < 8 || passwordLength > 128) {
alert("Password must be between 8 and 128 characters.");
return"";
}

var includeLower = confirm("Use lowercase letters?");

var includeUpper = confirm("Use uppercase letters?");

var includeNumbers = confirm("Use numbers?");

var includeSpecial = confirm("Use special characters?");


if (includeLower==false && includeUpper==false && includeNumbers==false &&includeSpecial==false) {
alert("Password must contain at least one alphanumeric or symbol choice.");
return"";
}

//return password;
}

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
