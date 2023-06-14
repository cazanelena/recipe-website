import { getRecipes } from "../apiRoutes.js";
import { renderRecipes } from "../recipes/renderRecipes.js";
import { addSearchEventListener } from "../searchResults/searchRecipeByIngredient.js";

const cuisineSearchTerm = sessionStorage.getItem("searchTerm");
const recipesResponse = await getRecipes(cuisineSearchTerm);

const receipes = await recipesResponse.hits;

const searchTermElement = document.querySelector("#search_term");
if (receipes.length > 1) {
  searchTermElement.textContent = `Search results for ${cuisineSearchTerm}`;
} else {
  searchTermElement.textContent = `No search results for ${cuisineSearchTerm}`;
}

renderRecipes(receipes);

addSearchEventListener();
