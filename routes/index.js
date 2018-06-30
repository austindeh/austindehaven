var fs = require('fs');
var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
  // Project List
  // Project : { title, year, src, link }

  function base64Encode(file) {
    // read binary data
    try {
      var bitmap = fs.readFileSync(file);
      // convert binary data to base64 encoded string
      return Buffer.from(bitmap).toString('base64');
    } catch (err) {
      console.log(err)
      throw err
    }
  }

  var projects = [

    {
      title: 'Xbox One X',
      medium: 'Design / Motion',
      year: '2018',
      classes: 'project-100',
      src: 'data:image/jpeg;base64,' + base64Encode('public/images/home/every60sec.jpg'),
      href: '/project/xbox-one-x',
      active: 'return true',
    },

    {
      title: 'West Dermatology',
      medium: 'Design',
      year: '2018',
      classes: 'project-35 observable parallax-1',
      src: 'data:image/jpeg;base64,' + base64Encode('public/images/home/westderm-01.jpg'),
      href: '/project/westderm',
      active: 'return true',
    },

    {
      title: 'Disney Toy Box',
      medium: 'Design / Motion / Photography',
      year: '2017',
      classes: 'project-45 observable parallax-2',
      src: 'data:image/jpeg;base64,' + base64Encode('public/images/home/disney_toybox.jpg'),
      href: '/project/disney-toybox',
      active: 'return true',
    },


    {
      title: 'Alpinestars Adaptive Stretch',
      medium: 'Design / Photography',
      year: '2016',
      classes: 'project-35 observable parallax-1',
      src: 'data:image/jpeg;base64,' + base64Encode('public/images/home/alpinestars_adaptive_stretch.jpg'),
      href: '/project/alpinestars-adaptive-stretch',
      active: 'return true',
    },


    {
      title: 'Motoamerica',
      medium: 'Design',
      year: '2015',
      classes: 'project-55 observable parallax-2',
      src: 'data:image/jpeg;base64,' + base64Encode('public/images/home/motoamerica.jpg'),
      href: '/project/motoamerica',
      active: 'return true',
    },

    {
      title: 'Made in LA',
      medium: 'Design',
      year: '2016',
      classes: 'project-45 observable parallax-1',
      src: 'data:image/jpeg;base64,' + base64Encode('public/images/home/made_in_la.jpg'),
      href: '/project/made-in-la',
      active: 'return true',
    },

    {
      title: 'Ken Block',
      medium: 'Design',
      year: '2015',
      classes: 'project-35 observable parallax-2',
      src: 'data:image/jpeg;base64,' + base64Encode('public/images/home/ken_block-02.jpg'),
      href: '/project/ken-block',
      active: 'return true',
    },


  ];

  res.render('index', {
    projects: projects,
    route: 'index'
  });
});

router.get('/photography', function (req, res, next) {
  res.render('photography', {
    route: 'photography'
  });
});

module.exports = router;
