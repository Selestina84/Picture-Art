import {getData} from '../servises/requests'

const calcForm = (sizeSelector, materialSelector, optionSelector, promoSelector, calcFieldSelector) => {
  const size = document.querySelector(sizeSelector),
        material = document.querySelector(materialSelector),
        options = document.querySelector(optionSelector),
        promo = document.querySelector(promoSelector),
        result = document.querySelector(calcFieldSelector);

  let sum = 0;

  const calculate = () => {

    sum = Math.round((+size.value)*(+material.value)+(+options.value));

    if(size.value === '' || material.value === ''){
      result.textContent = "Пожалйста выберите размер и материал картины"
    } else if(promo.value === "IWANTPOPART"){
      result.textContent = Math.round(sum*0.7)
    } else {
      result.textContent = sum;
    }
  }
    size.addEventListener('change', calculate);
    material.addEventListener('change', calculate);
    options.addEventListener('change', calculate);
    promo.addEventListener('input', calculate);
}

export default calcForm;