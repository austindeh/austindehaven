var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Portfolio of Austin DeHaven' });
});

router.get('/photography', function(req, res, next) {
  res.render('photography', { title: 'Portfolio of Austin DeHaven' });
});

router.get('/motoamerica', function(req, res, next) {
  res.render('motoamerica', { title: 'Portfolio of Austin DeHaven' });
});

module.exports = router;
