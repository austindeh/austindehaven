// Project Navbar
// var prev = 0;
// var $window = $(window);
// var nav = $('.project-navigation');

// $window.on('scroll', function(){
//   var scrollTop = $window.scrollTop();
//   nav.toggleClass('project-navigation-hidden', scrollTop > prev);
//   prev = scrollTop;
// });

var lastScrollTop = 0;

window.addEventListener("scroll", function(){  
   var st = window.pageYOffset || document.documentElement.scrollTop + '10px';  
   if (st > lastScrollTop){
       document.getElementById("project-navigation").style.top = "-80px";
   } else {
      document.getElementById("project-navigation").style.top = "0px";
   }
   lastScrollTop = st;
}, false);



