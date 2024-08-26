async function getData(el, url) {
  const data = await fetch(url);
  const json = await data.json();
  el.append(json);
  el.append(' ');
}

function init() {
  const display = document.getElementById('root');
  const button = document.getElementById('action');
  const button2 = document.getElementById('action2');

  button.addEventListener('click', () => getData(display, '/data1'));
  button2.addEventListener('click', () => getData(display, '/data2'));
}

init();
