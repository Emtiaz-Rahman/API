const searchFood = () => {
    const searchField = document.getElementById('search-field')
    const searchText = searchField.value;
    // console.log(searchText);

    if (searchField.value == "") {
        document.getElementById("error-message").style.display = "block"
    }

    else {

        searchField.value = '';
        const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`
        fetch(url)
            .then(Response => Response.json())
            .then(data => displaysearchResult(data.meals));

    }

}
const displaysearchResult = meals => {

    const searchResult = document.getElementById('search-result');
    searchResult.textContent = '';

    document.getElementById("error-message").style.display = "none"
    meals.forEach(meal => {
        const div = document.createElement('div')
        div.classList.add('col');

        div.innerHTML = `
            <div onclick="loadmealDetails(${meal.idMeal})" class="card h-100">
                    <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${meal.strMeal}</h5>
                        <p class="card-text">${meal.strInstructions.slice(0, 150)}</p>
                        <a href="${meal.strYoutube}">Hello</a>
                    </div>
                </div>
            
            `
        searchResult.appendChild(div);
    })


}
const loadmealDetails = mealId => {
    console.log(mealId)
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`
    fetch(url)
        .then(Response => Response.json())
        .then(data => displaymealDetail(data.meals[0]))
}
const displaymealDetail = meal => {
    console.log(meal)
    const mealDetails = document.getElementById('meal-details')
    mealDetails.textContent = '';
    const div = document.createElement('div')
    div.classList.add('card')
    div.innerHTML = `
    <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="#" class="btn btn-primary">Go somewhere</a>
    

    `
    mealDetails.appendChild(div)
}