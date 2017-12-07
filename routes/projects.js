var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/alpinestars-adaptive-stretch', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/made-in-la', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/motoamerica', function(req, res, next) {
  // res.view('project') // all the images in public/Images/foo
  res.send('asdf with a resource');
});

router.get('/ken-block', function(req, res, next) {
  res.send('ken block');
});

router.get('/archives', function(req, res, next) {
  res.send('asdf with a resource');
});


module.exports = router;
