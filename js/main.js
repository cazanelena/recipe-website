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
console.log(labelRandomRecipes);

const imageRandomRecipes = twentyRandomRecipes.hits.map(
  (hit) => hit.recipe.image
);
console.log(imageRandomRecipes);

const containerRandomSection = document.querySelector(".container");

const createDiv = (image, label) => {
  const imgDiv = document.createElement("div");

  const imgRecipe = document.createElement("img");
  imgDiv.appendChild(imgRecipe);
  imgRecipe.src = image;

  const labelDiv = document.createElement("div");
  const labelText = document.createElement("p");
  const btnViewRecipe = document.createElement('button')
  btnViewRecipe.innerHTML = 'View Recipe'
  labelDiv.appendChild(labelText);
  labelText.innerHTML = label;

  containerRandomSection.appendChild(imgDiv);
  imgDiv.appendChild(imgRecipe);
  imgDiv.appendChild(labelDiv);
  labelDiv.appendChild(btnViewRecipe)

  // Adding CSS Classes
  imgDiv.classList.add("box-flex");
  imgRecipe.classList.add("img-recipe");
  labelDiv.classList.add('info-label')
};

imageRandomRecipes.forEach((image, index) => {
  const label = labelRandomRecipes[index];
  createDiv(image, label);
});

imageRandomRecipes.forEach((image, index) => {
  const label = labelRandomRecipes[index];
  createDiv(image, label);
});
