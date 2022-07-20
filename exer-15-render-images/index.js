
const imgs = [
    "https://source.unsplash.com/8YG31Xn4dSw",
    "https://source.unsplash.com/or6mrFMVmHM",
    "https://source.unsplash.com/M8paby2EcxU"
]

const imgContainer = document.getElementById('img-container');
function renderImages (){
    for(let i = 0; i<imgs.length; i++){
        imgContainer.innerHTML += `<img class="team-img" src="${imgs[i]}">`
    }
}

renderImages();

// =================================
const natureContainer = document.getElementById('nature-container');
const natureImgs = [
    "https://source.unsplash.com/pHANr-CpbYM",
    "https://source.unsplash.com/VowIFDxogG4",
    "https://source.unsplash.com/K2s_YE031CA"
]

function nature(){
    let natureDOM = "";
    for (let i=0; i<natureImgs.length; i++){
        natureDOM += `<img class="nature-pic" alt="beautiful nature images" src="${natureImgs[i]}">`
    }
    natureContainer.innerHTML = natureDOM;
}

nature();