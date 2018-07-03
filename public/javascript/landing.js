// Reveal social buttons on name click
$("#name").click(function() {
  $("#social-button").css("opacity", "1");
  $(".social-links").toggleClass('social-links-observed');
})

$( document ).ready(function() {
// Glitch skewing on offest
var t1 = new TimelineMax({repeat: -1,repeatDelay: 5.3})
t1.to(".textglitch1", 0.1, {skewX:900,ease: Power4.easeInOut}).to(".textglitch1", 0.04, {skewX:0,ease: Power4.easeInOut})

var t2 = new TimelineMax({repeat: -1,repeatDelay: 5.32})
t2.to(".textglitch2", 0.1, {skewX:100,ease: Power4.easeInOut}).to(".textglitch2", 0.04, {skewX:0,ease: Power4.easeInOut})

var t3 = new TimelineMax({repeat: -1,repeatDelay: 5.31})
t3.to(".textglitch3", 0.1, {skewX:400,ease: Power4.easeInOut}).to(".textglitch3", 0.04, {skewX:0,ease: Power4.easeInOut})

var t4 = new TimelineMax({repeat: -1,repeatDelay: 5})
t4.to(".snippetglitch", 0.1, {skewX:700,ease: Power4.easeInOut})
  .to(".snippetglitch", 0.04, {skewX:0,ease: Power4.easeInOut})
  .to(".snippetglitch", 0.02, {x:-20})
  .to(".snippetglitch", 0.03, {x:0})
  .add("split", 0)
  .to(".snippetglitch", 0.02, {scaleY:1.1,ease: Power4.easeInOut})
  .to(".snippetglitch", 0.04, {scaleY:1,ease: Power4.easeInOut})
  .to(".snippetglitch", 0.1, {skewX:70,ease: Power4.easeInOut})
  .to(".snippetglitch", 0.04, {skewX:0,ease: Power4.easeInOut})
  .to(".snippetglitch", 0.04, {x:-20})
  .to(".snippetglitch", 0.04, {x:0})
  .add("split", 0)
  .to(".snippetglitch", 0.01, {scaleY:.4,ease: Power4.easeInOut})
  .to(".snippetglitch", 0.0, {scaleY:1,ease: Power4.easeInOut})
});
