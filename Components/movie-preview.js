import {
    LitElement,
    html,
    css,
    styleMap,
    ref,
    createRef,
} from 'https://cdn.jsdelivr.net/gh/lit/dist@2/all/lit-all.min.js';

/**
 * @element movie-preview - Show a single movie as a preview card
 * @prop {string | null} image - The preview image to show for the movie
 * @attr image
 * 
 * @prop {string | null} label - The name of the movie to preview
 * @attr label
 * 
 * @prop {boolean} wishlisted - Whether a user has added the movie to their wishlist
 * @attr wishlisted
 */
class MoviePreview extends LitElement {
    static get properties() {
        return {
            label: { type: String },
            image: { type: String },
            wishlisted: { type: Boolean },
        }
    }

    static styles = css`
        
        .show-cover{
            /* background-image: url(/Images/queens-gambit.png); */
            background-size: cover;
            width: 240px;
            height: 140px;
            background-position: center;
            cursor: pointer;
            position: relative;
            border-radius: 4px;
        }
        .hidden-items{
            display: none;
            position: absolute;
            top: -50%;
            left: -20%;
            width: 150%;
            height: 100px;
            background: #141414;
            color: white;
            border-radius: 4px;
        }
        
        .show-cover:hover{
            z-index: 10;
        }
        
        .show-cover:hover > .hidden-items {
            display: block;
        }
        
        .movie-name{
           font-size: 16px;
            padding-left: 15px;
            padding-top: 15px;
        }
        
        .image{
            width: 100%;
            border-radius: 4px;
        }
        
        .buttons-hidden{
            margin-left: 10px;
            color: var(--bg-color);
            border: none;
            background-color: #ffffff;
            padding: 8px 12px;
            font-size: 14px;
            border-radius: 4px;
            cursor: pointer;
            margin-bottom: 10px;
        }
        
        .buttons-hidden:hover{
            opacity: 0.9;
        }
        
    `

    render() {
        const backgroundStyle = {
            backgroundImage: `url('${this.image}')`,
        }

        return html`
        <div class="movie-preview">
            <div class="resting show-cover" style="${styleMap(backgroundStyle)}">
                <div class="preview hidden-items">
                    <img class="image" src="${this.image}" alt="">
                    <p class="movie-name">${this.label}</p>
                    <div class="hidden-buttons">
                        <button class="buttons-hidden">play</button>
                        <button class="buttons-hidden">Add to list</button>
                    </div> 
                </div>
            </div>
        </div>
        `
    }
}

customElements.define('movie-preview', MoviePreview)

