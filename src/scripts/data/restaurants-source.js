/* eslint-disable import/no-cycle */
import API_ENDPOINT from '../globals/api-endpoint';
import Utils from '../utils/utils';

class RestaurantsSource {
  static async exploreRestaurant() {
    try {
      Utils.showLoading();
      await new Promise((resolve) => { setTimeout(resolve, 500); });
      const response = await fetch(API_ENDPOINT.EXPLORE_RESTAURANT);

      if (!response.status >= 200 && response.status < 300) {
        throw new Error('Something went error');
      }
      const responseJson = await response.json();
      const { restaurants: results } = responseJson;
      return results;
    } catch (error) {
      throw new Error('Something went error');
    } finally {
      Utils.hideLoading();
    }
  }

  static async detailRestaurant(id) {
    try {
      Utils.showLoading();
      await new Promise((resolve) => { setTimeout(resolve, 500); });
      const response = await fetch(API_ENDPOINT.DETAIL(id));

      if (!response.status >= 200 && response.status < 300) {
        throw new Error('Something went error');
      }
      const responseJson = response.json();
      return responseJson;
    } catch (error) {
      throw new Error(error.message);
    } finally {
      Utils.hideLoading();
    }
  }

  static async postReview(review) {
    try {
      const options = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(review),
      };

      fetch(API_ENDPOINT.REVIEW, options);
    } catch (error) {
      throw new Error(error.message);
    }
  }
}

export default RestaurantsSource;
