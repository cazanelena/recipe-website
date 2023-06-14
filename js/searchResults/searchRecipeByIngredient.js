export const addSearchEventListener = () => {
  const submitButton = document.getElementById('search')

  submitButton.addEventListener('click', async function () {
    const searchIngredientResult = document.getElementById('searchBar').value
    console.log()
    const userInput = searchIngredientResult.toLowerCase().trim()
    console.log(userInput)

    sessionStorage.setItem('searchTerm', JSON.stringify(userInput))
    window.location.href = './search-results.html'
  })
}
