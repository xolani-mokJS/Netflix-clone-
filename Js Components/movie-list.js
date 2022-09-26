class movieList extends HTMLElement {
    inner = this.attachShadow({mode: 'open'});


};

customElements.define('movie-list',movieList);