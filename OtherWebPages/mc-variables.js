// a string variable that stores "bool "; whitespace is there to format the text
var dataType = "bool ";

// string variables
var variableName1 = "activateGlitchArt";
var variableName2 = "keepInventory";

// boolean variables
var boolValue1 = false;
var boolValue2 = true;

// gets the element id called booleans1
var paragraph1 = document.getElementById("booleans1");

// adds multiple variables in a row to form 2 defined boolean variables
paragraph1.innerHTML = dataType + variableName1 + " = " + boolValue1;
paragraph1.innerHTML += "\t\t\t\t" + dataType + variableName1 + " = " + boolValue2;

// gets the element id called booleans2
var paragraph2 = document.getElementById("booleans2");

// adds multiple variables in a row to form 2 defined boolean variables
paragraph2.innerHTML = dataType + variableName2 + " = " + boolValue1;
paragraph2.innerHTML += "\t\t\t\t" + dataType + variableName2 + " = " + boolValue2;

/*
    Unicode for whitespace: \u00A0
    \t: creates a tab(multiple whitespaces)
    
    \t is used for formatting text, horizontally 
*/