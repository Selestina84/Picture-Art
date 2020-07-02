import calcScroll from './calcScroll';
import closeModal from './closeModal';

const modals = () => {

  function bindModal(triggerSelector, modalSelector, closeSelector, clickOnEnatherTrigger = true){
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

        windows.forEach(item => {
          item.style.display = 'none'
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
      if(target === modal && clickOnEnatherTrigger){
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
      setTimeout(function() {
        let display;

        document.querySelectorAll('[data-modal]').forEach(item => {
            if (getComputedStyle(item).display !== 'none') {
                display = "block";
            }
        });

        if (!display) {
            document.querySelector(selector).style.display = 'block';
            document.body.style.overflow = "hidden";
        }
      }, time);
    };

  bindModal('.button-design','.popup-design', '.popup-design .popup-close');
  bindModal('.button-consultation','.popup-consultation', '.popup-consultation .popup-close');

  showModalByTime('.popup-consultation', 5000);

}

export default modals;
