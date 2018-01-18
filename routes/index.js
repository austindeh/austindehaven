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
      title: 'Disney Store Toybox',
      year: 'coming soon',
      src: 'data:image/jpeg;base64,' + base64Encode('public/images/home/disney_toybox.jpg'),
      href: ''
    },

    {
      title: 'Alpinestars Adaptive Stretch',
      year: '2016',
      src: 'data:image/jpeg;base64,' + base64Encode('public/images/home/alpinestars_adaptive_stretch.jpg'),
      href: '/project/alpinestars-adaptive-stretch'
    },

    {
      title: 'Made in LA',
      year: '2016',
      src: 'data:image/jpeg;base64,' + base64Encode('public/images/home/made_in_la.jpg'),
      href: '/project/made-in-la'
    },

    {
      title: 'Motoamerica',
      year: '2015',
      src: 'data:image/jpeg;base64,' + base64Encode('public/images/home/motoamerica.jpg'),
      href: '/project/motoamerica'
    },

    {
      title: 'Ken Block Livery',
      year: '2015',
      src: 'data:image/jpeg;base64,' + base64Encode('public/images/home/ken_block.jpg'),
      href: '/project/ken-block'
    },

  ];

  res.render('index', { projects: projects, route: 'index' });
});

router.get('/photography', function(req, res, next) {
  res.render('photography', { route: 'photography' });
});

module.exports = router;
