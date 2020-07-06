import calcScroll from './calcScroll';
import closeModals from './closeModals';

const modals = () => {
  let btnPressed = false,
  //кнопка наверх
      btnUp = document.querySelector('.pageup')

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
    //убираем кнопку наверх
        btnUp.style.display = "none";
      });
    });

    closeBtn.addEventListener('click', () => {
      closeModals(modalSelector);
      document.body.style.marginRight = `0px`;
    //Добавляем кнопку наверх обратно
      btnUp.style.display = "block";
    });

    modal.addEventListener('click', ({target})=> {
      if(target === modal){
        closeModals(modalSelector);
        document.body.style.marginRight = `0px`;
    //Добавляем кнопку наверх обратно
        btnUp.style.display = "block";
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

  showModalByTime('.popup-consultation', 60000);

}

export default modals;
