/* This section of javascript toggles the display of log-in or sign-up form box */
const l_form_box = document.querySelector("#l-form-box"); // Log-in form box
const s_form_box = document.querySelector("#s-form-box"); // sign-up form box

const sign_up_link = document.querySelector("#sign-up-link");  
const log_in_link = document.querySelector("#log-in-link");

// Toggle for displaying sign-up-page
sign_up_link.addEventListener('click', function() {
    l_form_box.style = "display: none;";
    s_form_box.style = "display: block;";
});

// Toggle for displaying log-in-page
log_in_link.addEventListener('click', function() {
    s_form_box.style = "display: none;";
    l_form_box.style = "display: block;";
});

/* This section of javascript toggles the display of show password or hide password */
const sShowButton = document.querySelector('#s-show-btn');
const sHideButton = document.querySelector('#s-hide-btn');
const lShowButton = document.querySelector('#l-show-btn');
const lHideButton = document.querySelector('#l-hide-btn');

let sPassword = document.querySelector('#s-password-input');
let lPassword = document.querySelector('#l-password-input');

sShowButton.addEventListener('click', function() {
    sShowButton.style = 'display: none';
    sHideButton.style = 'display: inline';
    sPassword.type = 'text';
});

sHideButton.addEventListener('click', function() {
    sShowButton.style = 'display: inline';
    sHideButton.style = 'display: none';
    sPassword.type = 'password';
});


lShowButton.addEventListener('click', function() {
    lShowButton.style = 'display: none';
    lHideButton.style = 'display: inline';
    lPassword.type = 'text';
});

lHideButton.addEventListener('click', function() {
    lShowButton.style = 'display: inline';
    lHideButton.style = 'display: none';
    lPassword.type = 'password';
});


/* Sign-up validation section */
const s_first_name = document.querySelector('#s-first-name-input'); // Gets the input element with an id of "s-first-name-input"
const s_last_name = document.querySelector('#s-last-name-input'); // Gets the input element with an id of "s-last-name-input"
const s_email = document.querySelector('#s-email-input'); // Gets the input element with an id of "s-email-input"
const s_password = document.querySelector('#s-password-input'); // Gets the input element with an id of "s-password-input"

s_first_name.addEventListener('input', validateFirstName);
s_last_name.addEventListener('input', validateLastName);
s_email.addEventListener('input', validateEmail);
s_password.addEventListener('input', validatePassword);

var feedbackFirstName = document.querySelector('#feedback-first-name'); // Gets the span element with an id of "feedback-first-name"
var feedbackLastName = document.querySelector('#feedback-last-name'); // Gets the span element with an id of "feedback-last-name"
var feedbackEmail = document.querySelector('#feedback-email'); // Gets the span element with an id of "feedback-email"
var feedbackPassword = document.querySelector('#feedback-password'); // Gets the span element with an id of "feedback-password"

// Validation for first name
function validateFirstName(e) { 
    if(s_first_name.value.trim().length > 2) {
        let message = "Looks good."
        successMessage(feedbackFirstName, message);
        s_first_name.classList.remove('is-invalid');
        s_first_name.classList.add('is-valid');
        return true;
    }
    else if(s_first_name.value === '') {
        let message = "The first name field is required."
        errorMessage(feedbackFirstName, message);
        s_first_name.classList.add('is-invalid');
        return false;
    }
    else {
        let message = "The first name must contain atleast 3 characters."
        errorMessage(feedbackFirstName, message);
        s_first_name.classList.add('is-invalid');
        return false;
    }
}

// Validation for last name
function validateLastName(e) { 
    if(s_last_name.value.trim().length > 2) {
        let message = "Looks good."
        successMessage(feedbackLastName, message);
        s_last_name.classList.remove('is-invalid');
        s_last_name.classList.add('is-valid');
        return true;
    }
    else if(s_last_name.value === '') {
        let message = "The last name field is required."
        errorMessage(feedbackLastName, message);
        s_last_name.classList.add('is-invalid');
        return false;
    }
    else {
        let message = "The last name must contain atleast 3 characters."
        errorMessage(feedbackLastName, message);
        s_last_name.classList.add('is-invalid');
        return false;
    }
}

// Validation for email
var emailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

function validateEmail(e) { 
    if(!checkUniqueEmail()) {
        let message = "This email already exists."
        errorMessage(feedbackEmail, message);
        s_email.classList.add('is-invalid');
        return false;
    }
    else if(emailFormat.test(s_email.value)) {
        let message = "Looks good."
        successMessage(feedbackEmail, message);
        s_email.classList.remove('is-invalid');
        s_email.classList.add('is-valid');
        return true;
    }
    else if(s_email.value === '') {
        let message = "The email field is required."
        errorMessage(feedbackEmail, message);
        s_email.classList.add('is-invalid');
        return false;
    }
    else {
        let message = "Please enter a valid e-mail address (e.g., user@gmail.com)."
        errorMessage(feedbackEmail, message);
        s_email.classList.add('is-invalid');
        return false;
    }
}

