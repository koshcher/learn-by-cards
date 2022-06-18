import App from "../main.js";
import WordService from "../services/word-service.js";

export default function ScorePage() {
  let isSuccess = WordService.correctCount >= 0.75 * WordService.words.length;

  let div = document.createElement('div');
  div.classList.add('d-flex', 'flex-column', 'align-items-center');

  let h1 = document.createElement('h1');
  // TODO: make correct count red if less than 75% and green if more
  h1.innerHTML = `
    Результат 
    <span class="${isSuccess ? 'text-success' : 'text-danger'}">
      ${WordService.correctCount}
    </span> 
    з ${WordService.words.length}
  `;
  h1.classList.add('text-center', 'mt-5');

  let ul = document.createElement('ul');
  ul.classList.add('list-group', 'text-center', 'w-25', 'my-4');

  WordService.words.forEach(word => {
    let li = document.createElement('li');
    li.classList.add('list-group-item', 'text-lowercase');

    li.innerHTML = `
    ${word.ua} - 
    <span class="${word.correct ? 'text-success' : 'text-danger text-decoration-line-through'}">
      ${word.en}
    </span>
    `;

    ul.appendChild(li);
  });

  let btn = document.createElement('button');
  btn.classList.add('btn', 'btn-dark', 'mb-4');
  btn.innerText = 'Спробувати ще раз!';
  btn.addEventListener('click', (_) => {
    App.navigateTo('start');
  });

  div.appendChild(h1);
  div.appendChild(ul);
  div.appendChild(btn);

  if (isSuccess) {
    let dance = document.createElement('img');
    dance.setAttribute('src', '/dance.gif');
    dance.classList.add('w-50', 'mb-5');
    div.appendChild(dance);
  }

  return div;
}