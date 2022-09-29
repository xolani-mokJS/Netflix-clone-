// import components
import './Components/movie-list.js';
import './Components/movie-preview.js';
import './Components/app.js';

const form = document.getElementById('login-form');
const signUpForm = document.getElementById('sign-up-form');

form.addEventListener('submit', (f)=>{
    f.preventDefault();
    window.location.href = '/pages/login.html';
});
    
signUpForm.addEventListener('submit', (e)=>{
   e.preventDefault();
    
    const username = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;

    const userInfo = {
        username: username,
        password: password
    }

   if(username === '' || password === ''){
    document.getElementById('error').innerText = 'Invalid username or password.';
   } else{
    document.getElementById('error').innerText = '';
    window.location.href = '/pages/Home.html';
   }

   localStorage.setItem('userInfo', JSON.stringify(userInfo));

   console.log(userInfo);

});
