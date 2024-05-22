// index.js
import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.scss';
import '../styles/responsive.scss';
import CardList from './components/card-list';
import CardItem from './components/card-item';
import LoadingIndicator from './components/loading-indicator';
import App from './views/app';
import swRegister from './utils/sw-register';

customElements.define('card-list', CardList);
customElements.define('card-item', CardItem);
customElements.define('loading-indicator', LoadingIndicator);

const app = new App({
  menuToggle: document.querySelector('.menu-toggle input'),
  nav: document.querySelector('header nav ul'),
  aElements: document.querySelectorAll('header nav ul li a'),
  checkbox: document.querySelector('.menu-toggle input'),
  content: document.querySelector('main .container'),
  jumbotron: document.querySelector('header .jumbotron'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
  swRegister();
});
