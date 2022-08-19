//Instantiate
const http = new easyHTTP();

//GET POSTS as a SOURCE
http.get("http://jsonplaceholder.typicode.com/posts", (err, posts) => {
  err ? console.log(err) : console.log(posts);
});

//GET POST (Single)
http.get("http://jsonplaceholder.typicode.com/posts/1", (err, post) => {
  err ? console.log(err) : console.log(post);
});

//CREATE DATA
const data = {
    title: "custom post",
    body: "custom post"
};
//CREATE POSTS - ID 101
http.post("http://jsonplaceholder.typicode.com/posts", data, (err, posts) => {
  err ? console.log(err) : console.log(posts);
});

//UPDATE POST/S (Updates whichever ID provided say 5)
http.put("http://jsonplaceholder.typicode.com/posts/5", data, (err, post) => {
  err ? console.log(err) : console.log(post);
});

//DELETE POSTS
http.delete("http://jsonplaceholder.typicode.com/posts/1", (err, response) => {
  err ? console.log(err) : console.log(response);
});