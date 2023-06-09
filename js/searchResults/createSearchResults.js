import { createElement } from '../utils/createElement.js'
import { cuisineDataList, storeCusineData } from '../cusine/cuisineData.js'

const serachResultsFromSessionStorage = sessionStorage.getItem('recipes')
const serachResults = JSON.parse(serachResultsFromSessionStorage)
storeCusineData(serachResults)

const getDifficulty = (totalTime) => {
  if (totalTime > 90) return 5
  if (totalTime > 60) return 4
  if (totalTime > 45) return 3
  if (totalTime > 30) return 2
  return 1
}

const createSearchResultsDom = (recipeSearchResults) => {
  const recipeArray = recipeSearchResults

  recipeArray.forEach((recipe) => {
    const recipeDetails = recipe.recipe

    const { totalTime, label } = recipeDetails
    const recipeLabel = label.split(' ').slice(0, 2).join(' ')

    const difficulty = getDifficulty(totalTime)
    const recipeImageUrl = recipeDetails.images.SMALL.url

    const recipeImage = createElement('img', {
      class: 'recipe__image',
      src: recipeImageUrl,
    })

    const title = createElement(
      'p',
      {
        class: 'recipe__text',
      },
      recipeLabel
    )

    const starsContainer = createElement('div', {
      class: 'recipe__stars-container',
    })

    const stars = new Array(difficulty).fill('star')

    for (let i = 0; i < stars.length; i++) {
      const starElement = createElement('img', {
        class: 'recipe__star',
        src: '../../img/star.svg',
      })
      starsContainer.appendChild(starElement)
    }

    const lemonImage = createElement('img', {
      class: 'recipe__lemon',
      src: '../../img/i_love_eat_lemon.svg',
    })

    const recipeContainer = createElement(
      'article',
      { class: 'recipe__container' },
      recipeImage,
      title,
      starsContainer,
      lemonImage
    )

    const recipesSection = document.querySelector('#recipes')
    recipesSection.appendChild(recipeContainer)
  })
}

createSearchResultsDom(cuisineDataList)
