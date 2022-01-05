if ( /^((?!chrome|android).)*safari/i.test(navigator.userAgent)) {
  window.onpageshow = function(event) {
    if (event.persisted) {
        $('body').css({ display: 'flex' });
    }
  };
}

class Viewport {
  constructor(opts) {

    this.observer = new IntersectionObserver(this.cb.bind(this), {
      threshold: [0.05, 0.25, 0.5, 0.75, 1.0]
    })

    this.lazyObserver = new IntersectionObserver(this.preload.bind(this), {
      rootMargin: '500px 0px',
      threshold: [0.1, 0.25, 0.5, 0.75, 1.0]
    })

    this.lazies = Array.from(document.querySelectorAll('.lazy'))
    this.observables = Array.from(document.querySelectorAll('.observable'))

    this.init()
  }

  init() {
    this.observables.map(observable => {
      this.observer.observe(observable)
    })

    this.lazies.map(observable => {
      this.lazyObserver.observe(observable)
    })
  }

  preload(entries) {
    entries.forEach(entry => {
      if (entry.intersectionRatio > 0) {
        let target = entry.target
        target.setAttribute('src', target.getAttribute('data-src'))
        this.lazyObserver.unobserve(target)
      }
    })
  }


  cb(entries) {
    entries.forEach(entry => {
      if (entry.intersectionRatio > 0) {
        this.observe(entry.target, entry.intersectionRatio)
      }
    })
  }

  observe(target, ratio) {
    if (target.classList.contains('observable') && !target.classList.contains('observed')) {
      target.classList.add('observed');
    }


    if (target.nodeName === 'VIDEO') {
      ratio <= 0.25 && !target.paused ? target.pause() : target.play()
    }
  }
}

function lerp(start, end, amt) {
  return (1 - amt) * start + amt * end
}

function checkScroll() {
  $('#back-to-top').css('opacity', window.scrollY > 720 ? 1 : 0)
}

function contains (point, rect) {
  const { x, y } = point

  return rect.x <= x && x <= rect.x + rect.width &&
         rect.y <= y && y <= rect.y + rect.height
}

var mouse = { x: 0, y: 0, moved: false };

// Document.Ready
$(function() {
  checkScroll()

  if(window.innerWidth >= 768) {

    var rect = $('body')[0].getBoundingClientRect();

    $("body").mousemove(function(e) {
      mouse.moved = true;
      mouse.x = e.clientX //- rect.left;
      mouse.y = e.clientY //- rect.top;
    });


    TweenLite.ticker.addEventListener('tick', function(){
      if (mouse.moved){
        parallaxIt(".parallax-1", -50);
        parallaxIt(".parallax-2", -30);
        parallaxIt(".parallax-3", -60);
        parallaxIt(".parallax-4", -40);
      }
      mouse.moved = false;
    });

    function parallaxIt(target, movement) {
      TweenMax.to(target, 0.5, {
        x: (mouse.x - rect.width / 2) / rect.width * movement,
        y: (mouse.y - rect.height / 2) / rect.height * movement
      });
    }

    $(window).on('resize scroll', function(){
      rect = $('body')[0].getBoundingClientRect();
    })

  //   // --- Parallax ---
  //   var controller = new ScrollMagic.Controller();

  //   $('.parallax-1').each(function(){
  //       var tween = new TimelineMax();

  //       tween.from($(this), 1, {y: '10%', ease: Power0.easeNone});

  //       var scene = new ScrollMagic.Scene({
  //           triggerElement: this,
  //           triggerHook: 1,
  //           duration: '75%',
  //       }).setTween(tween).addTo(controller);
  //   });


  //   $('.parallax-2').each(function(){
  //       var tween = new TimelineMax();

  //       tween.from($(this), 1, {y: '-10%', ease: Power0.easeNone});

  //       var scene = new ScrollMagic.Scene({
  //           triggerElement: this,
  //           triggerHook: 1,
  //           duration: '175%',
  //       }).setTween(tween).addTo(controller);
  //   });
  }

  $(window).scroll(checkScroll);

  $('#back-to-top').click(function() {
    $('html, body').animate({
      scrollTop: '0'
    }, 1250, 'swing');
  });

  $('a').click(function(event) {
    event.preventDefault();
    newLocation = this.href;

    $('body').fadeOut(500, function() {
      window.location = newLocation;
    });
  });

});

window.addEventListener('load', function() {
  if (('IntersectionObserver' in window)) {
    new Viewport();
  }
});
