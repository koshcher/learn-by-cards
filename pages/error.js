export default function ErrorPage() {
  let div = document.createElement('div');

  let h1 = document.createElement('h1');
  h1.innerText = `Сталася помилка. Просимо спробувати пізніше.`;
  h1.classList.add('text-center', 'mt-5');

  div.appendChild(h1);

  return div;
}