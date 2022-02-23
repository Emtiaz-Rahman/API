function loadpost(){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(Response=>Response.json())
    .then(data=>displayPost(data));
}
loadpost();



function displayPost(posts){
    const postContainer=document.getElementById('posts');
    for (const post of posts){
        const div=document.createElement('div')
        div.classList.add('post')
        div.innerHTML=`
        <h3>${post.title}
        <p>${post.body}
        
        `;
        postContainer.appendChild(div);
    }
}




// function loadPost() {
//     fetch('https://jsonplaceholder.typicode.com/posts')
//         .then(Response => Response.json())
//         .then(data => displayPost(data));
// }
// loadPost();
// function displayPost(posts) {
//     const postContainer = document.getElementById('posts')
//     for (const post of posts) {
//         const div = document.createElement('div')
//         div.classList.add('post');
//         div.innerHTML = `
//         <h3>${post.title}</h3>
//         <p>${post.body}</P>
    
//         `;
//         postContainer.appendChild(div);
//     }

// }



const stuInfo = JSON.stringify({ name: "James", roll: 3 }); 
console.log(stuInfo.name); 
