document.getElementById('button1').addEventListener('click', getText);
document.getElementById('button2').addEventListener('click', getJson);

//----------GET TEXT
//fetch returns Promises(.then)
function getText(){
    fetch('test.txt')
    .then((res) => { // catch the promise
        return res.text() // res.json()
    })
    //in data is that what promise returns
    .then((data) =>{ // grab the data
        console.log(data);
        document.getElementById('output').innerHTML = data;
    })
    //if there's error
    .catch((err) =>{
        console.log(err);
    })
}

//---------GET JSON