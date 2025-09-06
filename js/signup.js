let userNameInput = document.getElementById('name');
let userEmailInput = document.getElementById('email');
let userPasswordInput = document.getElementById('password');

let signupButton = document.getElementById('sign-up');

let usersInfo = [];
if (localStorage.getItem('Users Information')) {
    usersInfo = JSON.parse(localStorage.getItem('Users Information'));
}

let check = true;

function signUp() {
    signupButton.addEventListener('click', function () {
        if (userNameInput.value && userEmailInput.value && userPasswordInput.value) {
            for (let i = 0; i < usersInfo.length; i++) {
                if (userEmailInput.value == usersInfo[i].userEmail) {
                    document.getElementById('successMsg').classList.add('d-none');
                    document.getElementById('requiredMsg').classList.add('d-none');
                    document.getElementById('emailMsg').classList.remove('d-none');
                    check = false;
                }
                else {
                    check = true;
                    continue;
                }
            }

            if (check) {
                let userInfo = {
                    userName: userNameInput.value,
                    userEmail: userEmailInput.value,
                    userPassword: userPasswordInput.value
                }
                
                usersInfo.push(userInfo);
                localStorage.setItem('Users Information', JSON.stringify(usersInfo));

                document.getElementById('requiredMsg').classList.add('d-none');
                document.getElementById('emailMsg').classList.add('d-none');
                document.getElementById('successMsg').classList.remove('d-none');
                setTimeout(() => {
                    window.location.href = '../index.html';
                }, 500);
            }
        }
        else {
            document.getElementById('successMsg').classList.add('d-none');
            document.getElementById('emailMsg').classList.add('d-none');
            document.getElementById('requiredMsg').classList.remove('d-none');
        }
    })
}

signUp();