import { getRecipes } from '../apiRoutes.js'
import { renderRecipes } from '../recipes/renderRecipes.js'

const cuisineSearchTerm = sessionStorage.getItem('searchTerm')
const recipesResponse = await getRecipes(cuisineSearchTerm)
console.log('recipesResponse', recipesResponse)
const receipes = await recipesResponse.hits

const searchTermElement = document.querySelector('#search_term')
searchTermElement.textContent = `Search results for ${cuisineSearchTerm}`

renderRecipes(receipes)
