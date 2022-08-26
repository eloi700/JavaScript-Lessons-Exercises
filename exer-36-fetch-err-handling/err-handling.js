//http error will not fire off .catch automatically.  Check the response and THROW an ERROR yourself.

fetch('http//devcamper.io/api/v1/bootcamps/34343')
    .then(res => res.json())
    .then(res =>{
        if(!res.ok){
            throw new Error(res.error);
        }
        return res;
    })
    .catch (err => console.log(err));

//Function for Error Handing
function handleErrors(res){
    if (!res.ok) throw new Error(res.error);
    return res;
}

fetch ('http//devcamper.io/api/v1/bootcamps/34343')
    .then(res => res.json())
    .then(handleErrors)
    .then(res => console.log(res.data))
    .catch(err => console.log(err));