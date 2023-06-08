import {
  getRecipes,
  getRecipeById,
  getTwentyRandomRecipes,
} from './apiRoutes.js'

const getSpanish = await getRecipes('spanish')
console.log('getSpanish', getSpanish)

const singleRecipe = getSpanish.hits[0].recipe.uri.split('_')[1]
console.log('singleRecipe', singleRecipe)

const recipeById = await getRecipeById(singleRecipe)
console.log('recipeById', recipeById)

const twentyRandomRecipes = await getTwentyRandomRecipes()
console.log('twentyRandomRecipes', twentyRandomRecipes)

console.log('working')