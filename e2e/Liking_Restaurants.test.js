/* eslint-disable no-undef */
const assert = require('assert'); // Tambahkan impor assert

Feature('Liking Restaurants');

Before(({ I }) => {
  I.amOnPage('/#/favorite');
});

Scenario('showing empty liked restaurants', ({ I }) => {
  I.see('No favorite restaurants available', '.restaurants');
});

Scenario('liking one restaurant', async ({ I }) => {
  I.see('No favorite restaurants available', '.restaurants');

  I.amOnPage('/');

  I.seeElement('.restaurant-name a');
  const firstRestaurant = locate('.restaurant-name a').first();
  const firstRestaurantTitle = await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurant);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.seeElement('.card-item');

  const likedRestaurantTitle = await I.grabTextFrom('.restaurant-name');

  assert.strictEqual(firstRestaurantTitle, likedRestaurantTitle);

  // Batal menyukai restoran
  I.seeElement('.restaurant-name a');
  I.click(firstRestaurant);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.dontSeeElement('.card-item');

  I.see('No favorite restaurants available', '.restaurants');
});
