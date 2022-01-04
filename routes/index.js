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
      mobile: '/images/home/fair-mobile.jpg',
    },

    {
      active: true,
      // year: '2018',
      title: 'Fair Go',
      category: 'Design / UX',
      classes: 'project-45 parallax-1',
      href: '/project/fair-go',
      src: 'data:image/jpeg;base64,' + base64Encode('public/images/home/fairgo-desktop.jpg'),
      mobile: '/images/home/fairgo-desktop.jpg',
    },

    {
      active: true,
      // year: '2018',
      title: 'Everest',
      category: 'Design / UX',
      classes: 'project-35 parallax-2',
      href: '/project/everest',
      src: 'data:image/jpeg;base64,' + base64Encode('public/images/home/everest-desktop.jpg'),
      mobile: '/images/home/everest-mobile-02.jpg',
    },

    {
      active: true,
      // year: '2018',
      title: 'Xbox One X',
      category: 'Design / Motion',
      classes: 'project-45 parallax-1',
      href: '/project/xbox-one-x',
      src: 'data:image/jpeg;base64,' + base64Encode('public/images/projects/xbox/xbox-desktop.jpg'),
      mobile: '/images/home/xbox-mobile.jpg',
    },

    {
      active: true,
      // year: '2018',
      title: 'Fhitting Room',
      category: 'Design / Front-end',
      classes: 'project-35 parallax-2',
      href: '/project/fhitting-room',
      src: 'data:image/jpeg;base64,' + base64Encode('public/images/home/fhittingroom-desktop.jpg'),
      mobile: '/images/home/fhittingroom-desktop.jpg',
    },
    
    {
      active: true,
      // year: '2018',
      title: 'West Dermatology',
      category: 'Design / Front-end',
      classes: 'project-35 parallax-1',
      href: '/project/westderm',
      src: 'data:image/jpeg;base64,' + base64Encode('public/images/home/westderm-desktop-03.jpg'),
      mobile: '/images/home/westderm-mobile-02.jpg',
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
      // year: '2015',
      title: 'Motoamerica',
      category: 'Design',
      classes: 'project-45 parallax-1',
      href: '/project/motoamerica',
      src: 'data:image/jpeg;base64,' + base64Encode('public/images/home/motoamerica-desktop.jpg'),
      mobile: '/images/home/motoamerica-mobile.jpg',
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
      // year: '2016',
      title: 'Made in LA',
      category: 'Design',
      classes: 'project-45 parallax-1',
      href: '/project/made-in-la',
      src: 'data:image/jpeg;base64,' + base64Encode('public/images/home/madeinla-desktop.jpg'),
      mobile: '/images/home/madeinla-mobile.jpg',
    },

    {
      active: true,
      // year: '2015',
      title: 'Ken Block',
      category: 'Design',
      classes: 'project-35 parallax-2',
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

//
//
//
// START
// SECRET PAGE WITH ITS OWN PROJECT CASE STUDIES

router.get('/secret', function (req, res, next) {
  
// Require Auth for view or redirect to gateway
var isAuth = req.cookies.authenticated;
if (!isAuth) {
  return res.redirect('/gateway?redirect_to=%2Fsecret');
}

  function base64Encode(file) {
    try {
      var bitmap = fs.readFileSync(file);
      return Buffer.from(bitmap).toString('base64');
    } catch (err) {
      console.log(err)
      throw err
    }
  }

  var secret_projects = [

    {
      active: true,
      // year: '2018',
      title: 'Fair Adaptive Shopping',
      category: 'Design / UX',
      classes: 'project-45 parallax-2',
      href: '/project/secret-fair-shopping',
      src: 'data:image/jpeg;base64,' + base64Encode('public/images/home/fair-desktop.jpg'),
      mobile: '/images/home/fair-mobile.jpg',
    },

    {
      active: false,
      // year: '2018',
      title: 'Champion.com',
      category: 'Coming Soon ☹',
      classes: 'project-35 parallax-1',
      href: '/project/secret-champion',
      src: 'data:image/jpeg;base64,' + base64Encode('public/images/home/champion-desktop.jpg'),
      mobile: '/images/home/champion-desktop.jpg',
    },

    {
      active: true,
      // year: '2018',
      title: 'My Process - Flowcharts',
      category: 'Presentations',
      classes: 'project-35 parallax-1',
      href: '/project/secret-flowcharts',
      src: 'data:image/jpeg;base64,' + base64Encode('public/images/home/flowcharts-desktop.jpg'),
      mobile: '/images/home/westderm-mobile-02.jpg',
    },
    
    {
      active: true,
      // year: '2018',
      title: 'Audi MMI',
      category: 'Design / UX',
      classes: 'project-35 parallax-2',
      href: '/project/secret-audi',
      src: 'data:image/jpeg;base64,' + base64Encode('public/images/home/audi-desktop.jpg'),
      mobile: '/images/home/audi-mobile.jpg',
    },

    {
      active: true,
      // year: '2018',
      title: 'Fair Go',
      category: 'Design / UX',
      classes: 'project-45 parallax-4',
      href: '/project/secret-fair-go',
      src: 'data:image/jpeg;base64,' + base64Encode('public/images/home/fairgo-desktop.jpg'),
      mobile: '/images/home/fairgo-desktop.jpg',
    },
    
    {
      active: false,
      // year: '2018',
      title: 'Albertsons',
      category: 'Coming Soon ☹',
      classes: 'project-35 parallax-3',
      href: '/project/secret-albertsons',
      src: 'data:image/jpeg;base64,' + base64Encode('public/images/home/albertsons-desktop.jpg'),
      mobile: '/images/home/albertsons-desktop.jpg',
    },

    {
      active: true,
      // year: '2018',
      title: 'Xbox One X',
      category: 'Design / Motion',
      classes: 'project-45 parallax-3',
      href: '/project/secret-xbox-one-x',
      src: 'data:image/jpeg;base64,' + base64Encode('public/images/projects/xbox/xbox-desktop.jpg'),
      mobile: '/images/home/xbox-mobile.jpg',
    },
    
    {
      active: true,
      // year: '2018',
      title: 'West Dermatology',
      category: 'Design / Front-end',
      classes: 'project-35 parallax-1',
      href: '/project/secret-westderm',
      src: 'data:image/jpeg;base64,' + base64Encode('public/images/home/westderm-desktop-03.jpg'),
      mobile: '/images/home/westderm-mobile-02.jpg',
    },
  ];
  res.render('secret', {
    secret_projects: secret_projects,
  });
});

// SECRET PAGE WITH ITS OWN PROJECT CASE STUDIES
// END
// 
// 
//

// Render gateway on secure project click
router.get('/gateway', function (req, res, next) {
  res.render('password_protect', {redirect_to: req.query.redirect_to || ''});
});

// Gateway Password Auth & Redirect on Auth Verification
router.post('/gateway', function (req, res, next) {
  var password = req.param('password');
  var redirect_to = req.param('redirect_to');

  if (password.toLowerCase() !== 'basic') {
    // res.redirect('/gateway');
    res.redirect(`/gateway?redirect_to=${redirect_to}`)
  }

  res.cookie('authenticated', 'true', );

  if (redirect_to) {
    res.redirect(redirect_to);
  } else {
    res.redirect('/');
  }
});

module.exports = router;
