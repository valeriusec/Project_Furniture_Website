const banner = document.querySelector('.banner');
const bannerContainer = document.querySelector('.banner_container');
const marquee = document.querySelector('.marquee');
const bannerText = document.querySelector('.banner_text');
const navBar = document.getElementById('nav_bar');


/*BANNER SLIDESHOW*/

let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName('banner_img');
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 5000);
}

/*BANNER SLIDESHOW*/
