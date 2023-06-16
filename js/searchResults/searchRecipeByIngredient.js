export const addSearchEventListener = () => {
  const submitButton = document.getElementById("search");

  submitButton.addEventListener("click", async function () {
    let searchIngredientResult = document.getElementById("searchBar").value;
    console.log();
    const userInput = searchIngredientResult.toLowerCase().trim();
    console.log(userInput);

    document.getElementById("form-text").reset();
    sessionStorage.setItem("searchTerm", JSON.stringify(userInput));
    window.location.href = "./search-results.html";
  });
};
