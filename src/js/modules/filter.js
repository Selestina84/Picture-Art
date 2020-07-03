
const filter = () => {
  const menu = document.querySelector('.portfolio-menu'),
        no = document.querySelector('.portfolio-no');

  menu.addEventListener('click', ({target}) => {

    if (target && target.tagName == "LI") {

      menu.querySelectorAll('li').forEach(btn => btn.classList.remove('active'));
      target.classList.add('active');
  }
  });

  function filter(markSelector){

    document.querySelectorAll('.portfolio-wrapper .all').forEach(item => {
      item.style.display = 'none';
      item.classList.remove('animated', 'fadeIn')
    })

    no.style.display = "none";
    no.classList.remove('animated', 'fadeIn');


    if (markSelector) {
      const markType = document.querySelectorAll(markSelector)
      markType.forEach(mark => {
          mark.style.display = 'block';
          mark.classList.add('animated', 'fadeIn');
      });
    } else {
      no.style.display = 'block';
      no.classList.add('animated', 'fadeIn');
    }
  };

  function clickBtn(selector, btnSelector){
    document.querySelector(btnSelector).addEventListener('click', () =>{
        filter(selector);
    })
  };

  clickBtn('.portfolio-wrapper .all', '.portfolio-menu .all');
  clickBtn('.portfolio-wrapper .lovers', '.portfolio-menu .lovers');
  clickBtn('.portfolio-wrapper .chef', '.portfolio-menu .chef');
  clickBtn('.portfolio-wrapper .girl', '.portfolio-menu .girl');
  clickBtn('.portfolio-wrapper .guy', '.portfolio-menu .guy');
  clickBtn('','.portfolio-menu .grandmother');
  clickBtn('','.portfolio-menu .granddad');

}

export default filter;