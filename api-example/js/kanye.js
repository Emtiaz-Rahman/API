
const loadQuotes = () => {
    fetch('https://api.kanye.rest/')
        .then(Response => Response.json())
        .then(data => displayQuotes(data));
}

const displayQuotes = quote => {
    const elementQuotes = document.getElementById('quote')
    elementQuotes.innerText = quote.quote;
}
