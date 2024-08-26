const express = require('express');
const app = express();

app.get('/get-data2', (req, res) => {
  res.json({ message: 'Response from service 2' });
});

app.listen(5001, () => {
  console.log('Server successfully running on port 5001');
});
