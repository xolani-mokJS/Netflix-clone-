import {
    LitElement,
    html, 
    css,
} from 'https://cdn.jsdelivr.net/gh/lit/dist@2/all/lit-all.min.js';


class Component extends LitElement {
    static get properties () {
        return {
            movies: { type: Array }
        }
    }
    

    movies = []

    render() {
        return html`
            <movie-list .movies=${this.movies} label=''></movie-list>
        `
    }


    connectedCallback() {
        super.connectedCallback();

        const init = async () => {

            /** @type {{ data: import('./types').movie[] }} */
            const response = await fetch('https://project-apis.codespace.co.za/api/movies')
            const { data } = await response.json()

            this.movies = data.slice(0, 30)
        }
            
        init()
    }

}

customElements.define('netflix-app', Component)