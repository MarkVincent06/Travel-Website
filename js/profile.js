// getting the a key from local storage
var getCurrentUserFromStorage = JSON.parse(localStorage.getItem('currentUser'));
var getAllUsersFirstName = JSON.parse(localStorage.getItem('allUsersFirstName'));
var getAllUsersLastName = JSON.parse(localStorage.getItem('allUsersLastName'));
var getAllUsersEmail = JSON.parse(localStorage.getItem('allUsersEmail'));
var getAllUsersPassword = JSON.parse(localStorage.getItem('allUsersPassword'));

// all input elements
const userFirstName = document.querySelector('#user-first-name'); // gets the input element of id "user-first-name"
const userLastName = document.querySelector('#user-last-name'); // gets the input element of id "user-last-name"
const userEmail = document.querySelector('#user-email'); // gets the input element of id "user-email"
const oldUserPassword = document.querySelector('#user-password'); // gets the input element of id "user-password"
const newPassword = document.querySelector('#new-password') // gets the input element of id "new-password"
const repeatNewPassword = document.querySelector('#repeat-new-password') // gets the input element of id "repeat-new-password"
const confirmPassword = document.querySelector('#confirm-password') // gets the input element of id "confirm-password"

// all edit buttons
const editButton = document.querySelectorAll('.edit-btn');

// all undo buttons
const undoFirstNameButton = document.querySelector('#undo-first-name-button');
const undoLastNameButton = document.querySelector('#undo-last-name-button');
const undoEmailButton = document.querySelector('#undo-email-button');
const deleteBtn = document.querySelector('#delete-btn');
const deleteAccountButton = document.querySelector('#delete-account');
const cancelAccountBtn = document.querySelector('#cancel-account');

userFirstName.value = getCurrentUserFromStorage[0];
userLastName.value = getCurrentUserFromStorage[1];
userEmail.value = getCurrentUserFromStorage[2];
oldUserPassword.value = getCurrentUserFromStorage[3];

// all feedback-containers
const feedbackUserFirstName = document.querySelector('#feedback-user-first-name');
const feedbackUserLastName = document.querySelector('#feedback-user-last-name');
const feedbackUserEmail = document.querySelector('#feedback-user-email');
const feedbackNewPassword = document.querySelector('#feedback-new-password');
const feedbackRepeatNewPassword = document.querySelector('#feedback-repeat-new-password');

// this is for toggling the display of new and repeat password
const displayNewPassword = document.querySelector('#display-new-password');

// this is for replacing the values in local storage "allUsersFirstName", "allUsersLastName", "allUsersEmial", and "allUsersPassword"
var replaceFirstNameValue = userFirstName.value;
var replaceLastNameValue = userLastName.value;
var replaceEmailValue = userEmail.value;
var replaceOldPasswordValue = oldUserPassword.value;

// this is for the trigger of feedback when entering a value in an input field
userFirstName.addEventListener('input', checkFirstAndLastName);
userLastName.addEventListener('input', checkFirstAndLastName);
userEmail.addEventListener('input', validateEmail);
newPassword.addEventListener('input', checkPassword);
repeatNewPassword.addEventListener('input', checkPassword);

// PROFILE
// this is a button for the first name and last name
editButton[0].addEventListener('click', function() {
    if(this.innerText === "Change profile") {
        this.innerText = "Save changes";
        userFirstName.disabled = false;
        userLastName.disabled = false;
        userFirstName.focus();
    }   
    else{
        this.innerText = "Change profile";
        userFirstName.disabled = true;
        userLastName.disabled = true;

        // overwrting first name
        if(userFirstName.value != getCurrentUserFromStorage[0]) {
            getCurrentUserFromStorage.splice(0, 1, userFirstName.value);
            localStorage.setItem('currentUser', JSON.stringify(getCurrentUserFromStorage));

            for(let i=0; i<getAllUsersFirstName.length; i++) {
               if(replaceFirstNameValue === getAllUsersFirstName[i]) {
                    getAllUsersFirstName[i] = userFirstName.value;
                    getAllUsersFirstName.splice(i, 1, getAllUsersFirstName[i]);
                    localStorage.setItem('allUsersFirstName', JSON.stringify(getAllUsersFirstName));
                    break;
               }
            }
        }

        // overwriting last name
        if(userLastName.value != getCurrentUserFromStorage[1]) {
            getCurrentUserFromStorage.splice(1, 1, userLastName.value);
            localStorage.setItem('currentUser', JSON.stringify(getCurrentUserFromStorage));

            for(let i=0; i<getAllUsersLastName.length; i++) {
               if(replaceLastNameValue === getAllUsersLastName[i]) {
                    getAllUsersLastName[i] = userLastName.value;
                    getAllUsersLastName.splice(i, 1, getAllUsersLastName[i]);
                    localStorage.setItem('allUsersLastName', JSON.stringify(getAllUsersLastName));
                    break;
               }
            }
        }
        
        if(replaceFirstNameValue != getCurrentUserFromStorage[0] || replaceLastNameValue != getCurrentUserFromStorage[1]) {
            location.reload();
        } 
    }
});

