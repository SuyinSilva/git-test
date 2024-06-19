let currentSlide = 0;

function showSlide(index) {
    const slides = document.querySelectorAll('.carousel-item');
    if (index >= slides.length) {
        currentSlide = 0;
    } else if (index < 0) {
        currentSlide = slides.length - 1;
    } else {
        currentSlide = index;
    }
    const offset = -currentSlide * 20;
    document.querySelector('.carousel-inner').style.transform = `translateX(${offset}%)`;
    console.log(offset);
}

function moveSlide(direction) {
    showSlide(currentSlide + direction);
}

document.addEventListener('DOMContentLoaded', () => {
    showSlide(currentSlide);
});
/***********/
$('#displayNone').click(function(e) {
  
    // Resetear, por si acaso has estado jugando con la otra propiedad
    $('#hide-me').css('visibility', 'visible');
    
    if( $('#hide-me').is(":visible") ) {
      $('#hide-me').css('display', 'none'); 
    } else {
      $('#hide-me').css('display', 'block');
    }
  });
/**** */
let currentSlideS = 0;
const slides = document.querySelectorAll('.carrousel-item');

document.addEventListener('DOMContentLoaded', () => {
    slides[currentSlideS].classList.add('active');
});

function nextSlide() {
    slides[currentSlideS].classList.remove('active');
    currentSlideS = (currentSlideS + 1) % slides.length;
    slides[currentSlideS].classList.add('active');
}