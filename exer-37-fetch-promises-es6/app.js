const http = new EasyHTTP();

//Get Users
http
  .get("http://jsonplaceholder.typicode.com/users")
  .then((data) => console.log(data))
  .catch((err) => console.log(err));

//User DATA
const data = {
  name: "John Doe",
  username: "johndoe",
  email: "johndoe@gmail.com",
};

//Create / Add User
//Below will add/post the data into the http with the next to the last ID
http
  .post("http://jsonplaceholder.typicode.com/users", data)
  .then((data) => console.log(data))
  .catch((err) => console.log(err));

//Update Post Request
//Below will update the data ID into 2 instead 11
http
  .put("http://jsonplaceholder.typicode.com/users/2", data)
  .then((data) => console.log(data))
  .catch((err) => console.log(err));

//Delete User
//User ID 2 from below url will be DELETED
http
  .delete("http://jsonplaceholder.typicode.com/users/2")
  .then((data) => console.log(data))
  .catch((err) => console.log(err));
