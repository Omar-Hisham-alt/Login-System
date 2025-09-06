let userEmailInput = document.getElementById('email');
let userPasswordInput = document.getElementById('password');

let loginButton = document.getElementById('login');
let welcomeLink = document.getElementsByClassName('welcome')

let userName;
let welcomeMsg;
let checkEmail;
let checkPassword;

let usersInfo = [];
if (localStorage.getItem('Users Information')) {
    usersInfo = JSON.parse(localStorage.getItem('Users Information'));
}

userEmailInput.addEventListener('input', function () {
    for (let i = 0; i < usersInfo.length; i++) {
        if (userEmailInput.value == usersInfo[i].userEmail) {
            userName = usersInfo[i].userName;
            checkEmail = true;
            break;
        }
        checkEmail = false;
    }
})

userPasswordInput.addEventListener('input', function () {
    for (let i = 0; i < usersInfo.length; i++) {
        if (userPasswordInput.value == usersInfo[i].userPassword) {
            checkPassword = true;
            break;
        }
        checkPassword = false;
    }
})

function login() {
    loginButton.addEventListener('click', function () {
        if (userEmailInput.value && userPasswordInput.value) {
            if (checkEmail && checkPassword) {
                document.getElementById('incorrectMsg').classList.add('d-none');
                document.getElementById('requiredMsg').classList.add('d-none');
                welcomeMsg = userName;
                sessionStorage.setItem('User Name', welcomeMsg);
                window.location.href = '../html/welcome.html';
            }
            else {
                document.getElementById('incorrectMsg').classList.remove('d-none');
                document.getElementById('requiredMsg').classList.add('d-none');
            }
        }
        else {
            document.getElementById('incorrectMsg').classList.add('d-none');
            document.getElementById('requiredMsg').classList.remove('d-none');
        }
    })
}

login();