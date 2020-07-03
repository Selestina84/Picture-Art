const changeImage = (blockSelector) => {
  const blocks = document.querySelectorAll(blockSelector);

  function showImage(item){
    const img = item.querySelector('img');

    img.src = img.src.slice(0, -4) + '-1.png';

    item.querySelectorAll('p:not(.sizes-hit)').forEach(elem => {
      elem.style.display = "none";
    })
  };

  function hideImage(item){
    const img = item.querySelector('img');

    img.src = img.src.slice(0, -6) + '.png';

    item.querySelectorAll('p').forEach(elem => {
      elem.style.display = "block";
    })
  };

  blocks.forEach(block => {
    block.addEventListener('mouseover', () => {
      showImage(block)
    });
    block.addEventListener('mouseout', () => {
      hideImage(block)}
    );
  })

}

export default changeImage;