//this will check if the validation of first name and last name has no errors
function checkFirstAndLastName(e) {
    validateFirstName();
    validateLastName();

    if(!validateFirstName() || !validateLastName()) {
        editButton[0].setAttribute('disabled', '');
        editButton[0].classList.add('noHover');
        undoFirstNameButton.disabled = false;
        return false;
    }

    if(validateFirstName() && validateLastName()) {
        editButton[0].disabled = false;
        editButton[0].classList.remove('noHover');
        undoFirstNameButton.disabled = false;
        return true;
    }
}

// this undo first name and last name button will revert back the original email value
undoFirstNameButton.addEventListener('click', function() {
    this.disabled = true;
    userFirstName.value = replaceFirstNameValue;
    validateFirstName();

    if(validateFirstName() && validateLastName()) {
        editButton[0].disabled = false;
        editButton[0].classList.remove('noHover');
    }
});

undoLastNameButton.addEventListener('click', function() {
    this.disabled = true;
    userLastName.value = replaceLastNameValue;
    validateLastName();

    if(validateFirstName() && validateLastName()) {
        editButton[0].disabled = false;
        editButton[0].classList.remove('noHover');
    }
});


// EMAIL
// this is a button for the email
editButton[1].addEventListener('click', function() {
    if(this.innerText === "Change email") {
        this.innerText = "Save changes";
        userEmail.disabled = false;
        userEmail.focus();
    }
    else{
        this.innerText = "Change email";
        userEmail.disabled = true;

        // overwrting first name
        if(userEmail.value != getCurrentUserFromStorage[2]) {
            getCurrentUserFromStorage.splice(2, 1, userEmail.value);
            localStorage.setItem('currentUser', JSON.stringify(getCurrentUserFromStorage));

            for(let i=0; i<getAllUsersEmail.length; i++) {
               if(replaceEmailValue === getAllUsersEmail[i]) {
                    getAllUsersEmail[i] = userEmail.value;
                    getAllUsersEmail.splice(i, 1, getAllUsersEmail[i]);
                    localStorage.setItem('allUsersEmail', JSON.stringify(getAllUsersEmail));
                    break;
               }
            }
        }

        if(replaceEmailValue != getCurrentUserFromStorage[2]) {
            location.reload();
        } 
    }
});

// this undo email button will revert back the original email value
undoEmailButton.addEventListener('click', function() {
    this.disabled = true;
    userEmail.value = replaceEmailValue;
    validateEmail();
});

// Password
// this is a button for the password
editButton[2].addEventListener('click', function() {
    if(this.innerText === "Change password") {
        this.innerText = "Save changes";
        displayNewPassword.style.display = 'block';
        newPassword.focus();
        this.disabled = true;
        this.classList.add('noHover');
    }
    else{
        this.innerText = "Change password";
        displayNewPassword.style.display = 'none';

        // Overwriting old password
        if(newPassword.value != getCurrentUserFromStorage[3]) {
            getCurrentUserFromStorage.splice(3, 1, newPassword.value);
            localStorage.setItem('currentUser', JSON.stringify(getCurrentUserFromStorage));

            for(let i=0; i<getAllUsersPassword.length; i++) {
               if(replaceOldPasswordValue === getAllUsersPassword[i]) {
                    getAllUsersPassword[i] = newPassword.value;
                    getAllUsersPassword.splice(i, 1, getAllUsersPassword[i]);
                    localStorage.setItem('allUsersPassword', JSON.stringify(getAllUsersPassword));
                    break;
               }
            }
        }

        if(replaceOldPasswordValue != getCurrentUserFromStorage[3]) {
            location.reload();
        } 
    }
});

//this will check if the validation of password has no errors
function checkPassword() {
    validatePassword();

    if(validatePassword() && checkIfSameNewPassword()) {
        editButton[2].disabled = false;
        editButton[2].classList.remove('noHover');
    }

    if(!validatePassword() || !checkIfSameNewPassword()) {
        editButton[2].setAttribute('disabled', '');
        editButton[2].classList.add('noHover');
    }
}

