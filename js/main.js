import {
  getRecipes,
  getRecipeById,
  getTwentyRandomRecipes,
} from "./apiRoutes.js";

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


const containerRandomSection = document.querySelector(".container");

const createRandomRecipes = (image, label, url) => {
  const boxDiv = document.createElement("div");

  const imgRecipe = document.createElement("img");
  boxDiv.appendChild(imgRecipe);
  imgRecipe.src = image;

  const labelDiv = document.createElement("div");
  const labelText = document.createElement("p");

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

  containerRandomSection.appendChild(boxDiv);
  boxDiv.appendChild(imgRecipe);
  boxDiv.appendChild(labelDiv);
  labelDiv.appendChild(btnViewRecipe)

  // Adding CSS Classes
  boxDiv.classList.add("box-flex");
  imgRecipe.classList.add("img-recipe");
  labelDiv.classList.add('info-label')
};

imageRandomRecipes.forEach((image, index) => {
  let label = labelRandomRecipes[index];
  let eachUrlRecipe = urlRecipes[index]
  createRandomRecipes(image, label, eachUrlRecipe);
});

