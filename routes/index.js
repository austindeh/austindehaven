var fs = require('fs');
var express = require('express');
var router = express.Router();

// Project List
// Project : { title, year, src }
var projects = [
  {
    title: 'Disney Store Toybox',
    year: 'Coming Soon',
    src: 'Images/Home/Toybox-Cover-Kylo.jpg',
    href: ''
  },

  {
    title: 'Alpinestars Adaptive Stretch',
    year: '2016',
    src: 'Images/Home/Alpinestars.jpg',
    href: '/project/alpinestars-adaptive-stretch'
  },

  {
    title: 'Made in LA',
    year: '2016',
    src: 'Images/Home/Made-In-LA.jpg',
    href: '/project/made-in-la'
  },

  {
    title: 'Motoamerica',
    year: '2015',
    src: 'Images/Home/Motoamerica.jpg',
    href: '/project/motoamerica'
  },

  {
    title: 'Ken Block Livery',
    year: '2015',
    src: 'Images/Home/Ken-Block.jpg',
    href: '/project/ken-block'
  },

];


router.get('/', function(req, res, next) {
  res.render('index', { projects: projects });
});

router.get('/photography', function(req, res, next) {
  res.render('photography', { });
});

router.get('/motoamerica', function(req, res, next) {
  res.render('motoamerica', { });
});

module.exports = router;
