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
      medium: 'Web / Motion',
      layout: 'project-col-8',
      src: 'data:image/jpeg;base64,' + base64Encode('public/images/home/every60sec.jpg'),
      href: '',
      active: 'return false',
      year: '2017',
    },

    {
      title: 'Disney Toy Box',
      medium: 'Motion / Photography',
      layout: 'project-col-2',
      src: 'data:image/jpeg;base64,' + base64Encode('public/images/home/disney_toybox.jpg'),
      href: '/project/disney-toybox',
      active: 'return false',
      year: '2017',
    },

    {
      title: 'Alpinestars Adaptive Stretch',
      medium: 'Strategy / Photography',
      layout: 'project-col-8',
      src: 'data:image/jpeg;base64,' + base64Encode('public/images/home/alpinestars_adaptive_stretch.jpg'),
      href: '/project/alpinestars-adaptive-stretch',
      active: 'return true',
      year: '2016',
    },

    {
      title: 'Made in LA',
      medium: 'Branding',
      layout: 'project-col-8',
      src: 'data:image/jpeg;base64,' + base64Encode('public/images/home/made_in_la.jpg'),
      href: '/project/made-in-la',
      active: 'return true',
      year: '2016',
    },

    {
      title: 'Motoamerica',
      medium: 'Branding / Advertising / Web / Illustration',
      layout: 'project-col-8',
      src: 'data:image/jpeg;base64,' + base64Encode('public/images/home/motoamerica.jpg'),
      href: '/project/motoamerica',
      active: 'return true',
      year: '2015',
    },

    {
      title: 'Ken Block Livery',
      medium: 'Branding / Illustration',
      layout: 'project-col-8',
      src: 'data:image/jpeg;base64,' + base64Encode('public/images/home/ken_block.jpg'),
      href: '/project/ken-block',
      active: 'return true',
      year: '2015',
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

// router.get('/gateway', function (req, res, next) {
//   res.render('password_protect', {});
// });

// router.post('/gateway', function (req, res, next) {
//   var password = req.param('password');
//   var hiddenPath = req.param('path');
//   if (password !== 'ad2k18') {
//     // either redirect like you're doing
//     res.redirect('/gateway');
//     // or if this is going to be ajaxy and you want to actually show an error on that password form
//     //  res.send(400);
//   }
//   res.redirect('/project/motoamerica')
//   console.log(password)

//   res.render('password_protect', {});
// });

module.exports = router;
