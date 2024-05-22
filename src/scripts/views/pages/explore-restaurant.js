import RestaurantsSource from '../../data/restaurants-source';
import { createRestaurantItemTemplate } from '../templates/template-creator';
import { renderRestaurantCards } from '../../components/card-list';

const ExploreRestaurant = {
  async render() {
    return `
      <h2 tabindex="0" class="title-section">Explore Restaurant</h2>
        <article class="card-container">
          <card-list></card-list>
      </article>
      `;
  },

  async afterRender() {
    const restaurants = await RestaurantsSource.exploreRestaurant();
    const restaurantsContainer = document.querySelector('article.card-container');
    restaurantsContainer.innerHTML += createRestaurantItemTemplate();
    restaurants.forEach((restaurant) => {
      renderRestaurantCards(restaurant);
    });
  },
};

export default ExploreRestaurant;
