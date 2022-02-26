const searchPlayers = () => {
    const searchfield = document.getElementById('search-field')
    const searchText = searchfield.value;
    searchfield.value = '';
    const url = `https://www.thesportsdb.com/api/v1/json/2/searchplayers.php?p=${searchText}`
    fetch(url)
        .then(Response => Response.json())
        .then(data => displaySearchResult(data.player))
}
const displaySearchResult = players => {
    const searchResult = document.getElementById('search-result')
    players.forEach(playe => {
        console.log(playe);
        const div = document.createElement('div')
        div.classList.add('col')
        div.innerHTML = `
        <div class="col">
                <div class="card">
                    <img src="${playe.strFanart1}" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to
                            additional content. This content is a little bit longer.</p>
                    </div>
                </div>
            </div>
        
        `
        searchResult.appendChild(div)
    })

}