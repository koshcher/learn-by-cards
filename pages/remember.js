import App from "../main.js";
import WordService from "../services/word-service.js";

export default function RememberPage({ id }) {
  let div = document.createElement('div');
  div.classList.add('d-flex', 'flex-column', 'align-items-center');

  let h1 = document.createElement('h1');
  h1.innerText = `Слово №${id + 1} із ${WordService.words.length}`;
  h1.classList.add('text-center', 'mt-5');

  let card = document.createElement('div');
  card.classList.add('card', 'w-50', 'my-4', 'p-3');

  let uaH5 = document.createElement('h5');
  uaH5.classList.add('text-danger', 'text-center', 'fs-1', 'text-lowercase');
  uaH5.innerText = WordService.words[id].ua;

  let enInput = document.createElement('input');
  enInput.classList.add('text-center', 'form-control', 'mt-3');
  enInput.setAttribute('placeholder', 'ваша відповідь');

  card.appendChild(uaH5);
  card.appendChild(enInput);

  let btn = document.createElement('button');
  btn.classList.add('btn', 'btn-dark', 'ms-3');
  btn.innerText = 'Надіслати переклад';
  btn.addEventListener('click', (_) => {
    if (WordService.words[id].en.toLowerCase() == enInput.value.toLowerCase()) {
      WordService.words[id].correct = true;
    } else {
      WordService.words[id].correct = false;
    }

    if (id != WordService.words.length - 1) {
      // next word
      console.log(WordService.words);
      App.navigateTo('remember', { id: id + 1 });
    } else {
      // score
      App.navigateTo('score');
    }
  });

  div.appendChild(h1);
  div.appendChild(card);
  div.appendChild(btn);

  return div;
}