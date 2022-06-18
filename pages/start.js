import App from "../main.js";
import WordService from "../services/word-service.js";

export default function StartPage() {
  let div = document.createElement('div');

  let h1 = document.createElement('h1');
  h1.innerText = 'Картки для вивчення англійських слів';
  h1.classList.add('text-center', 'mt-5');

  let p = document.createElement('p');
  p.classList.add('text-center', 'my-4');
  p.innerHTML = `
  Для того, щоб запам'ятати якомога більше слів, та поповнити 
  словниковий запас, ми рекомендуємо вам вивчати слова невеликими 
  "порціями", шляхом використання "методу карток". Ви обираєте
  кількість слів в наборі, які хочете опанувати. Програма відображає по
  одному слову із перекладом. Після того, як ви проглянули усі слова із 
  обраного набору, програма знову продемонструе вам ці слова, але 
  цього разу вже запропонує самостійно написати переклад для кожного
  із слів. Про результату вам буде виставлена оцінка.
  `;

  let flex = document.createElement('div');
  flex.classList.add('d-flex', 'justify-content-center');

  let input = document.createElement('input');
  input.setAttribute('type', 'number');
  input.classList.add('form-control', 'w-25');
  input.setAttribute('min', '1');
  input.setAttribute('value', '10');

  let btn = document.createElement('button');
  btn.classList.add('btn', 'btn-dark', 'ms-3');
  btn.innerText = 'Поїхали';

  btn.addEventListener('click', async (_) => {
    WordService.getWords(Number(input.value))
      .then(_ => { App.navigateTo('learn', { id: 0 }); console.log(WordService.words) })
      .catch(e => { App.navigateTo('error'); console.log(e) });
  });

  flex.appendChild(input);
  flex.appendChild(btn);

  div.appendChild(h1);
  div.appendChild(p);
  div.appendChild(flex);

  return div;
}