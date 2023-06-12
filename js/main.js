import {
  getRecipes,
  getRecipeById,
  getTwentyRandomRecipes,
} from './apiRoutes.js'
import { renderRecipes } from './recipes/renderRecipes.js'
import { addCuisineEventListeners } from './cusine/onCuisineClick.js'

addCuisineEventListeners()

//Random recipes section
const twentyRandomRecipes = await getTwentyRandomRecipes()

console.log('twentyRandomRecipes', twentyRandomRecipes)
renderRecipes(twentyRandomRecipes.hits)
