import { getRecipes } from '../apiRoutes.js'
import { storeCusineData, cuisineDataList } from './cuisineData.js'

const getFoodByCuisine = async (event) => {
  const element = event.currentTarget
  const cuisine = element.dataset.cuisine
  const recipes = await getRecipes(cuisine)
  storeCusineData(recipes)
  console.log('cuisineDataList', cuisineDataList)
}

const cuisineElements = document.querySelectorAll('[data-cuisine]')

export const addCuisineEventListeners = () => {
  cuisineElements.forEach((element) => {
    element.addEventListener('click', getFoodByCuisine)
  })
}
