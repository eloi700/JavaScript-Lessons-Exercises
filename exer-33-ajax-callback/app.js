//Instantiate
const http = new easyHTTP();

//GET POSTS
http.get("http://jsonplaceholder.typicode.com/posts", (err, posts) => {
  err ? console.log(err) : console.log(posts);
});
