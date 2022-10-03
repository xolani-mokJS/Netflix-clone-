import {
    LitElement,
    html,
    css,
    ref,
    createRef,
} from 'https://cdn.jsdelivr.net/gh/lit/dist@2/all/lit-all.min.js';

class MoviesList extends LitElement {

    static get properties() {
        return {
            label: { type: String },
            pagination: { type: Number },
            movies: { state: true, type: Array },
            video: { state: true }
        }
    }

    static styles = css`
      
        .movie-list{
            position:relative;
            margin-left: 40px;
        }

        button:hover {
            opacity: 0.7;
        }

        button {
            position: absolute;
            top: 50%;
            border-radius:100%;
            border:none;
            height: 40px;
            width: 40px;
            background: #141414;
            display: flex;
            align-items: center;
            cursor: pointer;
        }

        .next {
            right: 0;
        }

        .prev {
            left: 0;
            transform:rotate(180deg);
        }

        button:hover {
            opacity: 0.7;
        }


        .cat-title{
              margin: 15px;
        }
          
        .category{
              display: flex;
              flex-direction: row;
        }

        ul {
            height: 200px;
            transition: transform 600ms;
            list-style: none;
            margin: 0;
            padding: 2rem;
            display: flex;
            transform: translateX(0px);
            overflow-x: scroll;
            scroll-behavior: smooth;
            -ms-overflow-style: none;
            scrollbar-width: none; 
        }

        ul::-webkit-scrollbar { 
            display: none;
        }
    `

    next() {
        const ulWidth = this.listRef.value.clientWidth
        const currentScroll = this.listRef.value.scrollLeft
        const newScroll = currentScroll + ulWidth
        this.listRef.value.scrollLeft = newScroll
    }

    prev() {
        const ulWidth = this.listRef.value.clientWidth
        const currentScroll = this.listRef.value.scrollLeft
        const newScroll = currentScroll - ulWidth
        this.listRef.value.scrollLeft = newScroll
    }

    render() {    
        return html`
        <div class="movie-list">
            <h2 class="cat-title">${this.label}</h2>

            <ul ${ref(this.listRef)} class="category newMovies">
                ${this.movies.map(({ name, image }) => {
                    return html`
                        <movie-preview image="${image}" label="${name}"></movie-preview>`
                })}
                
            </ul>
            <button class="prev" @click="${this.prev}" aria-label="Go to previous"><img class="prev" src="/Images/backward-arrow.png"></button>
            <button class="next" @click="${this.next}" aria-label="Go to next"><img class="next" src="/Images/skip-track.png"></button>
        </div>
        `
    }

    constructor() {
        super()
        this.listRef = createRef()
        this.pagination = 0
    }

}

customElements.define('movies-list', MoviesList)