var listOfProjects = document.getElementById("Project");
listOfProjects.onchange = function() {
  var selectedProject = this.value;
  if (selectedProject != "Unselected Project")
  {
    window.location.href = selectedProject;
  }
}

function promptBox() {
  // let password = prompt("Please enter the password: ", "*");
  //  while (password.length > 0) {
  //   if (password == "F20CMPE131")
  //   {
  //     window.location = "Transcript.html";
  //     break; // the
  //   }
  //   else
  //   {
  //     alert("Incorrect password, please try again.");
  //     password = prompt("Please enter the password: ");
  //   }
  // }
  // To open in new tab:
  // let passwordWindow = window.open("https://www.w3schools.com/jsref/met_win_open.asp", "width = 100, height = 100");
  // var counter = 0;
  // if (counter == 0)
  // {
  //   counter += 1;
  //   // To open in new window:
  //   // let passwordWindow = window.open("", "", "left = 2500, top = 100, width = 500, height = 250");
  //   let passwordHTML = "";
  //   passwordHTML += "<p>Please enter the password: </p>";
  //   passwordHTML += "<input type='password' id='pswrd' name='pswrd'><br>";
  //   passwordHTML += "<input type='button' id='attemptAccess' value='Accesse'><br>"
  //   passwordWindow.document.body.innerHTML = passwordHTML;
  //
  // }
  var passwordBox = document.getElementById("passwordPopup");
  if (passwordBox.style.display == "none")
  {
    passwordBox.style.display = "block";
  }
  else
  {
    passwordBox.style.display = "none";
  }

}

function promptPassword() {
  let passwordBar = document.getElementById("passwordPlease");
  //let enterButton = document.getElementById("passwordButton");
  let passwordForm = document.getElementById("passEntry");
  var password = "FrankButt";
  if (passwordBar.value.length > 0)
  {
    if (passwordBar.value === password)
    {
      passwordForm.target = "_blank"; // although it's known to open a new tab, it allows the form to open another webpage for some reason 
      window.location.href = "Transcript.html";
    }
    else
    {
      alert("Incorrect password, please try again.");
    }
  }
  else
  {
    alert("Password is left blank, please type in the password.");
  }
}
