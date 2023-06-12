import {
  getRecipes,
  getRecipeById,
  getTwentyRandomRecipes,
  } from "./apiRoutes.js";

import { addCuisineEventListeners } from './cusine/onCuisineClick.js'

addCuisineEventListeners()
// const getSpanish = await getRecipes('spanish')
// console.log('getSpanish', getSpanish)

// const singleRecipe = getSpanish.hits[0].recipe.uri.split('_')[1]
// console.log('singleRecipe', singleRecipe)

// const recipeById = await getRecipeById(singleRecipe)
// console.log('recipeById', recipeById)

// const twentyRandomRecipes = await getTwentyRandomRecipes()
// console.log('twentyRandomRecipes', twentyRandomRecipes)

// console.log('working')



const getSpanish = await getRecipes("spanish");
console.log("getSpanish", getSpanish);

const singleRecipe = getSpanish.hits[0].recipe.uri.split("_")[1];
console.log("singleRecipe", singleRecipe);

const recipeById = await getRecipeById(singleRecipe);
console.log("recipeById", recipeById);

//Random recipes section
const twentyRandomRecipes = await getTwentyRandomRecipes();
console.log("twentyRandomRecipes", twentyRandomRecipes);

//Get the name of each recipe
const labelRandomRecipes = twentyRandomRecipes.hits.map(
  (hit) => hit.recipe.label
);

//Get the image for each recipe
const imageRandomRecipes = twentyRandomRecipes.hits.map(
  (hit) => hit.recipe.image
);

//Get the url for each recipe
const urlRecipes = twentyRandomRecipes.hits.map(hit => hit.recipe.url)

//Get the health labels for each recipe

const healthLabels = twentyRandomRecipes.hits.map(hit => hit.recipe.healthLabels[0])
console.log(healthLabels)


const containerRandomSection = document.querySelector(".container");

const createRandomRecipes = (image, label, healthL, url) => {
  const boxDiv = document.createElement("div");

  const imgRecipe = document.createElement("img");
  boxDiv.appendChild(imgRecipe);
  imgRecipe.src = image;

  const labelDiv = document.createElement("div");
  const labelText = document.createElement("p");
  const healthLabel = document.createElement("p");

  //Create a btn to view info about recipe
  const btnViewRecipe = document.createElement('button');
  
  //Add a link to the btn
  const link = document.createElement('a')
  link.classList.add('link-recipe')
  btnViewRecipe.setAttribute('class', 'view-recipe-btn');
  btnViewRecipe.appendChild(link);
  link.href = url;
  link.target = '_blank'
  link.textContent = 'View Recipe'

  labelDiv.appendChild(labelText);
  labelText.innerHTML = label;

  labelDiv.appendChild(healthLabel)
  healthLabel.innerHTML = healthL;

  containerRandomSection.appendChild(boxDiv);
  boxDiv.appendChild(imgRecipe);
  boxDiv.appendChild(labelDiv);
  labelDiv.appendChild(btnViewRecipe)

  // Adding CSS Classes
  boxDiv.classList.add("box-flex");
  imgRecipe.classList.add("img-recipe");
  labelDiv.classList.add('info-label')
  healthLabel.classList.add('health-label')
};

imageRandomRecipes.forEach((image, index) => {
  let label = labelRandomRecipes[index];
  let healthTextLable = healthLabels[index]
  let eachUrlRecipe = urlRecipes[index];
  
  createRandomRecipes(image, label, healthTextLable, eachUrlRecipe);
});


