// Hamburger Menu
const hamburger = document.querySelector(".nav__menu");
const links = document.querySelector(".nav__list");

hamburger.addEventListener("click", function () {
  links.classList.toggle("show-links");
});



// Required field validation in Contact Form
var fullname = document.getElementById('fullname');
var email = document.getElementById('email');
var message = document.getElementById('message');
var error = document.getElementById('error');
error.style.color = 'red';


function sendForm() {
  var errorMessages = [];

  if (fullname.value === null || fullname.value === '') {
    errorMessages.push('Enter your name');
  }

  if (email.value === null || email.value === '') {
    errorMessages.push('Enter your email');
  }

  if (message.value === null || message.value === '') {
    errorMessages.push('Enter your message');
  }

  error.innerHTML = errorMessages.join(', ');

  return false;
}



// Email validation in Contact Form
var mailError = document.getElementById('mailerror');
mailError.style.color = 'red';

function ValidateEmail(inputText) {

  var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  var mailMessage = [];

  if (inputText.value.match(mailformat)) {
    // pass
  } else {
    mailMessage.push("Enter a valid email adress");
    //alert("You have entered an invalid email address");
  }

  mailError.innerHTML = mailMessage;
  return false;

}



// Message after submition
const form = document.getElementById('form');
var mailSent = document.getElementById('mailsent');
mailSent.style.color = 'blue';

form.addEventListener('submit', handleSubmit);

async function handleSubmit(event) {
  
  event.preventDefault();

  const formulario = new FormData(this);

  // keys for the HTTP request
  const response = await fetch(this.action, {
    method: this.method,
    body: formulario,
    headers: {
      'Accept': 'application/json'
    }
  });

  // simple validation of form submit
  var mailSentMessage = [];
  if (response.ok) {
    this.reset();
    //alert('Thank you for your message!');
    mailSentMessage.push("Thank you for your message! I will respond you soon.");
  }

  mailSent.innerHTML = mailSentMessage;

}