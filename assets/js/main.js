//Creo un Array con al interno il SRC delle immagini.

const imgList = [
    "./assets/img/01.webp",
    "./assets/img/02.webp",
    "./assets/img/03.webp",
    "./assets/img/04.webp",
    "./assets/img/05.webp",
];

//Creo un punto di riferimento con l'array
let counterImg = 0

//Prendo i TAG dal HTML e le inserisco in una VARIABILE
const imgSlider = document.querySelector(".imgSlider");
const next = document.querySelector(".next")
const previeus = document.querySelector(".previous")
const miniature = document.querySelector(".miniature")


//Dichiaro un ciclo FOR per Creare e Inserire le immagini nella DOM
for (let i = 0; i < imgList.length; i++) {
    const listElement = imgList[i];
    
    const figure = document.createElement("img");
    figure.src = listElement;
    if ( i === 0 ) {
        figure.classList.add("visible");
    }
    imgSlider.append(figure);
}

for (let i = 0; i < imgList.length; i++) {
    const listElement = imgList[i];
    const figure = document.createElement("img");
    figure.src = listElement;
    miniature.append(figure);

    figure.addEventListener("click", function(){
        console.log(i);
        let immagineCorrente = document.querySelector(".visible")
        immagineCorrente.src = [listElement];
        imgSlider.append(immagineCorrente)
        console.log(immagineCorrente);
    })
}


//Seleziono le immagini appena create e le do a una VARIABILE
const sliderImg = document.querySelectorAll(".imgSlider > img");

//Creo un evento sul BUTTON NEXT per cambiare immagine
next.addEventListener("click", function(){
    sliderImg[counterImg].classList.remove("visible");
    
    counterImg++;
    
    if (counterImg == imgList.length) {
        counterImg = 0
    }

    sliderImg[counterImg].classList.add("visible")
    // console.log(sliderImg);
})

//Creo un evento sul BUTTON PREVIEUS per cambiare immagine
previeus.addEventListener("click", function(){
    sliderImg[counterImg].classList.remove("visible");
    
    if (counterImg == 0) {
        counterImg = imgList.length ;
    }

    counterImg--;
    

    sliderImg[counterImg].classList.add("visible")
    // console.log(sliderImg);
})