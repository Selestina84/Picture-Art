import calcScroll from './calcScroll';
import closeModal from './closeModal';

const modals = () => {
  let btnPressed = false;

  function bindModal(triggerSelector, modalSelector, closeSelector, destroy = false){
    const trigger = document.querySelectorAll(triggerSelector),
        modal = document.querySelector(modalSelector),
        closeBtn = document.querySelector(closeSelector),
        windows = document.querySelectorAll('[data-modal]'),
        scroll = calcScroll();

    trigger.forEach(item => {
      item.addEventListener ('click', (e)=>{
        if (e.target){
          e.preventDefault()
        }

        btnPressed = true;

        if(destroy) {
          item.remove();
        }

        windows.forEach(item => {
          item.style.display = 'none'
          item.classList.add('animated', 'fadeIn')
        });

        modal.style.display = "block";
        document.body.classList.add('modal-open');
        document.body.style.marginRight = `${scroll}px`;
      });
    });

    closeBtn.addEventListener('click', () => {
      closeModal(modalSelector);
      document.body.style.marginRight = `0px`;
    });

    modal.addEventListener('click', ({target})=> {
      if(target === modal){
        closeModal(modalSelector);
        document.body.style.marginRight = `0px`;
      }
    });

    document.body.addEventListener('keydown', (e)=> {
      if(e.keyCode === 27 && clickOnEnatherTrigger){
        closeModal(modalSelector);
        document.body.style.marginRight = `0px`;
      }
    });
  }

    function showModalByTime(selector, time){
      setTimeout(() => {
        let display;

        document.querySelectorAll('[data-modal]').forEach(item => {
            if (getComputedStyle(item).display !== 'none') {
                display = "block";
            }
        });

        if (!display) {
          let scroll = calcScroll();
            document.querySelector(selector).style.display = 'block';
            document.body.style.overflow = "hidden";
            document.body.style.marginRight = `${scroll}px`;
        }
      }, time);
    }

    function openByScroll(selector){
      window.addEventListener('scroll', () => {
        let allHeight = Math.max(document.documentElement.scrollHeight,document.body.scrollHeight)// получение высоты всей страницы для разных браузеров
        if(!btnPressed && (window.pageYOffset + document.documentElement.clientHeight >= allHeight)) {
          document.querySelector(selector).click();
        }
      })
    }


  bindModal('.button-design','.popup-design', '.popup-design .popup-close');
  bindModal('.button-consultation','.popup-consultation', '.popup-consultation .popup-close');
  bindModal('.fixed-gift','.popup-gift', '.popup-gift .popup-close', true);

  openByScroll('.fixed-gift');

  //showModalByTime('.popup-consultation', 5000);

}

export default modals;
