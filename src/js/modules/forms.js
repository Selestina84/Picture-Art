
import {postData} from '../servises/requests'

const forms =() => {
  const form = document.querySelectorAll('form'),
        upload = document.querySelectorAll('[name = "upload"]');

  const message = {
    loading: "Идет загрузка",
    success: "Спасибо! Мы свяжемся с вами в ближайшее время!",
    failure: "Что то пошло не так...",
    spinner: 'assets/img/spinner.gif',
    ok: 'assets/img/ok.png',
    fail: 'assets/img/fail.png'
  };

  const path = {
    designer: 'https://my-json-server.typicode.com/Selestina84/Picture-Art/designer',
    questions: 'https://my-json-server.typicode.com/Selestina84/Picture-Art/users'
  }

  upload.forEach(item => {
    item.addEventListener('input', () => {
      let dots;
      const arr = item.files[0].name.split('.');
      arr[0].length > 6 ? dots = "..." : dots = '.';
      const name = arr[0].substring(0, 6) + dots + arr[1];
      item.previousElementSibling.textContent = name;
    })
  });

  form.forEach(item => {
    item.addEventListener('submit', (e) => {
      e.preventDefault();
      let statusMessage = document.createElement('div');
      statusMessage.classList.add('status');
      item.parentNode.append(statusMessage);

      item.classList.add('animated','fadeOutUp');

      setTimeout(() => {
        item.style.display = 'none';
      }, 400);

      let statusImg = document.createElement('img');
          statusImg.classList.add('animated', 'fadeInUp');
          statusImg.setAttribute('src', message.spinner);
          statusMessage.appendChild(statusImg);

      let textMessage = document.createElement('div');
          textMessage.textContent= message.loading;
          statusMessage.appendChild(textMessage);

      const formData = new FormData(item);

      let api;
        item.closest('.popup-design') || item.classList.contains('calc_form') ? api = path.designer : api= path.questions;

    postData(api, formData)
      .then(res => {
        console.log(res)
        statusImg.setAttribute('src', message.ok);
        textMessage.textContent = message.success;
      })
      .catch(() => {
        statusImg.setAttribute('src', message.fail);
        textMessage.textContent = message.failure;
      })
      .finally(() => {
        setTimeout(()=>{
          form.forEach(item => {
            item.reset();
          })
          statusMessage.remove();
          item.style.display ='block';
          item.classList.remove('fadeOutUp');
          item.classList.add('fadeInUp');
          upload.forEach(item => {
            item.previousElementSibling.textContent = "Файл не выбран";
        });
        },3000);
      });
    });
  });
}


export default forms;