const posts = [
  { title: "Post One", body: "This is Post One" },
  { title: "Post Two", body: "This is Post Two" },
];

function createPost(post) {
  //creating a Promise
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      posts.push(post);

      //throwing ERROR
      const error = true; // Error will be displayed
      //const error = false; // Post One to Three will be displayed
      if(!error){
        resolve()
      }else{
        reject('Error: Something went wrong')
      }
    }, 2000);
  });
}

//to display in the browser
function getPosts() {
  setTimeout(() => {
    let output = "";
    posts.forEach((post) => {
      output += `<li>${post.title}</li>`;
    });
    document.body.innerHTML = output;
  }, 1000);
}

createPost({ title: "Post Three", body: "This is Post Three"})
.then(getPosts)
// catching the Error (the reject()) -> if catch not available uncaught will display + the error message
.catch((err)=>{
    console.log(err);
})

