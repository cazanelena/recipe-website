const getFoodByCuisine = async (event) => {
  const element = event.currentTarget
  const cuisine = element.dataset.cuisine

  sessionStorage.setItem('searchTerm', JSON.stringify(cuisine))
  window.location.href = './search-results.html'
}

const cuisineElements = document.querySelectorAll('[data-cuisine]')

export const addCuisineEventListeners = () => {
  cuisineElements.forEach((element) => {
    element.addEventListener('click', getFoodByCuisine)
  })
}
