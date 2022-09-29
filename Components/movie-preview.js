import {
    LitElement, 
    html, 
    css,
} from 'https://cdn.jsdelivr.net/gh/lit/dist@2/core/lit-core.min.js';

class moviePreview extends LitElement {
    static get properties() {
        return {
            label: { type: String },
            image: { type: String },
            wishlisted: { type: Boolean },
        }
    }

    static styles = css`

   
    .movie-preview{
        margin: 5px;
        display: flex;
        flex-direction: column;
        color: var(--white);
    }
    .show-cover{
        background-image: url(/Images/queens-gambit.png);
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
        height: 215%;
        background: var(--bg-color);
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
       padding: 15px;
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
    }
    
    .buttons-hidden:hover{
        opacity: 0.9;
    }
    
      
    `

    render() {
        return html`
                <div class="movie-preview">
                    <div class="show-cover">
                        <div class="hidden-items">
                            <img class="image" src="/Images/queens-gambit.png" alt="">
                            <p class="movie-name"> Movie Name</p>
                            <div class="hidden-buttons">
                                <button class="buttons-hidden">play</button>
                                <button class="buttons-hidden">Add to list</button>
                            </div>
                                    
                        </div>
                    </div>
                </div>

        `
    };


};

customElements.define('movie-preview',moviePreview);