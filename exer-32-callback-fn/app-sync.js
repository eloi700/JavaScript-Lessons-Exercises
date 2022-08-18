const posts = [
    {title: 'Post One', body: 'This is Post One'},
    {title: 'Post Two', body: 'This is Post Two'}
]

function createPost(post){
    setTimeout(() =>{
        posts.push(post);
    },2000);
}

//to display in the browser
function getPosts(){
    setTimeout(() =>{
        let output ="";
        posts.forEach((post) => {
            output +=`<li>${post.title}</li>`;
        });
        document.body.innerHTML = output;
    }, 1000);
}

createPost({title: 'Post Three', body: 'This is Post Three'})

getPosts();