const express = require('express');
const app = express();

app.get('/get-data', (req, res) => {
  res.json({ message: 'Response from service 1' });
});

app.listen(9001, () => {
  console.log('Server successfully running on port 9001');
});
