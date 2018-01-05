var fs = require('fs');
var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  // Project List
  // Project : { title, year, src, link }
  var projects = [
    {
      title: 'Disney Store Toybox - Coming Soon',
      year: '2017',
      src: 'Images/Home/disney_toybox.jpg',
      href: ''
    },

    {
      title: 'Alpinestars Adaptive Stretch',
      year: '2016',
      src: 'Images/Home/alpinestars_adaptive_stretch.jpg',
      href: '/project/alpinestars-adaptive-stretch'
    },

    {
      title: 'Made in LA',
      year: '2016',
      src: 'Images/Home/made_in_la.jpg',
      href: '/project/made-in-la'
    },

    {
      title: 'Motoamerica',
      year: '2015',
      src: 'Images/Home/motoamerica.jpg',
      href: '/project/motoamerica'
    },

    {
      title: 'Ken Block Livery',
      year: '2015',
      src: 'Images/Home/ken_block.jpg',
      href: '/project/ken-block'
    },

  ];

  res.render('index', { projects: projects, route: 'index' });
});

router.get('/photography', function(req, res, next) {
  res.render('photography', { route: 'photography' });
});

module.exports = router;
