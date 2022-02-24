// const loadCountries=()=>{
//     fetch('https://restcountries.com/v2/all')
//     .then(Response=>Response.json())
//     .then(data=> displayCountries(data))
// }
// loadCountries();
// const displayCountries=countries=>{
//     countries.forEach(country=>{
//         console.log(country);
//         const countriesDiv=document.getElementById('countries')
//         const div=document.createElement('div');
//         div.classList.add('country')
//         div.innerHTML=`
//         <div> <img width='200px' src="${country.flags.svg}" alt=""></div>
        
//         `
//         countriesDiv.appendChild(div);
        
//     })
// }







































const loadCountries = () => {
    fetch('https://restcountries.com/v2/all')
        .then(Response => Response.json())
        .then(data => displayCountries(data));
}
loadCountries();
const displayCountries = countries => {

    countries.forEach(country => {
        // console.log(country);
        const countriesDiv = document.getElementById('countries')
        const div = document.createElement('div');
        div.classList.add('country');
        div.innerHTML = `
       <div> <img width='200px' src="${country.flags.svg}" alt=""></div>
       <h3>Name:${country.name}</h3>
       <p>Capital:${country.capital}</P>
       <p>Native Name:${country.nativeName}</P>
       <button onclick="loadCountryByname('${country.name}')">Details</button>
        
        `
        countriesDiv.appendChild(div);
    })
}
const loadCountryByname = name => {
    const url = `https://restcountries.com/v2/name/${name}`
    fetch(url)
        .then(Response => Response.json())
        .then(data => displayCountryDetail(data[0]))
}
const displayCountryDetail = country => {
    console.log(country)
    const countryDiv = document.getElementById('country-detail')
    countryDiv.innerHTML = `
    <h3>Name:${country.name}</h3>
       <p>Capital:${country.capital}</P>
       <p>Native Name:${country.nativeName}</P>
    
    `

}