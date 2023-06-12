import { createRecipes } from './createRecipes.js'

export const renderRecipes = (recipes) => {
  recipes.map((recipe) => {
    const label = recipe.recipe.label
    const image = recipe.recipe.image
    const healthLabel = recipe.recipe.healthLabels[0]
    const eachUrlRecipe = recipe.recipe.url

    createRecipes(image, label, healthLabel, eachUrlRecipe)
  })
}
