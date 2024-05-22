// components/loading-indicator.js
export default class LoadingIndicator extends HTMLElement {
  constructor() {
    super();

    this._style = document.createElement('style');
    this.render();
  }

  _updateStyle() {
    this._style.textContent = `
        .loading-indicator {
            display: flex;
            width: 100%;
            height: 90vh;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            background-color: transparent;
            z-index: 9999;
            gap: 5px;
          }
  
          .spinner {
            -webkit-animation: rotator 1.4s linear infinite;
                    animation: rotator 1.4s linear infinite;
          }
          
          @-webkit-keyframes rotator {
            0% {
              transform: rotate(0deg);
            }
            100% {
              transform: rotate(270deg);
            }
          }
          
          @keyframes rotator {
            0% {
              transform: rotate(0deg);
            }
            100% {
              transform: rotate(270deg);
            }
          }
          .path {
            stroke-dasharray: 187;
            stroke-dashoffset: 0;
            transform-origin: center;
            -webkit-animation: dash 1.4s ease-in-out infinite, colors 5.6s ease-in-out infinite;
                    animation: dash 1.4s ease-in-out infinite, colors 5.6s ease-in-out infinite;
          }
          
          @-webkit-keyframes colors {
            0% {
              stroke: #4285F4;
            }
            25% {
              stroke: #DE3E35;
            }
            50% {
              stroke: #F7C223;
            }
            75% {
              stroke: #1B9A59;
            }
            100% {
              stroke: #4285F4;
            }
          }
          
          @keyframes colors {
            0% {
              stroke: #4285F4;
            }
            25% {
              stroke: #DE3E35;
            }
            50% {
              stroke: #F7C223;
            }
            75% {
              stroke: #1B9A59;
            }
            100% {
              stroke: #4285F4;
            }
          }
          @-webkit-keyframes dash {
            0% {
              stroke-dashoffset: 187;
            }
            50% {
              stroke-dashoffset: 46.75;
              transform: rotate(135deg);
            }
            100% {
              stroke-dashoffset: 187;
              transform: rotate(450deg);
            }
          }
          @keyframes dash {
            0% {
              stroke-dashoffset: 187;
            }
            50% {
              stroke-dashoffset: 46.75;
              transform: rotate(135deg);
            }
            100% {
              stroke-dashoffset: 187;
              transform: rotate(450deg);
            }
          }

          .loading-indicator h3 {
            color: #777;
            font-style: italic;
            font-weight: 500;
            letter-spacing: .1rem;
            font-size: 1.1rem;
          }
        `;
  }

  render() {
    this._updateStyle();

    this.appendChild(this._style);
    this.innerHTML += `
        <div class='loading-indicator'>
        <svg class='spinner' width='65px' height='65px' viewBox='0 0 66 66' xmlns='http://www.w3.org/2000/svg'>
        <circle class='path' fill='none' stroke-width='6' stroke-linecap='round' cx='33' cy='33' r='30'></circle>
     </svg>
          <h3>Loading...</h3>
        </div>
      `;
  }
}
