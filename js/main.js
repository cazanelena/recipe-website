import { getTwentyRandomRecipes } from "./apiRoutes.js";
import { renderRecipes } from "./recipes/renderRecipes.js";
import { addCuisineEventListeners } from "./cusine/onCuisineClick.js";
import { addSearchEventListener } from "./searchResults/searchRecipeByIngredient.js";

addCuisineEventListeners();

const twentyRandomRecipes = await getTwentyRandomRecipes();
renderRecipes(twentyRandomRecipes.hits);

addSearchEventListener();
