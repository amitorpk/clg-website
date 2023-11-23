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

document.addEventListener('DOMContentLoaded', function () {
  // Add event listeners to buttons


let prev = document.getElementById("prev");
let next = document.getElementById("next");
let slideIndex = 1;


if (next)
{
  showSlides(slideIndex);

next.addEventListener("click", function () {
  showSlides((slideIndex += 1));
});

prev.addEventListener("click", function () {
  showSlides((slideIndex -= 1));
});

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let slides = document.getElementsByClassName("slide");
  console.log("...........slides", slides);
  if (slides)
  {
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
}

  console.log("......length", slides.length);
  let current = document.getElementsByClassName("active");

  console.log(".........current", current);

  if (current.length > 0) {
    current[0].className = current[0].className.replace(" active", "");
  }

  slides[slideIndex - 1].className =
    slides[slideIndex - 1].className + " active";
}

let timer = setInterval(function () {
  slideIndex++;
  showSlides(slideIndex);
}, 5000);
}

const dropdownBtn = document.getElementById("btn-a");
const dropdownMenu = document.getElementById("dropdown-a");
const toggleArrow = document.getElementById("arrow-a");

// Toggle dropdown function
const toggleDropdown = function () {
  dropdownMenu.classList.toggle("show");
  toggleArrow.classList.toggle("arrow");
};

// Toggle dropdown open/close when dropdown button is clicked
dropdownBtn.addEventListener("click", function (e) {
  e.stopPropagation();
  toggleDropdown();
});

// Close dropdown when dom element is clicked
document.documentElement.addEventListener("click", function () {
  if (dropdownMenu.classList.contains("show")) {
    toggleDropdown();
  }
});

const dropdownBtn_c = document.getElementById("btn-c");
const dropdownMenu_c = document.getElementById("dropdown-c");
const toggleArrow_c = document.getElementById("arrow-c");

// Toggle dropdown function
const toggleDropdown_c = function () {
  dropdownMenu_c.classList.toggle("show");
  toggleArrow_c.classList.toggle("arrow");
};

// Toggle dropdown open/close when dropdown button is clicked
dropdownBtn_c.addEventListener("click", function (e) {
  e.stopPropagation();
  toggleDropdown_c();
});

// Close dropdown when dom element is clicked
document.documentElement.addEventListener("click", function () {
  if (dropdownMenu_c.classList.contains("show")) {
    toggleDropdown_c();
  }
});

function navigateTo(page) {
  window.location.href = page;
}


  
});




// function loadContent(page) {
//   const xhr = new XMLHttpRequest();
//   xhr.onreadystatechange = function() {
//       if (this.readyState == 4 && this.status == 200) {
//           document.getElementById('main-content').innerHTML = this.responseText;
//       }
//   };
//   xhr.open('GET', page, true);
//   xhr.send();
// }

