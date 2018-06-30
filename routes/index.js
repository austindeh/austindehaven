var fs = require('fs');
var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {

  function base64Encode(file) {
    try {
      var bitmap = fs.readFileSync(file);
      return Buffer.from(bitmap).toString('base64');
    } catch (err) {
      console.log(err)
      throw err
    }
  }

  var projects = [
    {
      active: true,
      // year: '2018',
      title: 'Xbox One X',
      medium: 'Design / Motion',
      classes: 'project-100',
      href: '/project/xbox-one-x',
      src: 'data:image/jpeg;base64,' + base64Encode('public/images/home/every60sec.jpg'),
    },

    {
      active: true,
      // year: '2018',
      title: 'West Dermatology',
      medium: 'Design',
      classes: 'project-35 parallax-1',
      href: '/project/westderm',
      src: 'data:image/jpeg;base64,' + base64Encode('public/images/home/westderm-01.jpg'),
    },

    {
      active: true,
      // year: '2017',
      title: 'Disney Toy Box',
      medium: 'Design / Motion / Photography',
      classes: 'project-45 parallax-2',
      href: '/project/disney-toybox',
      src: 'data:image/jpeg;base64,' + base64Encode('public/images/home/disney_toybox.jpg'),
    },

    {
      active: true,
      // year: '2016',
      title: 'Alpinestars Adaptive Stretch',
      medium: 'Design / Photography',
      classes: 'project-35 parallax-1',
      href: '/project/alpinestars-adaptive-stretch',
      src: 'data:image/jpeg;base64,' + base64Encode('public/images/home/alpinestars_adaptive_stretch.jpg'),
    },

    {
      active: true,
      // year: '2015',
      title: 'Motoamerica',
      medium: 'Design',
      classes: 'project-55 parallax-2',
      href: '/project/motoamerica',
      src: 'data:image/jpeg;base64,' + base64Encode('public/images/home/motoamerica.jpg'),
    },

    {
      active: true,
      // year: '2016',
      title: 'Made in LA',
      medium: 'Design',
      classes: 'project-45 parallax-1',
      href: '/project/made-in-la',
      src: 'data:image/jpeg;base64,' + base64Encode('public/images/home/made_in_la.jpg'),
    },

    {
      active: true,
      // year: '2015',
      title: 'Ken Block',
      medium: 'Design',
      classes: 'project-35 parallax-2',
      href: '/project/ken-block',
      src: 'data:image/jpeg;base64,' + base64Encode('public/images/home/ken_block-02.jpg'),
    },

  ];

  res.render('index', {
    projects: projects,
    route: 'index'
  });
});

router.get('/photography', function (req, res, next) {
  res.render('pages/photography', {
    route: 'photography'
  });
});

module.exports = router;
