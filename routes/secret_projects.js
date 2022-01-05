var express = require('express');
var router = express.Router();
// var archives = require('./archives');

router.get('/secret-fair-shopping', function(req, res, next) {
  // Require Auth for view or redirect to gateway
  var isAuth = req.cookies.authenticated;
  if (!isAuth) {
    return res.redirect('/gateway?redirect_to=%2Fproject%2Fsecret-fair-shopping');
  }

  var project = {
    href: '/secret',
    date: 'Work in Progress',
    client: 'Fair',
    title: 'Fair Adaptive Shopping',
    body: 'Fair caters to a very broad and diversified customer base. While this is a good problem to have, it poses a lot of difficulties within the shopping experience. This includes vast and complex flows as well as decision fatigue and difficulty finding relevant information. To solve this, we worked to create an ever-changing personalized shopping experience powered by our recommendation engine. The system allows for seamless changes within vehicle recommendations as well as the way information is presented catering to each individual customers needs. The logic organizes and updates personas with a weighted probability function to ensure that cohorts can be fluid.',
    role: 'Design & Strategy Lead',
    prevProject: 'secret-westderm',
    nextProject: 'secret-fair-go',
  }
  res.render('pages/fair_shopping', { project: project, images: [] })
});

router.get('/secret-albertsons', function(req, res, next) {
  // Require Auth for view or redirect to gateway
  var isAuth = req.cookies.authenticated;
  if (!isAuth) {
    return res.redirect('/gateway?redirect_to=%2Fproject%2Fsecret-albertsons');
  }

  var project = {
    href: '/secret',
    date: '2021',
    client: 'Albertsons',
    title: 'Albertsons App',
    body: 'Albertsons is one of the largest food and drug retailers in the US, feeding more than 15% of the US (49M customers), employing more than 270,000 people. They approached YML to help unify their outdated and disjointed digital ecosystem into a more cohesive, scalable experience.',
    role: 'Design Lead',
    prevProject: 'secret-fair-shopping',
    nextProject: 'secret-audi',
  }
  res.render('pages/albertsons', { project: project, images: [] })
});

router.get('/secret-champion', function(req, res, next) {
  // Require Auth for view or redirect to gateway
  var isAuth = req.cookies.authenticated;
  if (!isAuth) {
    return res.redirect('/gateway?redirect_to=%2Fproject%2Fsecret-champion');
  }

  var project = {
    href: '/secret',
    date: '2021',
    client: 'Champion',
    title: 'Champion.com',
    body: 'Partnered with Uber to create a product that enables drivers’ to get a car in a seamless, convenient and accessible manner across the U.S. Since our customers were only rideshare drivers for Uber we worked closely with Uber team to create and experience that integrated directly with Uber and allowed customers to easily and quickly get a rideshare vehicle. The approach to the design was clean, minimal, and clear, resulting in an easy and friendly user experience.',
    role: 'Design Lead',
    prevProject: 'secret-fair-shopping',
    nextProject: 'secret-audi',
  }
  res.render('pages/champion', { project: project, images: [] })
});

router.get('/secret-fair-go', function(req, res, next) {
  // Require Auth for view or redirect to gateway
  var isAuth = req.cookies.authenticated;
  if (!isAuth) {
    return res.redirect('/gateway?redirect_to=%2Fproject%2Fsecret-fair-go');
  }

  var project = {
    href: '/secret',
    date: '2019',
    client: 'Fair / Uber',
    title: 'Fair Go',
    body: 'Partnered with Uber to create a product that enables drivers’ to get a car in a seamless, convenient and accessible manner across the U.S. Since our customers were only rideshare drivers for Uber we worked closely with Uber team to create and experience that integrated directly with Uber and allowed customers to easily and quickly get a rideshare vehicle. The approach to the design was clean, minimal, and clear, resulting in an easy and friendly user experience.',
    role: 'Design & Development',
    prevProject: 'secret-fair-shopping',
    nextProject: 'secret-audi',
  }
  res.render('pages/fair_go', { project: project, images: [] })
});

router.get('/secret-audi', function(req, res, next) {
  // Require Auth for view or redirect to gateway
  var isAuth = req.cookies.authenticated;
  if (!isAuth) {
    return res.redirect('/gateway?redirect_to=%2Fproject%2Fsecret-audi');
  }

  var project = {
    href: '/secret',
    date: '2019',
    client: 'Audi',
    title: 'Audi Multi Media Interface',
    body: 'Audi leads the auto industry in technology packages promoting luxury, convenience, and safety in all corners of the world. We worked to reimagine the infotainment systems and provide high fidelity and easy to use design at the touch of a finger in all Audi model vehicles.',
    role: 'Design Lead',
    prevProject: 'secret-fair-go',
    nextProject: 'secret-xbox-one-x',
  }
  res.render('pages/audi', { project: project, images: [] })
});

router.get('/secret-xbox-one-x', function(req, res, next) { 
  // Require Auth for view or redirect to gateway
  var isAuth = req.cookies.authenticated;
  if (!isAuth) {
    return res.redirect('/gateway?redirect_to=%2Fproject%2Fsecret-xbox-one-x');
  }

  var project = {
    href: '/secret',
    date: '2017',
    client: 'Microsoft / Pepsi',
    title: 'Xbox One X',
    body: 'Microsoft (in partnership with PepsiCo) wanted to build buzz around the launch of the new Xbox One X console by giving fans the chance to bid and win Xbox One X - every 60 seconds - before public sale. The core challenge was in designing a fair gameplay that deterred bots, cheaters, and sweeps junkies.',
    role: 'Designer, Animator',
    prevProject: 'secret-audi',
    nextProject: 'secret-westderm',
  }
  res.render('pages/xbox_one_x', { project: project, images: [] })
});

router.get('/secret-westderm', function(req, res, next) {
  // Require Auth for view or redirect to gateway
  var isAuth = req.cookies.authenticated;
  if (!isAuth) {
    return res.redirect('/gateway?redirect_to=%2Fproject%2Fsecret-westderm');
  }

  var project = {
    href: '/secret',
    date: '2018',
    client: 'West Dermatology',
    title: 'Westdermatology Franchise',
    role: 'Design Lead & Development',
    prevProject: 'secret-xbox-one-x',
    nextProject: 'secret-fair-shopping',
    body: 'West Dermatology had an interesting problem to solve: How do we have a corporate brand trickle down to many individual brands all under the same roof. This project presented many unique UX challenges but also design challenges. Given the scale of the site, we had to come up with creative ways to gain efficiencies in the design process. One of those was moving over to sketch for design and implementing a design system that would essentially allow us to dynamically update content and build new pages out faster than we ever could traditionally using photoshop. You can view the site <a href="westdermatology.com"><b>here</b></a>',
  }
  res.render('pages/westderm', { project: project, images: [] })
});

router.get('/secret-flowcharts', function(req, res, next) {
  // Require Auth for view or redirect to gateway
  var isAuth = req.cookies.authenticated;
  if (!isAuth) {
    return res.redirect('/gateway?redirect_to=%2Fproject%2Fsecret-flowcharts');
  }

  var project = {
    href: '/secret',
    date: '2021',
    client: 'Personal',
    title: 'Flowcharts & Process Presentation',
    role: 'N/A',
    prevProject: 'secret-xbox-one-x',
    nextProject: 'secret-fair-shopping',
    body: 'Process is super crucial when designing for and solving a wide variety of problems. Jump into a presentation with me to learn a little bit about the process I use!',
  }
  res.render('pages/flowcharts', { project: project, images: [] })
});

module.exports = router;