import { getRecipes } from '../apiRoutes.js'

const getFoodByCusine = async (event) => {
  const element = event.currentTarget
  const cuisine = element.dataset.cusine
  const recipes = await getRecipes(cuisine)
  console.log('recipes', recipes)
}

const cusineElements = document.querySelectorAll('[data-cuisine]')

export const addCusineEventListeners = () => {
  cusineElements.forEach((element) => {
    console.log('element', element)
    element.addEventListener('click', getFoodByCusine)
  })
}
