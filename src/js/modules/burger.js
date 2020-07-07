const burger = (menuSelector, trigger) => {
  const menuElem = document.querySelector(menuSelector),
        burgerBtn = document.querySelector(trigger);

  menuElem.style.display = 'none';

  burgerBtn.addEventListener('click', () => {
    if (menuElem.style.display == "none" && window.screen.availWidth < 993) {
      menuElem.style.display = 'block';
    } else {
      menuElem.style.display = 'none';
    }
  });

  window.addEventListener('resize', () => {
    if (window.screen.availWidth > 992) {
      menuElem.style.display = 'none';
    }
  });
}

export default burger;