// REMOVE ACCOUNT
deleteBtn.addEventListener('click', () => {
    confirmPassword.addEventListener('input', () => {
        if(confirmPassword.value != oldUserPassword.value) {
            deleteAccountButton.setAttribute('disabled', '');
            deleteAccountButton.classList.add('noHover');
            
        }
        else {
            deleteAccountButton.disabled = false;
            deleteAccountButton.classList.remove('noHover');
        }
    });
        
});

deleteAccountButton.addEventListener('click', () => {
    // Changing allUsersFirstName in local storage
    for(let i=0; i<getAllUsersFirstName.length; i++) {
        if(userFirstName.value === getAllUsersFirstName[i]) {
            getAllUsersFirstName.splice(i, 1);
            localStorage.setItem('allUsersFirstName', JSON.stringify(getAllUsersFirstName))
        }
    }

    // Changing allUsersLastName in local storage
    for(let i=0; i<getAllUsersLastName.length; i++) {
        if(userLastName.value === getAllUsersLastName[i]) {
            getAllUsersLastName.splice(i, 1);
            localStorage.setItem('allUsersLastName', JSON.stringify(getAllUsersLastName))
        }
    }

    // Changing allUsersEmail in local storage
    for(let i=0; i<getAllUsersEmail.length; i++) {
        if(userEmail.value === getAllUsersEmail[i]) {
            getAllUsersEmail.splice(i, 1);
            localStorage.setItem('allUsersEmail', JSON.stringify(getAllUsersEmail))
        }
    }

    // Changing allUsersPassword in local storage
    for(let i=0; i<getAllUsersPassword.length; i++) {
        if(oldUserPassword.value === getAllUsersPassword[i]) {
            getAllUsersPassword.splice(i, 1);
            localStorage.setItem('allUsersPassword', JSON.stringify(getAllUsersPassword))
        }
    }

    localStorage.removeItem('currentUser'); // Removing current user
    location.href = "../index.html"; // Redirecting to your homepage
})

cancelAccountBtn.addEventListener('click', () => {
    confirmPassword.value = '';
    deleteAccountButton.setAttribute('disabled', '');
    deleteAccountButton.classList.add('noHover');
});


// LOG OUT
editButton[3].addEventListener('click', () => {
    localStorage.removeItem('currentUser'); // Removing current user
    location.href = "../index.html"; // Redirecting to your homepage
});


// Validation for first name
function validateFirstName(e) { 
    if(userFirstName.value.trim().length > 2) {
        if(replaceFirstNameValue === userFirstName.value) {
            feedbackUserFirstName.innerText = "";
            userFirstName.classList.remove('is-invalid', 'is-valid');
            undoFirstNameButton.disabled = true;
            return true;
        }
        else {
            let message = "New first name looks good."
            successMessage(feedbackUserFirstName, message);
            userFirstName.classList.remove('is-invalid');
            userFirstName.classList.add('is-valid');
            undoFirstNameButton.disabled = false;
            return true;
        }
    }
    else if(userFirstName.value === '') {
        let message = "First name must not be empty."
        errorMessage(feedbackUserFirstName, message);
        userFirstName.classList.add('is-invalid');
        undoFirstNameButton.disabled = false;
        return false;
    }
    else {
        let message = "The first name must contain atleast 3 characters."
        errorMessage(feedbackUserFirstName, message);
        userFirstName.classList.add('is-invalid');
        undoFirstNameButton.disabled = false;
        return false;
    }
}

// Validation for last name
function validateLastName(e) { 
    if(userLastName.value.trim().length > 2) {
        if(replaceLastNameValue === userLastName.value) {
            feedbackUserLastName.innerText = "";
            userLastName.classList.remove('is-invalid', 'is-valid');
            undoLastNameButton.disabled = true;
            return true;
        }
        else {      
            let message = "New last name looks good."
            successMessage(feedbackUserLastName, message);
            userLastName.classList.remove('is-invalid');
            userLastName.classList.add('is-valid');
            undoLastNameButton.disabled = false;
            return true;
        }
    }
    else if(userLastName.value === '') {
        let message = "Last name must not be empty."
        errorMessage(feedbackUserLastName, message);
        userLastName.classList.add('is-invalid');
        undoLastNameButton.disabled = false;
        return false;
    }
    else {
        let message = "The last name must contain atleast 3 characters."
        errorMessage(feedbackUserLastName, message);
        userLastName.classList.add('is-invalid');
        undoLastNameButton.disabled = false;
        return false;
    }
}

// Validation for email
var emailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

