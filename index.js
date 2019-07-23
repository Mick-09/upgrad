var Create = document.getElementById("Create");

// Get the button that opens the modal
var post = document.getElementById("create_post");

// Get the <span> element that closes the modal
var span2 = document.getElementsByClassName("close")[2];

// When the user clicks on the button, open the modal 
post.onclick = function() {
  Create.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span2.onclick = function() {
 Create.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == Create) {
    Create.style.display = "none";
  }
}