// Validation for password
var passwordFormat = /^[A-Za-z]\w{7,14}$/; /* To check a password between 7 to 16 characters which contain only characters, numeric digits, underscore and first character must be a letter */

function validatePassword(e) { 
    if(passwordFormat.test(s_password.value)) {
        let message = "Looks good."
        successMessage(feedbackPassword, message);
        s_password.classList.remove('is-invalid');
        s_password.classList.add('is-valid');
        return true;
    }
    else if(s_password.value === '') {
        let message = "The password field is required."
        errorMessage(feedbackPassword, message);
        s_password.classList.add('is-invalid');
        return false;
    }
    else {
        let message = "The password must be between 7 to 16 characters which contains only characters, numeric digits, underscore and first character must be a letter";
        errorMessage(feedbackPassword, message);
        s_password.classList.add('is-invalid');
        return false;
    }
}

// this two functions displays the coresponding messages with correct styles
function successMessage(aValidation, aMessage) {
    aValidation.innerText = aMessage;
    aValidation.style = "font-size: 0.8rem; color: #198754; font-family: 'Open Sans', sans-serif;"   
}

function errorMessage(aValidation, aMessage) {
    aValidation.innerText = aMessage;
    aValidation.style = "font-size: 0.8rem; color: #de3545; font-family: 'Open Sans', sans-serif;"   
}

// This function will check if the inputted email is unique or not
function checkUniqueEmail() {
    if(localStorage.getItem('allUsersEmail') != null) {
        var getAllUserEmail = [];
        getAllUserEmail = JSON.parse(localStorage.getItem('allUsersEmail'));

        for(let i=0; i<getAllUserEmail.length; i++) {
            if(s_email.value === getAllUserEmail[i]) {
                return false;
            }
        }
        return true;
    }
    else {
        return true;
    }
}

  /* this section is for the creation of the account */
  var allUsersFirstName = []; // This array will store all the users first name
  var allUsersLastName = []; // This array will store all the users last name
  var allUsersEmail = []; // This array will store all the users email 
  var allUsersPassword = []; // This array will store all the users password

// this section is for the validation when submitting the form
const sign_up_form = document.querySelector("#s-form"); // Gets the sign-up form tag element
sign_up_form.addEventListener('submit', function(e) {
    if(!validateFirstName() || !validateLastName() || !validatePassword() || !validateEmail()) {
        e.preventDefault();
        validateFirstName()
        validateLastName()
        validatePassword()
        validateEmail()
    } 

    // This will execute if all of the validations are returned true
    if(validateFirstName() && validateLastName() && validatePassword() && validateEmail()) {   
        
        allUsersFirstName.push(s_first_name.value);
        allUsersLastName.push(s_last_name.value);
        allUsersEmail.push(s_email.value);
        allUsersPassword.push(s_password.value);

        // this will add more acccounts in local storage
        if(localStorage.length > 3) {
            allUsersFirstName = JSON.parse(localStorage.getItem('allUsersFirstName'));
            allUsersLastName = JSON.parse(localStorage.getItem('allUsersLastName'));
            allUsersEmail = JSON.parse(localStorage.getItem('allUsersEmail'));
            allUsersPassword = JSON.parse(localStorage.getItem('allUsersPassword'));

            allUsersFirstName.push(s_first_name.value);
            allUsersLastName.push(s_last_name.value);
            allUsersEmail.push(s_email.value);
            allUsersPassword.push(s_password.value);

            localStorage.setItem('allUsersFirstName', JSON.stringify(allUsersFirstName));
            localStorage.setItem('allUsersLastName', JSON.stringify(allUsersLastName));
            localStorage.setItem('allUsersEmail', JSON.stringify(allUsersEmail));
            localStorage.setItem('allUsersPassword', JSON.stringify(allUsersPassword)); 
        }
        else {
            localStorage.setItem('allUsersFirstName', JSON.stringify(allUsersFirstName));
            localStorage.setItem('allUsersLastName', JSON.stringify(allUsersLastName));
            localStorage.setItem('allUsersEmail', JSON.stringify(allUsersEmail));
            localStorage.setItem('allUsersPassword', JSON.stringify(allUsersPassword)); 
        }   
    }
      
    
});


/* log-in validation section */
const log_in_form = document.querySelector("#l-form"); // Gets the sign-up form tag element
const l_email = document.querySelector('#l-email-input'); // Gets the input element with an id of "l-email-input"
const l_password = document.querySelector('#l-password-input'); // Gets the input element with an id of "l-password-input"
const feedbackUserEmail = document.querySelector('#feedback-user-email'); // Gets the input element with an id of "feedback-user-first-name"
const feedbackErrorAccount = document.querySelector('#feedback-account'); // Gets the input element with an id of "feedback-account"

