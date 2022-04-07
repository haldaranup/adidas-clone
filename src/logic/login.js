
var wishlist = JSON.parse(localStorage.getItem("wishlistdb")) || []
var len = wishlist.length;
var cartlist = JSON.parse(localStorage.getItem("cartlistdb")) || []
var le = cartlist.length;


document.querySelector("#wishlistLen").textContent = len;
document.querySelector("#cartLen").textContent = le;

document.querySelector("button").addEventListener("click", signIN);
var regdUsers = JSON.parse(localStorage.getItem("userDatabase1"));

var btn = document.getElementById("yellow_container_btn");
btn.onclick = function () {
  modal.style.display = "block";
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];
span.onclick = function () {
  modal.style.display = "none";
}
var link = document.getElementById("for");
link.onclick = function () {
  forgot.style.display = "block";
}

// Get the <span> element that closes the modal
var span1 = document.getElementsByClassName("close1")[0];
span1.onclick = function () {
  forgot.style.display = "none";
}
// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
window.onclick = function (event1) {
  if (event1.target == forgot) {
    forgot.style.display = "none";
  }
}
function signIN() {
  var email = document.querySelector("#email").value;
  var password = document.querySelector("#password").value;

  if (email === "admin" && password === "admin") {
    window.location.href = "home.html";
  }
  else {
    for (var i = 0; i < regdUsers.length; i++) {
      if (regdUsers[i].emailAdd == email && regdUsers[i].pass == password) {
        console.log("registered user");
        alert("login successful");
      }
      else {
        alert("Your password is incorrect!!");
      }
    }
  }
}
document.querySelector(".hamburger").addEventListener("click", myFunction);

function myFunction() {
  document.querySelector(".hamburger").classList.toggle("change")

  document.querySelector(".hamnames").classList.toggle("category")

}