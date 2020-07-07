const accordion = (triggerSelector) => {
  const btns = document.querySelectorAll(triggerSelector);

  btns.forEach(btn => {
    btn.addEventListener('click', function() {

      if(!this.classList.contains('ui-accordion-header-active')){
        btns.forEach(btn => {
          btn.classList.remove('ui-accordion-header-active');
          btn.nextElementSibling.classList.remove('ui-accordion-content-active');
          btn.nextElementSibling.style.maxHeight = '0px';
        })
      }

      this.classList.toggle('ui-accordion-header-active');
      this.nextElementSibling.classList.toggle('ui-accordion-content-active');

        if (this.classList.contains('ui-accordion-header-active')) {
            this.nextElementSibling.style.maxHeight = this.nextElementSibling.scrollHeight + 50 + "px";
        } else {
            this.nextElementSibling.style.maxHeight = '0px';
        }
    });
  });

}

export default accordion;