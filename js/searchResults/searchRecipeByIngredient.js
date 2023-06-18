export const addSearchEventListener = () => {
  const submitButton = document.getElementById('form-text')

  submitButton.addEventListener('submit', async function (event) {
    event.preventDefault()

    let searchIngredientResult = document.getElementById('searchBar').value
    if (searchIngredientResult === '') return
    const userInput = searchIngredientResult.toLowerCase().trim()
    console.log(userInput)

    document.getElementById('form-text').reset()
    sessionStorage.setItem('searchTerm', JSON.stringify(userInput))
    window.location.href = './search-results.html'
  })
}
