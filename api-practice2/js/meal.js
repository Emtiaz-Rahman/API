const searchFood = () => {
    const searchFild = document.getElementById('search-field')
    const searchText = searchFild.value;
    searchFild.value = '';
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`
    fetch(url)
        .then(Response => Response.json())
        .then(data => displaySearchResult(data.meals))
}
const displaySearchResult = meals => {
    const searchResult = document.getElementById('search-result')
    searchResult.textContent = '';
    meals.forEach(meal => {
        console.log(meal);
        const div = document.createElement('div')
        div.classList.add('col')
        div.innerHTML = `
        <div onclick="loadmealDetails(${meal.idMeal})" class="card h-100">
        <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">${meal.strMeal}</h5>
            <p class="card-text">${meal.strInstructions.slice(0, 150)}</p>
        </div>
    </div>
        `
        searchResult.appendChild(div);
    })
}
const loadmealDetails = mealId => {
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`
    fetch(url)
        .then(Response => Response.json())
        .then(data => displaymealDetail(data.meals[0]))
}

const displaymealDetail = meal => {
    const mealDeatails = document.getElementById('meal-details')
    mealDeatails.textContent = '';
    const div = document.createElement('div')
    div.classList.add('card')
    div.innerHTML = `
    <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">${meal.strMeal}</h5>
            <p class="card-text">${meal.strInstructions.slice(0, 150)}</p>
            <a href="${meal.strYoutube}" target=”_blank” class="btn btn-primary">Go somewhere</a>
        </div>
    
    `
    mealDeatails.appendChild(div)
}