import {
    LitElement,
    html,
} from 'https://cdn.jsdelivr.net/gh/lit/dist@2/all/lit-all.min.js';


class Component extends LitElement {
    constructor() {
        super()
    }

    static get properties () {
        return {
            phase: { type: String },
            movies: { type: Array }
        }
    }
    

    movies = []

    render() {
        return html`
            <movies-list .movies=${this.movies} label="Whats new"></movies-list>
            <movies-list .movies=${this.movies} label="Movies"></movies-list>
            <movies-list .movies=${this.movies} label="TV series"></movies-list>
            <movies-list .movies=${this.movies} label="Oldies but Goodies"></movies-list>
        `
    }

    connectedCallback() {
        super.connectedCallback();

        const init = async () => {
            const response = await fetch('/api/data.json')
            
            /** @type {{ data: import('./types').movie[] }} */
            const { data } = await response.json()

            this.movies = data.slice(0, 10)
            this.phase = 'resting'
        }
            
        init()
    }

}

customElements.define('netflix-app', Component)