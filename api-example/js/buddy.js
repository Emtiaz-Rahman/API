
// const loadBuddy = () => {
//     fetch('https://randomuser.me/api/?results=5')
//         .then(Response => Response.json())
//         .then(data => displayBuddy(data))
// }
// loadBuddy();

// const displayBuddy = data => {
//     const buddies = data.results;
//     const buddyDiv = document.getElementById('buddies');
//     for (const buddy of buddies) {
//         const p = document.createElement('p')
//         p.innerText = `Name:${buddy.name.title} ${buddy.name.first} ${buddy.name.last}  Email:${buddy.email} Gender:${buddy.gender}`
//         buddyDiv.appendChild(p);
//     }

// }

const loadPasswoed = () => {
    fetch('https://randomuser.me/api/?password=upper,lower,1-16')
        .then(Response => Response.json())
        .then(data => displayPassword(data));
}
loadPasswoed();
const displayPassword = password => {
    const passwords = password.results[0];
    console.log(passwords);
    const imgDiv = document.getElementById('img');
    const div = document.createElement('div');
    div.innerHTML = `
   <div><img src="${password.results[0].picture.large}" alt=""></div>
  <p>  Cell:${password.results[0].cell}</P> <p>Date:${password.results[0].dob.date}</P>Age:${password.results[0].dob.age}
    
    
    
    `;
    imgDiv.appendChild(div);
}




















// const loadPasswoed = () => {
//     fetch('https://randomuser.me/api/?password=upper,lower,1-16')
//         .then(Response => Response.json())
//         .then(data => displayPassword(data));
// }
// loadPasswoed();

// const displayPassword = password => {
//     const passwords = password.results[0];
//     console.log(passwords.picture.large);
//     const imgDiv = document.getElementById('img')
//     const div = document.createElement('div');
//     div.innerHTML = `
//     <img src="${passwords.picture.medium}" alt="">
//     `
//     imgDiv.appendChild(div);
// }
