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

  // Check the state of the criteria checkboxes
  var includeLowr = document.getElementById("lower_case").checked;
  var includeCaps = document.getElementById("caps").checked;
  var includeNumb = document.getElementById("numbers").checked;
  var includeSymb = document.getElementById("special_char").checked;

  // Initialize/ Reset password working parameter
  let genPassVals = "";

  // If user checked "Lower Case", add lowercase characters to genPassVals 
  if(includeLowr == true){
    genPassVals += "abcdefghijklmnopqrstuvwxyz";
  }
  
  // If user checked "Caps", add uppercase characters to genPassVals 
  if(includeCaps == true){
    genPassVals += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  } 
  
  // If user checked "Numbers", add number characters to genPassVals 
  if(includeNumb == true){
    genPassVals += "1234567890";
  }
  
  // If user checked "Special Characters", add special characters to genPassVals
  if(includeSymb == true){
    genPassVals += "!@#$%^&*()_+-=`~";
  }
  
  // If user makes no selection then push alert, and stop running genPass function
  if((includeLowr || includeCaps || includeNumb || includeSymb) == false){
    alert("Please select atlease one charater type");
    return;
  }

  // Initialize/ Reset password working parameter
  let password ="";

  // create for loop to choose password characters - used < instead of <= to not includ the 8 element which would yeild 9 items since array starts at 0. 
  for(var i = 0; i < complexity; i++){
    password = password + genPassVals.charAt(Math.floor(Math.random() * Math.floor(genPassVals.length - 1)));        
  }

  // add password to textbox/display area
  document.getElementById("display").value = password;

  // add password to previously generated passwords section
  document.getElementById("lastPasswords").innerHTML += password + "<br />";

}