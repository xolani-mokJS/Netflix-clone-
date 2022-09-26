class moviePreview extends HTMLElement {
    inner = this.attachShadow({mode: 'open'});


};

customElements.define('movie-preview',moviePreview);