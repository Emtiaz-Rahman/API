const searchFood = () => {
    const searchField = document.getElementById('search-field')
    const searchText = searchField.value;
    console.log(searchText);
    searchField.valu = '';
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`
    fetch(url)
        .then(Response => Response.json())
        .then(data => console.log(data));
}