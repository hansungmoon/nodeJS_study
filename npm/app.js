const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.get('/fastcampus', (req, res) => {
  res.send('Hello fastcampus111');
})

app.listen(port, () => {
  console.log('Express listen', port);
});