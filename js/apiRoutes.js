import { apiInfo } from './apiInfo.js'

const { baseUrl, appId, appKey } = apiInfo

let loading = false
const loadingSpinner = document.getElementById('random__loading-spinner')
const errorText = document.getElementById('random__error-text')

const toogleLoadingSpinner = (loadingState) => {
  loading = loadingState
  if (loading) {
    errorText.style.display = 'none'
    loadingSpinner.style.display = 'flex'
  } else {
    loadingSpinner.style.display = 'none'
  }
}

const onApiError = () => {
  const errorText = document.getElementById('random__error-text')
  errorText.style.display = 'block'
  loadingSpinner.style.display = 'none'
}

export const getRecipes = async (searchTerm) => {
  try {
    toogleLoadingSpinner(true)
    const getRecipes = await fetch(
      `${baseUrl}?type=public&q=${searchTerm}&app_id=${appId}&app_key=${appKey}`
    )
    const recipes = await getRecipes.json()

    toogleLoadingSpinner(false)
    return recipes
  } catch (error) {
    console.log(error)
    onApiError()
  }
}

export const getRecipeById = async (recipeId) => {
  const getRecipe = await fetch(
    `${baseUrl}/${recipeId}?type=public&app_id=${appId}&app_key=${appKey}`
  )
  const recipes = await getRecipe.json()
  return recipes
}

export const getTwentyRandomRecipes = async () => {
  try {
    toogleLoadingSpinner(true)
    const getRecipe = await fetch(
      `${baseUrl}?type=public&q=q&app_id=${appId}&app_key=${appKey}`
    )
    const recipes = await getRecipe.json()

    toogleLoadingSpinner(false)
    return recipes
  } catch (error) {
    console.log(error)
    onApiError()
  }
}
