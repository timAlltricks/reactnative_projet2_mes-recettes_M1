import axios from 'axios';
import { GET_ALL_RECIPES } from '../actionTypes';

const defaultState = [];

export const recipe = (state = defaultState, action) => {
  switch (action.type) {
    default:
      return state;
    case GET_RECIPE:
      axios.get(env.baseApiURL + '/recipes/' + route.params.id + '/ingredientWidget.json', {
        params: {
          apiKey: '378d0bf636654b7db6ec4add1cda5101'
        }
      })
      .then(function (response) {
        return {
          action: GET_RECIPE,
          recipe: response.data.results
        }
      })
      .catch(function (error) {
        return {
          action: GET_RECIPE,
          error: error
        }
      });
  }
};
