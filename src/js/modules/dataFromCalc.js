const dataFromCalc = ()=> {
  let obj ={};

  const selects = document.querySelectorAll('.calc_form select');

    selects.forEach(select => {
      if(select.value !== '')
      console.log(select.value)
    })

}

export default dataFromCalc;