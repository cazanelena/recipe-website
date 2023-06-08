import { apiInfo } from './apiInfo.js'

const { baseUrl, appId, appKey } = apiInfo

export const getRecipes = async (searchTerm) => {
  const getRecipes = await fetch(
    `${baseUrl}?type=public&q=${searchTerm}&app_id=${appId}&app_key=${appKey}`
  )
  const recipes = await getRecipes.json()
  return recipes
}

export const getRecipeById = async (recipeId) => {
  const getRecipe = await fetch(
    `${baseUrl}/${recipeId}?type=public&app_id=${appId}&app_key=${appKey}`
  )
  const recipes = await getRecipe.json()
  return recipes
}

export const getTwentyRandomRecipes = async () => {
  const getRecipe = await fetch(
    `${baseUrl}?type=public&q=q&app_id=${appId}&app_key=${appKey}`
  )

  const recipes = await getRecipe.json()
  return recipes
}
