// Project Navbar
var lastScrollTop = 1;

window.addEventListener("scroll", function(){  
   var st = window.pageYOffset || document.documentElement.scrollTop + '10px';  
   if (st > lastScrollTop){
       document.getElementById("project-navigation").style.top = "-80px";
   } else {
      document.getElementById("project-navigation").style.top = "0px";
   }
   lastScrollTop = st;
}, false);


var flkty = new Flickity( '.carousel', {
      freeScroll: true,
      freeScrollFriction: 0.05,
      pageDots: false,
      prevNextButtons: false, 
      imagesLoaded: true,
  })