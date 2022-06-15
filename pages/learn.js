import App from "../main.js";
import WordService from "../services/word-service.js";

// id = word id
export default function LearnPage({ id }) {
  let div = document.createElement('div');
  div.classList.add('d-flex', 'flex-column','align-items-center');

  let h1 = document.createElement('h1');
  h1.innerText = `Сесія: ${id+1} з ${WordService.words.length} слів`;
  h1.classList.add('text-center', 'mt-5');

  let card = document.createElement('div');
  card.classList.add('card','w-50', 'my-4', 'py-3');

  let enH5 = document.createElement('h5');
  enH5.classList.add('text-danger', 'text-center', 'fs-1', 'text-lowercase');
  enH5.innerText = WordService.words[id].en;
  
  let uaH6 = document.createElement('h6');
  uaH6.classList.add('text-center', 'fs-2', 'mt-2', 'text-lowercase');
  uaH6.innerText = WordService.words[id].ua;

  card.appendChild(enH5);
  card.appendChild(uaH6);

  let btn = document.createElement('button');
  btn.classList.add('btn','btn-dark','ms-3');
  btn.innerText = 'Наступне слово';
  btn.addEventListener('click', (_) => {
    if(id != WordService.words.length - 1) {
      // next word
      App.navigateTo('learn', { id:id+1 });
    } else {
      // start remember
      App.navigateTo('remember', { id:0 });
    }
  });

  div.appendChild(h1);
  div.appendChild(card);
  div.appendChild(btn);

  return div;
}