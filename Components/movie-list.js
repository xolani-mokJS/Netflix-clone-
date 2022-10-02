import {
    LitElement,
    html,
    css,
} from 'https://cdn.jsdelivr.net/gh/lit/dist@2/all/lit-all.min.js';

class MoviesList extends LitElement {
    constructor() {
        super()
    }

    static get properties() {
        return {
            label: { type: String },
            pagination: { type: Number },
            movies: { state: true, type: Array }
        }
    }

    static styles = css`
      
        .movie-list{
            margin-left: 40px;
          }
          
          
          .cat-title{
              margin: 15px;
          }
          
          .category{
              display: flex;
              flex-direction: row;
          }
    `

    next() {
        const totalPages = Math.ceil(this.movies.length / 7) - 1
        const width = 400 * 7

        const newPagination = this.pagination + 1
        this.pagination = newPagination >= totalPages ? 0 : newPagination

        const list = this.querySelector('ul')
        list.style.transform = `translateX(-${newPagination * width}px)`
    }

    render() {    
        return html`
        <div class="movie-lit">
            <h2 class="cat-title">${this.label}</h2>

            <ul class="category newMovies">
                ${this.movies.map(({ name, image }) => {
                    return html`
                        <movie-preview image="${image}" label="${name}"></movie-preview>`
                })}
            </ul>

            <button @click="${this.next}">NEXT</button>
        </div>
        `
    }
}

customElements.define('movies-list', MoviesList)