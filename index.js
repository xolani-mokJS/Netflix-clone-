const form = document.getElementById('login-form');
const signUpForm = document.getElementById('signUpForm');

signUpForm.addEventListener('submit', (f) => {
    f.preventDefault();
    window.location.href = '/login.html';
});

form.addEventListener('submit', function(e) { 
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
    window.location.href = '/page.html';
   }

   localStorage.setItem('userInfo', JSON.stringify(userInfo));

   console.log(userInfo);
})