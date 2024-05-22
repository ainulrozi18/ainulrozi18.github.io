import CONFIG from '../globals/config';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';

export default class CardItem extends HTMLElement {
  constructor() {
    super();

    this._style = document.createElement('style');
  }

  _updateStyle() {
    this._style.textContent = `    
      card-item {
        background-color: #FFDD95;
        box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
          rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
          rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
        font-family: "Nunito", sans-serif;
        text-align: left;
        padding-bottom: 20px;
        margin-bottom: 1rem;
        border-radius: 5px;
        transition: .15s all ease-in;
      }

      card-item:hover {
        transform: translateY(-5px);
      }
      
      .card-item {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        border-radius: 5px;
        max-height: 500px;
          }
          
          .card-item .card-body {
            max-width: 100%; 
            position: relative;
          }

          .card-item .card-body p.city-name {
            background-color: #3468C0;
            color: #fbfbfb;
            min-width: 140px;
            text-align: center;
            padding: .8rem 1.5rem;
            position: absolute;
            top: 15px;
            left: 0;
            font-size: 1rem;
            border-radius: 0px 5px 5px 0px;
            box-shadow: 0 3px 6px rgba(0, 0, 0, .4);
            font-weight: 600;
          }
          
          .card-item .card-body img {
            width: 100%;
            max-height: 250px;
            object-fit: cover;
            object-position: center;
            border-radius: 5px 5px 0px 0px;
          }
    
          .card-item .card-body .content-card-description {
            padding-inline: 1.7rem;
          }

          .card-item .card-body .content-card-description p.rating {
            font-weight: 700;
            font-size: 1rem;
            font-style: italic;
            color: blue;
          }

          .card-item .card-body .content-card-description h3 {
            font-weight: 700;
            font-size: 1.3rem;
            font-weight: 800;
            margin-block-start: 20px;
            margin-block-end: 5px;
          }
          
          .card-item .card-body .content-card-description h3 a.link {
            color: #333;
            text-decoration: none;
            min-width: 44px;
            min-height: 44px;
            display: inline-block;
            transition: .15s all ease-in-out;
          }
          
          .card-item .card-body .content-card-description h3 a.link:hover { 
            text-decoration: underline;
          }
          .card-item .card-body .content-card-description h3 a.link:visited {
            color: #333;
          }
          
          .card-item .card-body .content-card-description p.description {
            font-weight: normal;
            font-size: 1.025rem;
            line-height: 1.3rem;
            word-wrap: break-word;
            max-height: 130px;
            overflow-y: hidden;
          }

          .card-item .card-body .content-card-description p.description::first-letter {
            font-size: 1.2rem;
            font-style: italic;
            color: tomato;
          }
          
          @media screen and (max-width:768px) {
            .card-item .card-body p.city-name {
              padding: .6rem 1.2rem;
            }
          }

          @media screen and (max-width:576px) {
            .card-item .card-body .content-card-description p.rating {
              font-size: .9rem;
            }
            
            .card-item .card-body .content-card-description h3 {
              font-size: 1.2rem;
          }

          .card-item .card-body .content-card-description p.description {
            font-size: .9rem;
          }

          @media screen and (max-width:368px) {
            .card-item .card-body p.city-name {
              font-size: .8rem;
              padding: .6rem;
            }

            .card-item .card-body .content-card-description p.rating {
              font-size: .7rem;
            }
            
            .card-item .card-body .content-card-description h3 {
              font-size: 1rem;
          }

          .card-item .card-body .content-card-description p.description {
            font-size: .7rem;
          }
        `;
  }

  set card(value) {
    this._card = value;
    this.render();
  }

  get card() {
    return this._card;
  }

  render() {
    this._updateStyle();

    this.appendChild(this._style);
    this.innerHTML += `
        <div class="card-item">
        <div class="card-body">
          <p class="city-name" tabindex="0">${this._card.city}</p>
            <img 
            width="365"
            height="250"
            class="lazyload" 
            aria-label="image of ${this._card.name}" 
            tabindex="0" 
            data-src="${CONFIG.BASE_IMAGE_URL.SMALL + this._card.pictureId}" 
            crossorigin="anonymous" 
            alt="image of ${this._card.name}"
            style="width: 100%; max-height: 250px; object-fit: cover;"
            >
          <div class="content-card-description">
          <p class="rating" tabindex="0">Rating: ${this._card.rating}</p>
          <h3 class="restaurant-name"><a class="link" href="/#/detail/${this._card.id}" tabindex="0">${this._card.name}</a></h3>
          <p class="description" tabindex="0">${this._card.description}</p>
          </div>
        </div>
      </div>
        `;
  }
}
