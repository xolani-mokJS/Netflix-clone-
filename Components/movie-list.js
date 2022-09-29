import {
    LitElement, 
    html, 
    css,
} from 'https://cdn.jsdelivr.net/gh/lit/dist@2/core/lit-core.min.js';

class Component extends LitElement {
    static get properties() {
        return {
            label: { type: String },
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

    render() {
        return html`
        <h2 class="cat-title"> ${this.label} </h2>
            <ul class="category">
                ${this.movies.map(({ name, image }) => {
                    return html`
                        <li>
                            <movie-preview></movie-preview>
                        </li>`
                })}
            </ul>
        `
    };     
}


customElements.define('movie-list',Component);