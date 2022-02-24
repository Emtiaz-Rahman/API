const loadCountries = () => {
    fetch('https://restcountries.com/v2/all')
        .then(Response => Response.json())
        .then(data => displayCountries(data));
}
loadCountries();
const displayCountries = countries => {
    // for (const country of countries) {
    //     console.log(country.name);
    // }

    countries.forEach(country => {
        console.log(country);
        const countriesDiv = document.getElementById('countries')
        const div = document.createElement('div');
        div.classList.add('country');
        div.innerHTML = `
       <div> <img width='300px' src="${country.flags.svg}" alt=""></div>
       <h3>Name:${country.name}</h3>
       <p>Capital:${country.capital}
       <p>Native Name:${country.nativeName}
        
        `

        // const h3 = document.createElement('h3')
        // h3.innerText = country.name
        // div.appendChild(h3)
        // const p = document.createElement('p')
        // p.innerText = country.capital
        // div.appendChild(p)
        countriesDiv.appendChild(div);
    })
}