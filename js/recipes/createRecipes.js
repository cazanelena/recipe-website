const containerRandomSection = document.querySelector('.container')

const getDifficulty = (totalTime) => {
  if (totalTime > 60) return 5
  if (totalTime > 45) return 4
  if (totalTime > 30) return 3
  return 2
}

export const createRecipes = (image, label, healthL, url, totalTime) => {
  const healthLableUpperCase = healthL.toUpperCase()

  //Add a link to the btn
  const link = document.createElement('a')
  link.classList.add('link-recipe')

  const boxDiv = document.createElement('a')
  boxDiv.href = url
  boxDiv.target = '_blank'

  const imgRecipe = document.createElement('img')
  boxDiv.appendChild(imgRecipe)
  imgRecipe.src = image

  const labelDiv = document.createElement('div')
  const labelText = document.createElement('p')
  const healthLabel = document.createElement('p')

  //Create a btn to view info about recipe
  // const btnViewRecipe = document.createElement('button')

  const lemonImage = document.createElement('img')
  lemonImage.setAttribute('src', './img/i_love_eat_lemon.svg')

  labelDiv.appendChild(labelText)
  labelDiv.appendChild(lemonImage)
  labelText.innerHTML = label

  labelDiv.appendChild(healthLabel)
  healthLabel.innerHTML = healthLableUpperCase

  const difficulty = getDifficulty(totalTime)
  const stars = new Array(difficulty).fill('star')

  stars.forEach((star) => {
    const starImage = document.createElement('img')
    starImage.setAttribute('src', './img/star.svg')
    starImage.classList.add('star-img')
    labelDiv.appendChild(starImage)
  })

  containerRandomSection.appendChild(boxDiv)
  boxDiv.appendChild(imgRecipe)
  boxDiv.appendChild(labelDiv)

  // Adding CSS Classes
  boxDiv.classList.add('box-flex')
  imgRecipe.classList.add('img-recipe')
  labelDiv.classList.add('info-label')
  labelText.classList.add('label-text')
  healthLabel.classList.add('health-label')
  lemonImage.classList.add('lemon-img')
}
