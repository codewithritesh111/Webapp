const express = require('express');
const app = express();
const port = 3001;

app.get('/', (req, res) => {
  res.send('Hello, this is your demo API!');
});

app.listen(port, () => {
  console.log(`Demo API listening at http://localhost:${port}`);
});
