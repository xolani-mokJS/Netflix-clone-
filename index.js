// import './Components/movie-list.js'
// import './Components/movie-preview.js'
// import './Components/app.js'


// const form = document.getElementById('login-form');
// const signUpForm = document.getElementById('sign-up-form');

// // form.addEventListener('submit', (f)=>{
// //     f.preventDefault();
// //     window.location.href = '/pages/login.html';
// // });
    
// // signUpForm.addEventListener('submit', (e)=>{
// //    e.preventDefault();
    
// //     const username = document.getElementById('login-email').value;
// //     const password = document.getElementById('login-password').value;

// //     const userInfo = {
// //         username: username,
// //         password: password
// //     }

// //    if(username === '' || password === ''){
// //     document.getElementById('error').innerText = 'Invalid username or password.';
// //    } else{
// //     document.getElementById('error').innerText = '';
// //     window.location.href = '/pages/Home.html';
// //    }

// //    localStorage.setItem('userInfo', JSON.stringify(userInfo));

// //    console.log(userInfo);

// // });

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'b5e3a4835fmsh4b65fae5a646b34p129305jsnafa3a82d4411',
		'X-RapidAPI-Host': 'imdb8.p.rapidapi.com'
	}
};

fetch('https://imdb8.p.rapidapi.com/auto-complete?q=game%20of%20thr', options)
	.then(response => response.json())
	.then(data => {
        const movieList = data.d;
        console.log(movieList);
        movieList.map((movie) => {
           const movieName = movie.l;
           const movieImg = movie.i.imageUrl;
           const movieYear = movie.y;

           const movieDetail = /*html*/`
                <li>
                    <div class="movie-preview">
                        <div style="background-image: url(${movieImg})" class="show-cover">
                            <div class="hidden-items">
                                <img class="image" src="${movieImg}" alt="movie-poster">
                                <p class="movie-name">${movieName} ${movieYear}</p>
                                <div class="hidden-buttons">
                                    <button class="buttons-hidden">play</button>
                                    <button class="buttons-hidden">Add to list</button>
                                </div>          
                            </div>
                        </div>
                    </div>
                </li>

           `;
            document.querySelector(".category").innerHTML += movieDetail;
            document.querySelector(".newMovies").innerHTML += movieDetail;
        })
        
    })
	.catch(err => console.error(err));
