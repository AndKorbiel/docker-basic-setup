async function getData(el) {
  const data = await fetch('/data1');
  const json = await data.json();
  el.append(json);
}

function init() {
  const display = document.getElementById('root');

  const button = document.getElementById('action');
  button.addEventListener('click', () => getData(display));
}

init();
