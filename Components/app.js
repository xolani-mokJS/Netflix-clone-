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
            movies: { type: Array }
        }
    }

    movies = []

    render() {
        return html`
            <movie-list .movies=${this.movies} label='Whats new..'></movie-list>
        `
    }


    connectedCallback() {
        super.connectedCallback();

        const init = async () => {
                const response = await fetch('api\data.json')
                
            /** @type {{ data: import('./types').movie[] }} */
          
            const { data } = await response.json()

            this.movies = data.slice(0, 30)
        }
            
        init()
    }  
    
}

customElements.define('netflix-app', Component)