

//Fade in / out page
$(function() {
  $('a').click(function(event) {
    event.preventDefault();
    newLocation = this.href;
    $('body').fadeOut(500, newpage);
  });
  function newpage() {  
    window.location = newLocation;
  }
});

// IO
class Viewport {
  constructor(opts) {
    this.observer = new IntersectionObserver(this.cb.bind(this), {
      threshold: [0.0, 0.25, 0.5, 0.75, 1.0]
    })

    this.observables = Array.from(document.querySelectorAll('.observable'))

    this.init()
  }

  init() {
    this.observables.map(observable => {
      this.observer.observe(observable)
    })
  }

  cb(entries) {
    entries.forEach(entry => {
      const ratio = entry.boundingClientRect.height > entry.rootBounds.height ? 0 : 0.1

      if (entry.intersectionRatio > ratio) {
        this.observe(entry.target)
      }
    })
  }

  observe(target) {
    if (target.classList.contains('observable') && !target.classList.contains('observed')) {
      target.classList.add('observed')
      this.observer.unobserve(target)
    }
  }
}

window.addEventListener('load', function() {
  new Viewport()
});


// --- Scroll to Top ---
function checkScroll() {
    $('#back-to-top').css('opacity', window.scrollY > 720 ? 0.5 : 0)
}

$(function() {
    checkScroll()

    $('#back-to-top').click(function() {
      $('html, body').animate({
        scrollTop: '0'
      }, 500, 'swing')
    })

    $(window).scroll(checkScroll)
});



if(window.innerWidth >= 768) {
  
  // --- Parallax ---
  var controller = new ScrollMagic.Controller();

  $('.parallax-1').each(function(){
      var tween = new TimelineMax();

      tween
          .from($(this), 1, {y: '5%', ease: Power0.easeNone})
      ;

      var scene = new ScrollMagic.Scene({
          triggerElement: this,
          triggerHook: 1,
          duration: '125%',
      })

  .setTween(tween)
  .addTo(controller);
  });


  $('.parallax-2').each(function(){
      var tween = new TimelineMax();

      tween
          .from($(this), 1, {y: '-20%', ease: Power0.easeNone})
      ;

      var scene = new ScrollMagic.Scene({
          triggerElement: this,
          triggerHook: 1,
          duration: '125%',
      })

  .setTween(tween)
  .addTo(controller);
  });
}