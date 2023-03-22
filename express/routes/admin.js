const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('admin 이후 url');
});

router.get('/products', (req, res) => {

  res.render('admin/product.html', {
    message : '<h1>태그가 출력 됩니다</h1>',
    online : 'express'
  });
});

router.get('/products/write', (req, res) => {
  res.render('admin/write.html');
  
});

router.post('/products/write', (req, res) => {
  res.send(req.body);
  
});

module.exports = router