var express = require('express');
var router = express.Router();
// var archives = require('./archives');

router.get('/fair-shopping', function(req, res, next) {

  var project = {
    href: '/',
    date: 'Work in Progress',
    client: 'Fair',
    title: 'Fair Adaptive Shopping Experience',
    body: 'Fair caters to a very broad and diversified customer base. While this is a good problem to have, it poses a lot of difficulties within the shopping experience. This includes vast and complex flows as well as decision fatigue and difficulty finding relevant information. To solve this, we worked to create an ever-changing personalized shopping experience powered by our recommendation engine. The system allows for seamless changes within vehicle recommendations as well as the way information is presented catering to each individual customers needs. The logic organizes and updates personas with a weighted probability function to ensure that cohorts can be fluid.',
    role: 'Design & Strategy Lead',
    prevProject: 'ken-block',
    nextProject: 'fair-go',
  }
  res.render('pages/fair_shopping', { project: project, images: [] })
});

router.get('/fair-go', function(req, res, next) {
  
    // Require Auth for view or redirect to gateway
  var isAuth = req.cookies.authenticated;
  if (!isAuth) {
    return res.redirect('/gateway?redirect_to=%2Fproject%2Ffair-go');
  }

  var project = {
    href: '/',
    date: '2019',
    client: 'Fair / Uber',
    title: 'Fair Go',
    body: 'Partnered with Uber to create a product that enables drivers’ to get a car in a seamless, convenient and accessible manner across the U.S. Since our customers were only rideshare drivers for Uber we worked closely with Uber team to create and experience that integrated directly with Uber and allowed customers to easily and quickly get a rideshare vehicle. The approach to the design was clean, minimal, and clear, resulting in an easy and friendly user experience.',
    role: 'Design & Development',
    prevProject: 'fair-shopping',
    nextProject: 'everest',
  }
  res.render('pages/fair_go', { project: project, images: [] })
});

router.get('/everest', function(req, res, next) {

  var project = {
    href: '/',
    date: '2019',
    client: 'MGR',
    title: 'Everest Fitness Scheduler',
    body: 'MGR came to us looking for a way to create a scheduler that can be plugged into squarespace and used as a stand-alone app for private boutique gyms. They had used multiple different vendors previously. They frequently had problems where users didnt understand how to book and manage classes. They were having to consistently walk customers through the reservation process using up time and energy that could be allocated eslewhere. Our objective was to create something that allows both vendors and customers to easily create and manage reservations.',
    role: 'Design Lead',
    prevProject: 'fair-go',
    nextProject: 'xbox-one-x',
  }
  res.render('pages/everest', { project: project, images: [] })
});

router.get('/xbox-one-x', function(req, res, next) { 

  var project = {
    href: '/',
    date: '2017',
    client: 'Microsoft / Pepsi',
    title: 'Every 60 Seconds',
    body: 'Microsoft (in partnership with PepsiCo) wanted to build buzz around the launch of the new Xbox One X console by giving fans the chance to bid and win Xbox One X - every 60 seconds - before public sale. The core challenge was in designing a fair gameplay that deterred bots, cheaters, and sweeps junkies.',
    role: 'Design, Animation',
    prevProject: 'everest',
    nextProject: 'fhitting-room',
  }
  res.render('pages/xbox_one_x', { project: project, images: [] })
});

router.get('/fhitting-room', function(req, res, next) {

  var project = {
    href: '/',
    date: '2018',
    client: 'Fhitting Room',
    title: 'Fhitting Room',
    role: 'Design Lead, Front-end',
    prevProject: 'xbox-one-x',
    nextProject: 'disney-toybox',
    body: 'Fhitting Room tasked us to design and develop a new responsive web platform, replacing their existing website. The goal was to design a more intuitive and functional experience for guests and members alike while looking to better promote the brand’s value proposition. We worked directly with the Fhitting Room team to create a digital journey expanding and engaging more consumers, ultimately growing awareness for Fhitting Room.',
  }
  res.render('pages/fhitting_room', { project: project, images: [] })
});

router.get('/disney-toybox', function(req, res, next) {

  var project = {
    href: '/',
    date: '2017',
    client: 'Disney',
    title: 'Disney Toybox',
    role: 'Photography, Design, Animation',
    prevProject: 'fhitting-room',
    nextProject: 'westderm',
    body: 'Disney came to us asking to help come up with a new campaign focused around the release of their new toyline. The campaign was a relatively short timeline starting in early October and going live in mid November, just in time for the holidays. As the campaign was primarily going to be utilized around the holidays, we were coming up with creative ways to bring the characters and holidays to your house.',
  }
  res.render('pages/disney_toybox', { project: project, images: [] })
});

router.get('/westderm', function(req, res, next) {

  var project = {
    href: '/',
    date: '2018',
    client: 'West Dermatology',
    title: 'westdermatology.com',
    role: 'Design Lead, Front-end',
    prevProject: 'disney-toybox',
    nextProject: 'alpinestars-adaptive-stretch',
    body: 'West Dermatology had an interesting problem to solve: How do we have a corporate brand trickle down to many individual brands all under the same roof. This project presented many unique UX challenges but also design challenges. Given the scale of the site, we had to come up with creative ways to gain efficiencies in the design process. One of those was moving over to sketch for design and implementing a design system that would essentially allow us to dynamically update content and build new pages out faster than we ever could traditionally using photoshop. You can view the site <a href="westdermatology.com"><b>here</b></a>',
  }
  res.render('pages/westderm', { project: project, images: [] })
});

