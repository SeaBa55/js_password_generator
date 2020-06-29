// get default slider value to display as default password "length"
var complexity = document.getElementById("slider").value;
document.getElementById("length").innerHTML = "Length: " + complexity;

// function to set password length based on slider position
function slideVal(){

  // get slider value to display as password "length"
  complexity = document.getElementById("slider").value;
  document.getElementById("length").innerHTML = "Length: " + complexity;

}

// Generate random password
function genPass(){

  // Initialize/ Reset password working parameter
  let password ="";
  let genPassVals = "abcdefghijklmnopqrstuvwxyz";

  // create for loop to choose password characters - used < instead of <= to not includ the 8 element which would yeild 9 items since array starts at 0. 
  for(var i = 0; i < complexity; i++){
      password = password + genPassVals.charAt(Math.floor(Math.random() * Math.floor(genPassVals.length - 1)));        
  }

  // add password to textbox/display area
  document.getElementById("display").value = password;

}