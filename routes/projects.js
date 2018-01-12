var express = require('express');
var router = express.Router();
var archives = require('./archives');


router.get('/alpinestars-adaptive-stretch', function(req, res, next) {
  var project = {
    title: 'Alpinestars Adaptive Stretch',
    body: 'For 2017 Alpinestars was launching a new gear set which implemented the use of new innovative stretch fabrics which promoted comfortable adaptive flexibility for the rider. I was tasked to come up with a concept and execution to show the functionality of the innovative new fabrics. The fabrics were in select key areas which helped increase rider comfort in certain positions while on the bike. While stretch fabrics are common among other brands, Alpinestars reinvented the way the gear worked with the rider. Our goal was to show this through simple and intriguing imagery.',
    client: 'Alpinestars',
    date: '2016',
    role: 'Art Direction, Photography, Design',
    prevProject: 'archives',
    nextProject: 'made-in-la',

  }
  res.render('project_pages/alpinestars_adaptive_stretch', { project: project, images: [] })
});

router.get('/made-in-la', function(req, res, next) {
  var project = {
    title: 'Made In LA',
    body: 'Made in LA is a new Los Angeles based music group. Our mission for the Made in LA rebrand was very simple. We wanted to not only mark the beginning of a new artist but also to tell their story through a timeless icon. My goal was to create something which would represent their music, style and personality in a visually pleasing way. Made in LA is minimal, independant, defined and more importantly, new.',
    client: 'Made In LA',
    date: '2016',
    role: 'Art Direction, Design',
    prevProject: 'alpinestars-adaptive-stretch',
    nextProject: 'motoamerica',
  }
  res.render('project_pages/made_in_la', { project: project })
});

router.get('/motoamerica', function(req, res, next) {
  var project = {
    title: 'Motoamerica',
    body: 'It was an honor to be able to influence a sport I love so much through my art and design. Coming from a strong racing heritage and successful racing career it seemed to be a perfect fit for me to help with the start of the new Pro American Motorcycle Championship. I was given a lot of freedom in this project creatively and had the opportunity to really push my capabilities as a designer. This project was completed over the course of nearly a year and involved everything from logo development, brand identity, sales & media decks, at track collateral, business collateral, print advertising, web advertising, websites, and supporting logos.',
    client: 'Motoamerica',
    date: '2015',
    role: 'Art Direction, Branding, Design',
    prevProject: 'made-in-la',
    nextProject: 'ken-block',
  }
  res.render('project_pages/motoamerica', { project: project })
});

router.get('/ken-block', function(req, res, next) {
  var project = {
    title: 'Ken Block x Hoonigan',
    body: 'Made in LA is a new Los Angeles based music group. Our mission for the Made in LA rebrand was very simple. We wanted to not only mark the beginning of a new artist but also to tell their story through a timeless icon. My goal was to create something which would represent their music, style and personality in a visually pleasing way. Made in LA is minimal, independant, defined and more importantly, new.',
    client: 'Hoonigan',
    date: '2014',
    role: 'Illustration, Design',
    prevProject: 'motoamerica',
    nextProject: 'archives',
  }
  res.render('project_pages/ken_block', { project: project })
});

router.get('/archives', function(req, res, next) {

  var archive_project = [
    {
      title: 'Disney Store Toybox - Coming Soon',
      year: '2017',
      src: 'images/home/disney_toybox.jpg',
      href: '',
    },

    {
      title: 'Disney Store Toybox - Coming Soon',
      year: '2017',
      src: 'images/home/disney_toybox.jpg',
      href: '',
    },

    {
      title: 'Disney Store Toybox - Coming Soon',
      year: '2017',
      src: 'images/home/disney_toybox.jpg',
      href: '',
    },

    {
      title: 'Disney Store Toybox - Coming Soon',
      year: '2017',
      src: 'images/home/disney_toybox.jpg',
      href: '',
    }

    ];


    var project = {
      prevProject: 'ken_block',
      nextProject: 'alpinestars_adaptive_stretch',
    }

  console.log('asdf');
  res.render('project_pages/archives', { archive_project: archive_project, project: project })
});

module.exports = router;
