// this javascript is to toggle the display of password in profile page ONLY

const nShowButton = document.querySelector('#n-user-show-btn');
const nHideButton = document.querySelector('#n-user-hide-btn');
const rShowButton = document.querySelector('#r-user-show-btn');
const rHideButton = document.querySelector('#r-user-hide-btn');

nShowButton.addEventListener('click', () => {
    nShowButton.style = 'display: none';
    nHideButton.style = 'display: inline';
    newPassword.type = 'text';
});

nHideButton.addEventListener('click', () => {
    nShowButton.style = 'display: inline';
    nHideButton.style = 'display: none';
    newPassword.type = 'password';
});

rShowButton.addEventListener('click', () => {
    rShowButton.style = 'display: none';
    rHideButton.style = 'display: inline';
    repeatNewPassword.type = 'text';
});

rHideButton.addEventListener('click', () => {
    rShowButton.style = 'display: inline';
    rHideButton.style = 'display: none';
    repeatNewPassword.type = 'password';
});