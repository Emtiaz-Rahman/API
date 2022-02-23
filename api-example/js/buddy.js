
const loadBuddy = () => {
    fetch('https://randomuser.me/api/?results=5')
        .then(Response => Response.json())
        .then(data => displayBuddy(data))
}
loadBuddy();

const displayBuddy = data => {
    const buddies = data.results;
    const buddyDiv = document.getElementById('buddies');
    for (const buddy of buddies) {
        const p = document.createElement('p')
        p.innerText = `Name:${buddy.name.title} ${buddy.name.first} ${buddy.name.last}  Email:${buddy.email}`
        buddyDiv.appendChild(p);
    }

}


// const loadBuddy = () => {
//     fetch('https://randomuser.me/api/?results=5')
//         .then(Response => Response.json())
//         .then(data => displayBuddy(data));
// }
// loadBuddy();

// const displayBuddy = data => {
//     const buddies = data.results
//     const buddyDiv = document.getElementById('buddies')
//     for (const buddy of buddies) {
//         console.log(buddy);
//         const p = document.createElement('p')
//         p.innerText = `Name:${buddy.name.title}  ${buddy.name.first} ${buddy.name.last}`;
//         buddyDiv.appendChild(p);
//     }
// }