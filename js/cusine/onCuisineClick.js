import { getRecipes } from '../apiRoutes.js'

const getFoodByCuisine = async (event) => {
  const element = event.currentTarget
  const cuisine = element.dataset.cuisine
  const recipeResponse = await getRecipes(cuisine)
  const recipes = recipeResponse.hits

  sessionStorage.setItem('recipes', JSON.stringify(recipes))
  window.location.href = './search-results.html'
}

const cuisineElements = document.querySelectorAll('[data-cuisine]')

export const addCuisineEventListeners = () => {
  cuisineElements.forEach((element) => {
    element.addEventListener('click', getFoodByCuisine)
  })
}
