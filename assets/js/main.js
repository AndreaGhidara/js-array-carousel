let carusel = document.getElementById("carusel");
let imgSlider = document.getElementById("img-slider");
let slideElements = document.querySelectorAll(".i100");

let left = document.querySelector(".left");
let right = document.querySelector(".right");

let currentImg = 0;
let ultimaSlideConTastoNext = 4;

right.addEventListener("click", function(){

    if(currentImg < ultimaSlideConTastoNext) {
        for (let c = 0; c < slideElements.length; c++) {
            const slide = slideElements[c];
            if(c == currentImg+1 ) {
                slide.classList.remove("hidden");
            } else {
                slide.classList.add("hidden");
            }
        }
        currentImg++;
    }
});

left.addEventListener("click", function(){
    if(currentImg>0) {
        for (let c = 0; c < slideElements.length; c++) {
                const slide = slideElements[c];
            if(c == currentImg-1 ) {
                slide.classList.remove("hidden");
            } else {
                slide.classList.add("hidden");
            }
        }
        currentImg--;
    }

});