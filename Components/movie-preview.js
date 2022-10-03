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
            muted: { state: true, type: Boolean }
        }
    }

    static styles = css` 
        .show-cover{
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
            height: 200%;
            background-color: #141414;
            color: white;
            border-radius: 4px;
        }

        .hidden-buttons{
            background-color: #141414;
            border-radius: 4px;
        }
        
        .show-cover:hover{
            z-index: 10;
        }
        
        .show-cover:hover > .hidden-items {
            display: block;
            opacity: 1;
        }

        .movie-preview{
            background: #141414;
            margin: 5px;
            display: flex;
            flex-direction: column;
            color: white;
        }
        
        .movie-name{
            padding: 10px;
            font-size: 16px;
            padding-left: 15px;
            padding-top: 15px;
        }
        
        .image{
            height: 280px;
            width: 100%;
            border-radius: 4px;
        }
        
        .buttons-hidden{
            margin-left: 10px;
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
        
        video {
            height: 220px;
            width: 100%;
            object-fit: cover;
        }
    `
    
    play() {
        this.videoRef.value.play()
    }

    pause() {
        this.videoRef.value.pause()
    }

    toggleMute() {
        this.muted = !this.muted
    }


    render() {
        const backgroundStyle = {
            backgroundImage: `url('${this.image}')`,
        }
        const inlineStyle = styleMap(backgroundStyle)

        return html`
        <div class="movie-preview">
            <div class="resting show-cover" style="${inlineStyle}" @mouseover="${this.play}"
            @mouseout="${this.pause}">
                <div class="preview hidden-items">
                    <video ${ref(this.videoRef)}
                    .muted=${this.muted} src="/Images/trailer.mp4" loop></video>
                    <span class="movie-name">${this.label}</span>
                    <div class="hidden-buttons">
                        <button class="buttons-hidden" @click="${this.toggleMute}">${this.muted ? 'Unmute' : 'Mute'}</button>
                        <button class="buttons-hidden">play</button>
                        <button class="buttons-hidden">Add to list</button>
                    </div> 
                </div>
            </div>
        </div>
        `
    }

    constructor() {
        super()
        this.muted = true
        this.videoRef = createRef()
    }
}

customElements.define('movie-preview', MoviePreview)

