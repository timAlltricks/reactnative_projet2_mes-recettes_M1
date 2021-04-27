import axios from 'axios';
import { GET_ALL_RECIPES } from '../actionTypes';

const defaultState = [];

export const recipesList = (state = defaultState, action) => {
  switch (action.type) {
    default:
      return state;
    case GET_ALL_RECIPES:
      axios.get(env.baseApiURL + '/recipes/complexSearch', {
        params: {
          apiKey: '378d0bf636654b7db6ec4add1cda5101'
        }
      })
      .then(function (response) {
        return {
          action: GET_ALL_RECIPES,
          list: response.data.results
        }
      })
      .catch(function (error) {
        return {
          action: GET_ALL_RECIPES,
          error: error
        }
      });
  }
};
