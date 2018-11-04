let slideNum = 1;

showSlides(slideNum);

function plusSlides(n) {

  showSlides(slideNum += n);

}

function SlideNow(n) {

  showSlides(slideNum = n);

}



function showSlides(n) {

  let slides = document.getElementsByClassName("my-slides");

  let dots = document.getElementsByClassName("dot");

  if (n > slides.length) {slideNum = 1} 

  if (n < 1) {slideNum = slides.length}

  for (let i = 0; i < slides.length; i++) {

      slides[i].style.display = "none"; 

  }

  for (let i = 0; i < dots.length; i++) {

      dots[i].className = dots[i].className.replace(" active", "");

  }

  slides[slideNum-1].style.display = "block"; 

  dots[slideNum-1].className += " active";

}