const myPromise = new Promise((resolve, reject) => {
    let myServer = true;
    if(myServer){
        resolve('We got the data');

    }else{
        reject('Data not received')
        myServer.catch(error => {
            console.log(error)
        })
    }
    myServer.then(result => {
        console.log(result)
    })
})