function validateEmail(e) { 
    if(!checkUniqueEmail()) {
        let message = "This email already exists."
        errorMessage(feedbackUserEmail, message);
        userEmail.classList.add('is-invalid');
        editButton[1].setAttribute('disabled', '');
        editButton[1].classList.add('noHover');
        undoEmailButton.disabled = false;
        return false;
    }
    else if(emailFormat.test(userEmail.value)) {
        if(replaceEmailValue === userEmail.value) {
            feedbackUserEmail.innerText = "";
            userEmail.classList.remove('is-invalid', 'is-valid');
            editButton[1].disabled = false;
            editButton[1].classList.remove('noHover');
            undoEmailButton.disabled = true;
            return true;
        }
        else {
            let message = "New email looks good."
            successMessage(feedbackUserEmail, message);
            userEmail.classList.remove('is-invalid');
            userEmail.classList.add('is-valid');
            editButton[1].disabled = false;
            editButton[1].classList.remove('noHover');
            undoEmailButton.disabled = false;
            return true;
        }
    }
    else if(userEmail.value === '') {
        let message = "Email must not be empty."
        errorMessage(feedbackUserEmail, message);
        userEmail.classList.add('is-invalid');
        editButton[1].setAttribute('disabled', '');
        editButton[1].classList.add('noHover');
        undoEmailButton.disabled = false;
        return false;
    }
    else {
        let message = "Please enter a valid e-mail address (e.g., user@gmail.com)."
        errorMessage(feedbackUserEmail, message);
        userEmail.classList.add('is-invalid');
        editButton[1].setAttribute('disabled', '');
        editButton[1].classList.add('noHover');
        undoEmailButton.disabled = false;
        return false;
    }
}

// Validation for password
var passwordFormat = /^[A-Za-z]\w{7,14}$/; /* To check a password between 7 to 16 characters which contain only characters, numeric digits, underscore and first character must be a letter */

function validatePassword(e) {
    if(passwordFormat.test(newPassword.value)) {
        if(replaceOldPasswordValue === newPassword.value) {
            feedbackNewPassword.innerText = "";
            newPassword.classList.remove('is-invalid', 'is-valid');
            return true;
        }
        else {
            let message = "New password looks good."
            successMessage(feedbackNewPassword, message);
            newPassword.classList.remove('is-invalid');
            newPassword.classList.add('is-valid');
            return true;
        }
    }
    else if(newPassword.value === '') {
        let message = "New password must not be empty."
        errorMessage(feedbackNewPassword, message);
        newPassword.classList.add('is-invalid');
        return false;
    }
    else {
        let message = "The password must be between 7 to 16 characters which contains only characters, numeric digits, underscore and first character must be a letter";
        errorMessage(feedbackNewPassword, message);
        newPassword.classList.add('is-invalid');
        return false;
    }
}

// This function will check if the inputted email is unique or not
function checkUniqueEmail() {
    if(localStorage.getItem('allUsersEmail') != null) {
        var getAllUserEmail = [];
        getAllUserEmail = JSON.parse(localStorage.getItem('allUsersEmail'));

        if(replaceEmailValue != userEmail.value) {
            for(let i=0; i<getAllUserEmail.length; i++) {
                if(userEmail.value === getAllUserEmail[i]) {
                    return false;
                }
            }
        }
        return true;
    }
    else {
        return true;
    }
}

// this three functions displays the coresponding feedback messages with correct styles
function successMessage(aValidation, aMessage) {
    aValidation.innerText = aMessage;
    aValidation.style = "font-size: 0.8rem; color: #198754; font-family: 'Open Sans', sans-serif;"   
}

function errorMessage(aValidation, aMessage) {
    aValidation.innerText = aMessage;
    aValidation.style = "font-size: 0.8rem; color: #de3545; font-family: 'Open Sans', sans-serif;"   
}

// this checks if the repeat new password is  the same value of new password
function checkIfSameNewPassword() {
    if(newPassword.value === repeatNewPassword.value && newPassword.value.length > 0) {
        let message = "Password match!"
        successMessage(feedbackRepeatNewPassword, message);
        repeatNewPassword.classList.remove('is-invalid');
        repeatNewPassword.classList.add('is-valid');
        return true;
    }
    else if(repeatNewPassword.value === '') {
        let message = "This field is required."
        errorMessage(feedbackRepeatNewPassword, message);
        repeatNewPassword.classList.add('is-invalid');
        return false;
    }
    else {
        let message = "Password didn't match."
        errorMessage(feedbackRepeatNewPassword, message);
        repeatNewPassword.classList.add('is-invalid');
        return false;
    }
}

