/* eslint-disable no-undef */
Feature('Customer Reviews');

Before(({ I }) => {
  I.amOnPage('/');
});

Scenario('submitting a new customer review', async ({ I }) => {
  // Pergi ke halaman detail restoran pertama
  I.seeElement('.restaurant-name a');
  const firstRestaurant = locate('.restaurant-name a').first();
  I.click(firstRestaurant);

  // Memastikan halaman detail terbuka dan form ulasan ada
  I.seeElement('.floating-form');

  // Mengisi form ulasan
  const reviewerName = 'John Doe';
  const reviewText = 'This is a great restaurant!';
  I.fillField('.name-reviewer', reviewerName);
  I.fillField('.body-review', reviewText);

  // Mengirim ulasan
  I.click('.floating-form button[type="submit"]');

  // Memastikan ulasan baru muncul di daftar ulasan
  I.waitForElement('.restaurant__customer-reviews .card__customer-review:last-child');
  I.see(reviewerName, '.restaurant__customer-reviews .card__customer-review:last-child h3');
  I.see(reviewText, '.restaurant__customer-reviews .card__customer-review:last-child p');
});
