// Get the modal
var modal_In = document.getElementById("SignIn");

// Get the button that opens the modal
var sign_in = document.getElementById("sign-in");

// Get the <span> element that closes the modal
var span0 = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal 
sign_in.onclick = function() {
  modal_In.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span0.onclick = function() {
  modal_In.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == SignIn) {
    modal_In.style.display = "none";
  }
}





// Get the modal
var modal_Up = document.getElementById("SignUp");

// Get the button that opens the modal
var sign_up = document.getElementById("sign-up");

// Get the <span> element that closes the modal
var span1 = document.getElementsByClassName("close")[1];

// When the user clicks on the button, open the modal 
sign_up.onclick = function() {
  modal_Up.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span1.onclick = function() {
  modal_Up.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal_Up) {
    modal_Up.style.display = "none";
  }
}