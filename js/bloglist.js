
var en=0;


do{
  var modal1 = document.getElementById("delete");

  // Get the button that opens the modal
  var btn1 = document.getElementsByTagName("i")[en];
  
  // Get the <span> element that closes the modal
  var span = document.getElementsByClassName("clos")[0];
  
  // When the user clicks on the button, open the modal 
  btn1.onclick = function() {
    modal1.style.display = "block";
  }
  
  // When the user clicks on <span> (x), close the modal
  span.onclick = function() {
    modal1.style.display = "none";
  }
  
  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
    if (event.target == modal1) {
      modal1.style.display = "none";
    }
  }
en++;

}while(en<5);


