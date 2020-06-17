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
      title: 'Fair Adaptive Shopping',
      category: 'Design / UX',
      classes: 'project-100',
      href: '/project/fair-shopping',
      src: 'data:image/jpeg;base64,' + base64Encode('public/images/home/fair-desktop.jpg'),
      mobile: '/images/home/xbox-mobile.jpg',
    },

    {
      active: true,
      // year: '2018',
      title: 'Xbox One X',
      category: 'Design / Motion',
      classes: 'project-45',
      href: '/project/xbox-one-x',
      src: 'data:image/jpeg;base64,' + base64Encode('public/images/projects/xbox/01-xbox.jpg'),
      mobile: '/images/home/xbox-mobile.jpg',
    },

    {
      active: true,
      // year: '2018',
      title: 'Fhitting Room',
      category: 'Design / Front-end',
      classes: 'project-35 parallax-1',
      href: '/project/fhitting-room',
      src: 'data:image/jpeg;base64,' + base64Encode('public/images/home/fhittingroom-desktop.jpg'),
      mobile: '/images/home/fhittingroom-desktop.jpg',
    },

    {
      active: true,
      // year: '2017',
      title: 'Disney Toy Box',
      category: 'Design / Motion / Photography',
      classes: 'project-45 parallax-2',
      href: '/project/disney-toybox',
      src: 'data:image/jpeg;base64,' + base64Encode('public/images/home/disney-desktop.jpg'),
      mobile: '/images/home/disney-mobile.jpg',
    },

    {
      active: true,
      // year: '2018',
      title: 'West Dermatology',
      category: 'Design / Front-end',
      classes: 'project-55 parallax-1',
      href: '/project/westderm',
      src: 'data:image/jpeg;base64,' + base64Encode('public/images/home/westderm-desktop-v2.jpg'),
      mobile: '/images/home/westderm-mobile.jpg',
    },

    {
      active: true,
      // year: '2016',
      title: 'Alpinestars Adaptive Stretch',
      category: 'Design / Photography',
      classes: 'project-35 parallax-2',
      href: '/project/alpinestars-adaptive-stretch',
      src: 'data:image/jpeg;base64,' + base64Encode('public/images/home/alpinestars-desktop.jpg'),
      mobile: '/images/home/alpinestars-mobile.jpg',
    },

    {
      active: true,
      // year: '2015',
      title: 'Motoamerica',
      category: 'Design',
      classes: 'project-35 parallax-1',
      href: '/project/motoamerica',
      src: 'data:image/jpeg;base64,' + base64Encode('public/images/home/motoamerica-desktop.jpg'),
      mobile: '/images/home/motoamerica-mobile.jpg',
    },

    
    {
      active: true,
      // year: '2016',
      title: 'Made in LA',
      category: 'Design',
      classes: 'project-45 parallax-2',
      href: '/project/made-in-la',
      src: 'data:image/jpeg;base64,' + base64Encode('public/images/home/madeinla-desktop.jpg'),
      mobile: '/images/home/madeinla-mobile.jpg',
    },

    {
      active: true,
      // year: '2015',
      title: 'Ken Block',
      category: 'Design',
      classes: 'project-35 parallax-1',
      href: '/project/ken-block',
      src: 'data:image/jpeg;base64,' + base64Encode('public/images/home/kenblock-desktop.jpg'),
      mobile: '/images/home/kenblock-mobile.jpg',
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
