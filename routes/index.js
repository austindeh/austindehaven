var fs = require('fs');
var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  // Project List
  // Project : { title, year, src, link }

  function base64Encode(file) {
    // read binary data
    try {
    var bitmap = fs.readFileSync(file);

    // convert binary data to base64 encoded string
    return Buffer.from(bitmap).toString('base64');
    }  catch (err) {
    console.log(err)
    throw err
    }
  }

  var projects = [

    {
      title: 'Xbox One X',
      year: 'coming soon',
      src: 'data:image/jpeg;base64,' + base64Encode('public/images/home/every60sec.jpg'),
      href: '',
      active: 'return false'
    },

    {
      title: 'Disney Toybox',
      year: 'coming soon',
      src: 'data:image/jpeg;base64,' + base64Encode('public/images/home/disney_toybox.jpg'),
      href: '/project/disney-toybox',
      active: 'return false'
    },

    {
      title: 'Alpinestars Adaptive Stretch',
      year: '2016',
      src: 'data:image/jpeg;base64,' + base64Encode('public/images/home/alpinestars_adaptive_stretch.jpg'),
      href: '/project/alpinestars-adaptive-stretch',
      active: 'return true'
    },

    {
      title: 'Made in LA',
      year: '2016',
      src: 'data:image/jpeg;base64,' + base64Encode('public/images/home/made_in_la.jpg'),
      href: '/project/made-in-la',
      active: 'return true'
    },

    {
      title: 'Motoamerica',
      year: '2015',
      src: 'data:image/jpeg;base64,' + base64Encode('public/images/home/motoamerica.jpg'),
      href: '/project/motoamerica',
      active: 'return true'
    },

    {
      title: 'Ken Block Livery',
      year: '2015',
      src: 'data:image/jpeg;base64,' + base64Encode('public/images/home/ken_block.jpg'),
      href: '/project/ken-block',
      active: 'return true'
    },

  ];

  res.render('index', { projects: projects, route: 'index' });
});

router.get('/photography', function(req, res, next) {
  res.render('photography', { route: 'photography' });
});

router.get('/Xbox-Protected', function(req, res, next) {
  res.render('password_protect', { route: 'Xbox-Protected' });
});

module.exports = router;
