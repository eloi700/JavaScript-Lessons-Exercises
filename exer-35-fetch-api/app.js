document.getElementById("button1").addEventListener("click", getText);
document.getElementById("button2").addEventListener("click", getJson);
document.getElementById("button3").addEventListener("click", getExternal);

//----------GET TEXT DATA
//fetch returns Promises(.then)
function getText() {
  fetch("test.txt")
  .then(res => res.text())
  // catch the promise
  //in data is that what promise returns
  .then((data) => {
    console.log(data);
    // grab the data
    document.getElementById("output").innerHTML = data;
  })
    //if there's error
    .catch((err) => console.log(err));
}

//---------GET LOCAL JSON DATA
function getJson() {
  fetch("posts.json")
    .then(res => res.json())
      // catch the promise
    //in data is that what promise returns
    .then(data => {
      // grab the data
      console.log(data);
      let output = "";
      data.forEach((post) => {
        output += `<li>${post.title}</li>`;
      });
      document.getElementById("output").innerHTML = output;
    })
    //if there's error
    .catch(err => console.log(err));
  }

//---------GET FROM EXTERNAL API
function getExternal() {
  fetch("https://api.github.com/users")
    .then((res) => {
      // catch the promise
      return res.json();
    })
    //in data is that what promise returns
    .then((data) => {
      // grab the data
      console.log(data);
      let output = "";
      data.forEach((user) => {
        output += `<li>${user.login}</li> <span> ${user.id} </span>`;
      });
      document.getElementById("output").innerHTML = output;
    })
    //if there's error
    .catch((err) => {
      console.log(err);
    });
}