router.get('/alpinestars-adaptive-stretch', function(req, res, next) {

  var project = {
    href: '/',
    date: '2016',
    client: 'Alpinestars',
    title: 'Alpinestars Adaptive Stretch',
    role: 'Art Direction, Photography, Design',
    prevProject: 'westderm',
    nextProject: 'motoamerica',
    body: 'For 2017 Alpinestars was launching a new gear set which implemented the use of new innovative stretch fabrics which promoted comfortable adaptive flexibility for the rider. I was tasked to come up with a concept and execution to show the functionality of the innovative new fabrics. The fabrics were in select key areas which helped increase rider comfort in certain positions while on the bike. While stretch fabrics are common among other brands, Alpinestars reinvented the way the gear worked with the rider. Our goal was to show this through simple and intriguing imagery.',
  }
  res.render('pages/alpinestars_adaptive_stretch', { project: project, images: [] })
});

router.get('/motoamerica', function(req, res, next) {

  var project = {
    href: '/',
    date: '2015',
    title: 'Motoamerica',
    client: 'Motoamerica',
    prevProject: 'alpinestars-adaptive-stretch',
    nextProject: 'made-in-la',
    role: 'Design lead, Branding, Illustration',
    body: 'It was an honor to be able to influence a sport I love so much through my art and design. Coming from a strong racing heritage and successful racing career it seemed to be a perfect fit for me to help with the start of the new Pro American Motorcycle Championship. I was given a lot of freedom in this project creatively and had the opportunity to really push my capabilities as a designer. This project was completed over the course of nearly a year and involved everything from logo development, brand identity, sales & media decks, at track collateral, business collateral, print advertising, web advertising, websites, and supporting logos.',
  }
  res.render('pages/motoamerica', { project: project })
});

router.get('/made-in-la', function(req, res, next) {

  var project = {
    href: '/',
    date: '2016',
    title: 'Made In LA',
    client: 'Made In LA',
    role: 'Design lead. Branding',
    prevProject: 'motoamerica',
    nextProject: 'ken-block',
    body: 'Made in LA is a new Los Angeles based music group. Our mission for the Made in LA rebrand was very simple. We wanted to not only mark the beginning of a new artist but also to tell their story through a timeless icon. My goal was to create something which would represent their music, style and personality in a visually pleasing way. Made in LA is minimal, independant, defined and more importantly, new.',
  }
  res.render('pages/made_in_la', { project: project })
});

router.get('/ken-block', function(req, res, next) {

  var project = {
    href: '/',
    date: '2014',
    title: 'Ken Block x Hoonigan',
    client: 'Hoonigan',
    role: 'Illustration, Design',
    prevProject: 'made-in-la',
    nextProject: 'xbox-one-x',
    body: '2016 held an interesting year for Hoonigan; We were growing fast and gaining a lot of recognition in the motorsports industry. One of the highlights every year was releasing Ken Blocks new livery. The livery was an art piece that represented the brand and the team for the season and rolled over into all advertising for the year. Inspired by early generation 8-bit video games, zebra print, pop art and digital camo; the livery was a mashup that proved to stand out in a crowd.',
  }
  res.render('pages/ken_block', { project: project })
});

router.get('/archives', function(req, res, next) {

  var archive_project = [
    {
      title: 'Doritos Heatwave',
      category: 'website',
      src: '../images/projects/archives/archives-heatwave.jpg',
    },
    {
      title: 'Camera Control',
      category: 'website',
      src: '../images/projects/archives/archives-cameracontrol.jpg',
    },
    {
      title: 'Hyatt Residence Club',
      category: 'website',
      src: '../images/projects/archives/archives-hyatt.jpg',
    },
    {
      title: 'HP Science of Printing',
      category: 'website',
      src: '../images/projects/archives/archives-hpink.jpg',
    },
    {
      title: 'Tostitos Cinco',
      category: 'website',
      src: '../images/projects/archives/archives-tostitos.jpg',
    },
    {
      title: 'Cheetos Win What You See',
      category: 'website',
      src: '../images/projects/archives/archives-wwys.jpg',
    },
    {
      title: 'Alpinestars Protects',
      category: 'campaign',
      src: '../images/projects/archives/archives-febvre.jpg',
    },
    {
      title: 'Alpinestars Protects',
      category: 'campaign',
      src: '../images/projects/archives/archives-continent.jpg',
    },
    {
      title: 'Suzuki Xray',
      category: 'campaign',
      src: '../images/projects/archives/archives-xray.jpg',
    },
    {
      title: 'Suzuki GSXR-1000',
      category: 'campaign',
      src: '../images/projects/archives/archives-suzuki.jpg',
    },
    {
      title: 'Mitsubishi Owners Club',
      category: 'Branding',
      src: '../images/projects/archives/archives-mitsubishi.jpg',
    },
    {
      title: 'Hoonigan C-bar Drip',
      category: 'Branding',
      src: '../images/projects/archives/archives-drip.jpg',
    },
    {
      title: 'Hoonigan Hoonarchy',
      category: 'Branding',
      src: '../images/projects/archives/archives-hoonarchy.jpg',
    },
    {
      title: 'Hoonigan blueprint',
      category: 'illustration',
      src: '../images/projects/archives/archives-blueprint.jpg',
    },
    {
      title: 'High Performance Conditioning',
      category: 'Branding',
      src: '../images/projects/archives/archives-highperformance.jpg',
    },
    {
      title: 'Hotchkis',
      category: 'editorial',
      src: '../images/projects/archives/archives-hotchkis.jpg',
    },
  ];

  var project = {
    href: '/',
    prevProject: 'ken-block',
    nextProject: 'xbox-one-x',
  }
  res.render('pages/archives', { archive_project: archive_project, project: project })
});

module.exports = router;
