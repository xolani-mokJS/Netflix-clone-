import './components/movie-list.js'
import './components/movie-preview.js'
import './components/netflix-app.js'

const loginForm = document.getElementById('login-form');

loginForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const userEmail = document.getElementById('login-email');
    const userPassword = document.getElementById('login-password');

    if (userEmail.value === '' || userPassword.value === '')
        {
            document.getElementById('error').innerHTML = 'Please enter your email address and password';
        }

    else{
        document.getElementById('error').innerHTML = '';
        window.location.href = "/pages/home.html";

    }

    const userInfor = {
        userName : userEmail.value, 
        password: userPassword.value, 
    };
        

   const myUser = localStorage.setItem('userInformation', JSON.stringify(userInfor));

   console.log(myUser);

});