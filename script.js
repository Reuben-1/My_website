//document.addEventListener('DOMContentLoaded',function(){
  //  document.getElementsByClassName("project-text").style.opacity ='1';
//})

const form = document.querySelector('form');
const menuIcon = document.querySelector('.menu-icon');
const Full_name = document.getElementById("name");
const email = document.getElementById("email");
const subject = document.getElementById("subject");
const message1 = document.getElementById("message");
// Add a click event listener to the menu icon
menuIcon.addEventListener('click', toggleMenu);

// Define the toggleMenu function
function toggleMenu() {
    var nav = document.querySelector('.nav-bar');
    nav.classList.toggle('show');
}

//Function to send email
function sendEmail(){
 const bodyMessage =`Name: ${Full_name.value}<br> Email: ${email.value}<br> Subject: ${subject.value}<br> Message: ${message1.value}<br>`

  Email.send({
    Host : "smtp.elasticemail.com",
    Username : "chiinzelibe@gmail.com",
    Password : "393A3CBFE0E9AF841511689AA7365B94DBCE",
    To : "chiinzelibe@gmail.com",
    From : "chiinzelibe@gmail.com",
    Subject : subject.value,
    Body : bodyMessage
  }).then(
    message => {
      if (message == "OK")
        {
          Swal.fire({
            title: "Success!",
            text: "Message sent successfully!",
            icon: "success"
          });
          
          Full_name.value ="";
          email.value ="";
          subject.value ="";
          message1.value ="";
        }
    }
  );
}

form.addEventListener("submit",(e) => {
  e.preventDefault();

  sendEmail();
});