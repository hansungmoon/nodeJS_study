const express = require('express');
const router = express.Router();

function testMiddleWare(req, res, next) {
  console.log('첫번째 미들웨어');
  next(); // 다음 파라미터로
}

router.get('/', (req, res) => {
  res.send('admin 이후 url');
});

router.get('/products', (req, res) => {

  res.render('admin/product.html', {
    message : '<h1>태그가 출력 됩니다</h1>',
    online : 'express'
  });
});

module.exports = router