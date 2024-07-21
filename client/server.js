const express = require('express');
const path = require('path');
const app = express();

async function getDataFromService1() {
  const data = await fetch('http://localhost:9001/get-data');
  const json = await data.json();
  console.log(json);
  return json;
}

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', async (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/data1', async (req, res) => {
  const data = await getDataFromService1();
  res.json(data.message);
});

app.listen(8080, () => {
  console.log('Server successfully running on port 8080');
});
