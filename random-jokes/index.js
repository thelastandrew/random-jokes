const url = 'https://api.icndb.com/jokes/random';
const btn = document.querySelector('.btn');
const audio = document.querySelector('.audio');
const quote = document.querySelector('.quote');
const lang = document.querySelectorAll('.lang');
let activeLang = document.querySelector('.active');
let img = document.querySelector('.img');

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
    if (element.id === 'ru') {
      img.innerHTML =
        '<img src="./assets/img/png/jason.png" alt="Jason Statham">';
    } else if (element.id === 'en') {
      img.innerHTML =
        '<img src="./assets/img/png/chuck.png" alt="Chuck Norris">';
    }
  });
});

//Quote generator
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
