const containerRandomSection = document.querySelector('.container')

export const createRecipes = (image, label, healthL, url) => {
  const boxDiv = document.createElement('div')

  const imgRecipe = document.createElement('img')
  boxDiv.appendChild(imgRecipe)
  imgRecipe.src = image

  const labelDiv = document.createElement('div')
  const labelText = document.createElement('p')
  const healthLabel = document.createElement('p')

  //Create a btn to view info about recipe
  const btnViewRecipe = document.createElement('button')

  //Add a link to the btn
  const link = document.createElement('a')
  link.classList.add('link-recipe')
  btnViewRecipe.setAttribute('class', 'view-recipe-btn')
  btnViewRecipe.appendChild(link)
  link.href = url
  link.target = '_blank'
  link.textContent = 'View Recipe'

  labelDiv.appendChild(labelText)
  labelText.innerHTML = label

  labelDiv.appendChild(healthLabel)
  healthLabel.innerHTML = healthL

  containerRandomSection.appendChild(boxDiv)
  boxDiv.appendChild(imgRecipe)
  boxDiv.appendChild(labelDiv)
  labelDiv.appendChild(btnViewRecipe)

  // Adding CSS Classes
  boxDiv.classList.add('box-flex')
  imgRecipe.classList.add('img-recipe')
  labelDiv.classList.add('info-label')
  healthLabel.classList.add('health-label')
}
