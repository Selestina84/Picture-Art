const checkTextInputs = (selector) => {
  const textInputs = document.querySelectorAll(selector);

  textInputs.forEach(input => {
    input.addEventListener('input', () => {
      input.value = input.value.replace(/[a-z]/ig, '');
    //  console.log(input.value)
    })
  })

}

export default checkTextInputs;