//Adding async to a function makes it return a Promise
//Example:
async function myFunc() {
  //Create New Promise
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve("Hello"), 1000);
  });
  //Creating Error
  const error = true;
  if (!error) {
    const res = await promise; // Wait until the promise is resolved w/c is 1sec
    return res;
  } else {
    await Promise.reject(new Error("Something went wrong"));
  }
}

myFunc()
  .then((res) => console.log(res))
  .catch((err) => console.log(err));

//---------------ANOTHER EXAMPLE ASYNC AWAIT
async function getUsers(){
    //await response of the fetch call
    const response = await fetch('http://jsonplaceholder.typicode.com/users');

    //Only proceed once the Promise is resolved
    const data = await response.json();

    //Only proceed once the second Promise is resolved
    return data;
}

getUsers().then(users => console.log(users))