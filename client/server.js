const express = require('express');
const path = require('path');
const app = express();

async function getDataFromService1() {
  try {
    const data = await fetch('http://service1:9001/get-data');
    const json = await data.json();
    console.log('json');
    console.log(json);
    return json;
  } catch (e) {
    console.log(e);
  }
}

async function getDataFromService2() {
  try {
    const data = await fetch('http://172.18.0.1:5001/get-data2');
    const json = await data.json();
    console.log('json');
    console.log(json);
    return json;
  } catch (e) {
    console.log(e);
  }
}

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', async (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/data1', async (req, res) => {
  const data = await getDataFromService1();
  res.json(data?.message);
});

app.get('/data2', async (req, res) => {
  const data = await getDataFromService2();
  res.json(data?.message);
});

app.listen(8080, () => {
  console.log('Server successfully running on port 8080');
});
