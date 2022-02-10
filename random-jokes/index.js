const url = 'https://api.icndb.com/jokes/random';
const btn = document.querySelector('.btn');
const audio = document.querySelector('.audio');
const quote = document.querySelector('.quote');

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
