const banner = document.querySelector('.banner');
const bannerContainer = document.querySelector('.banner_container');
const marquee = document.querySelector('.marquee');
const bannerText = document.querySelector('.banner_text');
const navBar = document.getElementById('nav_bar');
const bannerBefore = window.getComputedStyle(banner, '::before')

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
  setTimeout(showSlides, 3500);
}

/*BANNER SLIDESHOW*/

modelViewer = document.getElementById('orbit-demo');
productDescription = document.querySelector('.product_description');

function moveObjectOnScroll() {
    const objectToMove = document.getElementById('container3d');
    
    const mainSection = document.getElementById('main_section_3d');
  
    window.addEventListener('scroll', function() {
      const newPosition = window.pageYOffset;
  
      const mainSectionTop = mainSection.getBoundingClientRect().top + window.pageYOffset;
      
      const mainSectionHeight = mainSection.offsetHeight;
  
      const maxPosition = mainSectionTop + mainSectionHeight - objectToMove.offsetHeight;
  
      if (newPosition <= maxPosition) {
        objectToMove.style.transform = 'translate(' + newPosition + 'px)';
      }

      if ((newPosition + 250) >= maxPosition) {
        productDescription.style.display = 'flex';
        modelViewer.setAttribute('camera-orbit','25deg, 0, 100%');
        modelViewer.setAttribute('camera-controls','');
      } else {
        productDescription.style.display = 'none';
        modelViewer.setAttribute('camera-orbit', 'calc(-1rad + calc(env(window-scroll-y) - 100%) * 2.5rad) 80deg 100%');
        modelViewer.removeAttribute('camera-controls');
      }
    });
  }
  
  moveObjectOnScroll();