import { getRecipes } from '../apiRoutes.js'

const getFoodByCuisine = async (event) => {
  const element = event.currentTarget
  const cuisine = element.dataset.cuisine
  const recipes = await getRecipes(cuisine)
  console.log('recipes', recipes)
}

const cuisineElements = document.querySelectorAll('[data-cuisine]')

export const addCuisineEventListeners = () => {
  cuisineElements.forEach((element) => {
    element.addEventListener('click', getFoodByCuisine)
  })
}
