// const img = document.getElementById('carousel');
// const rightBtn = document.getElementById('right-btn');
// const leftBtn = document.getElementById('left-btn');

// // Images are from unsplash
// let pictures = ['vnit_2.png','vnit_3.png','vnit_4.png','vnit_5.png'];

// img.src = pictures[0];
// let position = 0;

// const moveRight = () => {
//     if (position >= pictures.length - 1) {
//         position = 0
//         img.src = pictures[position];
//         return;
//     }
//     img.src = pictures[position + 1];
//     position++;
// }

// const moveLeft = () => {
//     if (position < 1) {
//         position = pictures.length - 1;
//         img.src = pictures[position];
//         return;
//     }
//     img.src = pictures[position - 1];
//     position--;
// }

// rightBtn.addEventListener("click", moveRight);
// leftBtn.addEventListener("click", moveLeft);

let slideIndex = 1;
showSlides(slideIndex);

let prev = document.getElementById ('prev');
let next = document.getElementById ('next');

next.addEventListener ("click", function () {
  showSlides(slideIndex += 1);

});

prev.addEventListener ("click", function () {
  showSlides(slideIndex -= 1);
});

function currentSlide(n) {
  showSlides(slideIndex = n);
}


function showSlides(n) {
    let slides = document.getElementsByClassName("slide");
    console.log("...........slides",slides)
    if (n > slides.length) {
      slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }

    console.log('......length',slides.length)
    let current = document.getElementsByClassName("active");

    console.log(".........current",current)

    if (current.length > 0) {
        current[0].className = current[0].className.replace(" active", "");
      }

    slides[slideIndex - 1].className = slides[slideIndex - 1].className + ' active';    
  }

 let timer = setInterval(function(){
    slideIndex++;
    showSlides(slideIndex);
  },5000);