var currentFirstNameUser = "";
var currentLastNameUser = "";
var currentEmailUser = "";
var currentPasswordUser = "";

// this variables will store all of the values after getting it's respective key
var getAllUsersPassword = []; 
var getAllUsersEmail = [];
var getAllUsersLastName = [];
var getAllUsersFirstName = [];

// this will store the current user after succesfully logging in
var currentUser = [];

// this will check for the format of email in email field;
l_email.addEventListener('input', function() {
    if(emailFormat.test(l_email.value)) {
        let message = "";
        successMessage(feedbackUserEmail, message);
        l_email.classList.remove('is-invalid');
        l_email.classList.add('is-valid');
    }
    else if(l_email.value === '') {
        let message = "Please enter an email."
        errorMessage(feedbackUserEmail, message);
        l_email.classList.add('is-invalid');
    }
    else {
        let message = "Please enter a valid e-mail address (e.g., user@gmail.com)."
        errorMessage(feedbackUserEmail, message);
        l_email.classList.add('is-invalid');
    }
});

// currentFirstNameUser === "" && currentLastNameUser === "" && currentEmailUser === "" && currentPasswordUser === ""
log_in_form.addEventListener('submit', function(e) {

    for(let i=0; i<4; i++) {
        if(i === 0) {
            // this will get the key item "allUsersPassword"
            getAllUsersPassword = JSON.parse(localStorage.getItem(localStorage.key(i)));
        }
        else if(i === 1) {
            // this will get the key item "allUsersEmail"
            getAllUsersEmail = JSON.parse(localStorage.getItem(localStorage.key(i)));
        }
        else if(i === 2) {
            // this will get the key item "allUsersLastName"
            getAllUsersLastName = JSON.parse(localStorage.getItem(localStorage.key(i)));
        }
        else if(i === 3) {
            // this will get the key item "allUsersFirstName"
            getAllUsersFirstName = JSON.parse(localStorage.getItem(localStorage.key(i)));
        }
    }

    // All events after logging in
    if(emailFormat.test(l_email.value)) {
        let message = "";
        successMessage(feedbackUserEmail, message);
        l_email.classList.remove('is-invalid');
        l_email.classList.add('is-valid');

        if(l_password.value === "") {
            feedbackErrorAccount.style = "display: block";
            feedbackErrorAccount.classList.add('mt-3');
            l_password.classList.remove('mb-4');
            feedbackErrorAccount.innerHTML= `
                    <i class="bi bi-exclamation-circle ms-3 me-2" style="font-size: 1.063rem; color: red;"></i>
                    <span>Please enter a password.</span>`;
        }
        else {
            if(!checkIfAccountAvailable()) {
                feedbackErrorAccount.style = "display: block";
                feedbackErrorAccount.classList.add('mt-3');
                l_password.classList.remove('mb-4');
                feedbackErrorAccount.innerHTML= `
                        <i class="bi bi-exclamation-circle ms-3 me-2" style="font-size: 1.063rem; color: red;"></i>
                        <span>A user with this email does not exist.</span>`;
                }
        }
    }
    else if(l_email.value === '') {
        let message = "Please enter an email."
        errorMessage(feedbackUserEmail, message);
        l_email.classList.add('is-invalid');
        l_password.classList.add('mb-4');
        feedbackErrorAccount.style = "display: none";
    }
    else{
        let message = "Please enter a valid e-mail address (e.g., user@gmail.com)."
        errorMessage(feedbackUserEmail, message);
        l_email.classList.add('is-invalid');
        l_password.classList.add('mb-4');
        feedbackErrorAccount.style = "display: none";
    }    
        
    // this will validate if the account is available
    if(!checkIfAccountAvailable()) {
        e.preventDefault();
    }
    else {
        // this will put the successfully logged in account in local storage 'currentUser'
        currentUser.push(currentFirstNameUser);
        currentUser.push(currentLastNameUser);
        currentUser.push(currentEmailUser);
        currentUser.push(currentPasswordUser);
        
        localStorage.setItem('currentUser', JSON.stringify(currentUser));
    }
});

// this checks if the account is available
function checkIfAccountAvailable() {
    if(getAllUsersEmail != null) {
        for(var a=0; a<getAllUsersEmail.length; a++) {
            if(l_email.value === getAllUsersEmail[a] && l_password.value === getAllUsersPassword[a]) {
                //this will be the current user if the account has been successfully logged in
                currentFirstNameUser = JSON.parse(localStorage.getItem('allUsersFirstName'))[a];
                currentLastNameUser = JSON.parse(localStorage.getItem('allUsersLastName'))[a];
                currentEmailUser = JSON.parse(localStorage.getItem('allUsersEmail'))[a];
                currentPasswordUser = JSON.parse(localStorage.getItem('allUsersPassword'))[a];
                return true;
            } 
        }
    
        return false;
    }
}




