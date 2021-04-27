import { GET_RECIPE, GET_ALL_RECIPES } from './actionTypes';

export const getRecipe = (id) => (
  {
    type: GET_RECIPE,
    data: recipe
  }
);

export const getAllRecipes = () => (
  {
    type: GET_ALL_RECIPES,
    data: recipes
  }
);