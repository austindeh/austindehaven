var fs = require('fs');
var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  // Project List
  // Project : { title, year, src }
  var projects = [
    {
      title: 'Disney Store Toybox',
      year: 'wip',
      src: 'images/Home/Toybox-Cover-Kylo.jpg',
      href: ''
    },

    {
      title: 'Alpinestars Adaptive Stretch',
      year: '2016',
      src: 'images/Home/Alpinestars.jpg',
      href: '/project/alpinestars-adaptive-stretch'
    },

    {
      title: 'Made in LA',
      year: '2016',
      src: 'images/Home/Made-In-LA.jpg',
      href: '/project/made-in-la'
    },

    {
      title: 'Motoamerica',
      year: '2015',
      src: 'images/Home/Motoamerica.jpg',
      href: '/project/motoamerica'
    },

    {
      title: 'Ken Block Livery',
      year: '2015',
      src: 'images/Home/Ken-Block.jpg',
      href: '/project/ken-block'
    },

  ];

  res.render('index', { projects: projects, route: 'index' });
});

router.get('/photography', function(req, res, next) {
  res.render('photography', { route: 'photography' });
});

module.exports = router;
