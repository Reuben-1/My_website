//document.addEventListener('DOMContentLoaded',function(){
  //  document.getElementsByClassName("project-text").style.opacity ='1';
//})


var menuIcon = document.querySelector('.menu-icon');

// Add a click event listener to the menu icon
menuIcon.addEventListener('click', toggleMenu);

// Define the toggleMenu function
function toggleMenu() {
    var nav = document.querySelector('.nav-bar');
    nav.classList.toggle('show');
}