const sliders = (sliders, direction, prev, next) => {
  const slides = document.querySelectorAll(sliders);
  let slideIndex = 1,
      paused;

  function showSlides(n) {
    if(n > slides.length){
      slideIndex = 1;
    };
    if (n < 1) {
      slideIndex = slides.length;
    };

    slides.forEach(item => {
      item.style.display = "none";
      item.classList.add('animated')
    });

    slides[slideIndex-1].style.display = 'block'

  };

  showSlides(slideIndex);

  function changeSlides(n){
    showSlides(slideIndex += n)
  };

  try{
    const prevBtn = document.querySelector(prev),
          nextBtn = document.querySelector(next);

    prevBtn.addEventListener('click', () => {
      changeSlides(-1);
      slides[slideIndex-1].classList.remove('slideInLeft');
      slides[slideIndex-1].classList.add('slideInRight')
    });

    nextBtn.addEventListener('click', () => {
      changeSlides(1);
      slides[slideIndex-1].classList.remove('slideInRight');
      slides[slideIndex-1].classList.add('slideInLeft')
    });

  }catch(e){};

  function activateAnimation() {
    if (direction === 'vertical') {
      paused = setInterval(function(){
        changeSlides(1);
        slides[slideIndex-1].classList.add('slideInDown');
      },2500)
    } else {
      paused = setInterval(function(){
        changeSlides(1);
        slides[slideIndex-1].classList.remove('slideInRight');
        slides[slideIndex-1].classList.add('slideInLeft');
      },2500)
    }
  };

  activateAnimation();

  slides[0].parentNode.addEventListener('mouseenter', () => {
    clearInterval(paused)
  });

  slides[0].parentNode.addEventListener('mouseleave', () => {
    activateAnimation();
  });

}

export default sliders;