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
      getQuotes();
    } else if (element.id === 'en') {
      img.innerHTML =
        '<img src="./assets/img/png/chuck.png" alt="Chuck Norris">';
      getJokes();
    }
  });
});

//Quote generator
btn.addEventListener('click', (e) => {
  audio.play();
  if (activeLang.id === 'en') {
    getJokes();
  } else {
    getQuotes();
  }
});

//Get random jokes and quotes
async function getJokes() {
  const res = await fetch(url);
  const jokes = await res.json();
  const joke = jokes.value.joke;
  showData(joke);
}

function showData(data) {
  quote.innerHTML = '';
  quote.innerHTML = data;
}

getJokes();

async function getQuotes() {
  const res = await fetch('./quotes.json');
  const data = await res.json();
  let randomIndex = Math.floor(Math.random() * 100);
  const quote = `${data[randomIndex].text} <br> - ${data[randomIndex].author}`;
  showData(quote);
}

getQuotes();
