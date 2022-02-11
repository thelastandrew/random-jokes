const url = 'https://api.icndb.com/jokes/random';
const btn = document.querySelector('.btn');
const audio = document.querySelector('.audio');
const quote = document.querySelector('.quote');
const lang = document.querySelectorAll('.lang');
let activeLang = document.querySelector('.active');

//Lang switcher
function changeColor(el) {
  if (!el.classList.contains('active')) {
    activeLang.classList.remove('active');
    el.classList.add('active');
    activeLang = el;
  }
}

lang.forEach((element) => {
  element.addEventListener('click', function (e) {
    changeColor(element);
  });
});

btn.addEventListener('click', (e) => {
  audio.play();
  getData();
});

async function getData() {
  const res = await fetch(url);
  const data = await res.json();
  showData(data);
}

function showData(data) {
  quote.innerHTML = '';
  quote.innerHTML = data.value.joke;
}

getData();
