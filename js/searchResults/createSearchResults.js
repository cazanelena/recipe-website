import { createElement } from '../utils/createElement.js'
import { cuisineDataList } from '../cusine/cuisineData.js'

const createSearchResultsDom = (recipeSearchResults) => {
  const recipeArray = recipeSearchResults[0]
  recipeArray.forEach((recipe) => {
    const recipeDetails = recipe.recipe
    console.log('recipeDetails', recipeDetails)

    const recipeImageUrl = recipeDetails.images.REGULAR.url

    const recipeImage = createElement('img', {
      class: 'recipe__image',
      src: recipeImageUrl,
    })

    const recipeContainer = createElement(
      'div',
      { class: 'recipe__container' },
      recipeImage
    )

    const recipesSection = document.querySelector('#recipes')
    recipesSection.appendChild(recipeContainer)
    console.log('recipesSection', recipesSection)
  })
}

createSearchResultsDom(cuisineDataList)
