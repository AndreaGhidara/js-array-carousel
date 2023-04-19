// let carusel = document.getElementById("carusel");
// let imgSlider = document.getElementById("img-slider");
// let slideElements = document.querySelectorAll(".i100");

// let left = document.querySelector(".left");
// let right = document.querySelector(".right");

// let currentImg = 0;
// let ultimaSlideConTastoNext = 4;

// right.addEventListener("click", function(){

//     if(currentImg < ultimaSlideConTastoNext) {
//         for (let c = 0; c < slideElements.length; c++) {
//             const slide = slideElements[c];
//             if(c == currentImg+1 ) {
//                 slide.classList.remove("hidden");
//             } else {
//                 slide.classList.add("hidden");
//             }
//         }
//         currentImg++;
//     }
// });

// left.addEventListener("click", function(){
//     if(currentImg>0) {
//         for (let c = 0; c < slideElements.length; c++) {
//                 const slide = slideElements[c];
//             if(c == currentImg-1 ) {
//                 slide.classList.remove("hidden");
//             } else {
//                 slide.classList.add("hidden");
//             }
//         }
//         currentImg--;
//     }

// });

const listImmage = [];

let immage1 = "./assets/img/01.webp";
let immage2 = "./assets/img/02.webp";
let immage3 = "./assets/img/03.webp";
let immage4 = "./assets/img/04.webp";
let immage5 = "./assets/img/05.webp";

listImmage.push(immage1, immage2, immage3, immage4, immage5);

let img = `<img id="img" src="${immage1}" alt="">` 


let carusel = document.getElementById("carusel");
let sliders = document.getElementById("img-slider");


let next = document.querySelector(".right")
let preview = document.querySelector(".left");

let currentImmage = document.getElementById("img")
let numerImmage = 0

let negative = false

for (let i = 0; i < listImmage.length; i++) {
    const element = listImmage[i];
    if (element == immage1) {
        numerImmage == 0;
        console.log(numerImmage);
    }
}

function changeImmage() {
    if (numerImmage == 0 ) {
        sliders.innerHTML = `<img class="i100" src="${immage1}" alt="">`
        console.log(numerImmage);
    }
    if (numerImmage == 1) {
        sliders.innerHTML = `<img class="i100" src="${immage2}" alt="">`
        console.log(numerImmage);
    }
    if (numerImmage == 2) {
        sliders.innerHTML = `<img class="i100"" src="${immage3}" alt="">`
        console.log(numerImmage);
    }
    if (numerImmage == 3) {
        sliders.innerHTML = `<img class="i100" src="${immage4}" alt="">`
        console.log(numerImmage);
    }
    if (numerImmage == 4) {
        sliders.innerHTML = `<img class="i100" src="${immage5}" alt="">`
        console.log(numerImmage);
    }
}

next.addEventListener("click", function(){
    if (numerImmage <= 4) {
        numerImmage ++
        changeImmage()
    }
    if (numerImmage > 4) {
        numerImmage = 0
        changeImmage()
    }
})

preview.addEventListener("click", function(){
    if (numerImmage == 0) {
        numerImmage = 5;
    } else {
        numerImmage --;
        changeImmage()
    }
})