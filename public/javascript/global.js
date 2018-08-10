// var mediasrc = function () {
//   if (screen.width < 768) {
//     return "-mobile.jpg";
//   }

//   else if(screen.width > 768 && screen.width < 1400) {
//     return ".jpg";
//   }

//   else if( ) {
    
//   }

//   else {
//     return "-hd.jpg";
//   }
// }

window.onpageshow = function(event) {
  if (event.persisted) {
      $('body').css({ display: 'flex' });
  }
};

class Viewport {
  constructor(opts) {

    this.observer = new IntersectionObserver(this.cb.bind(this), {
      threshold: [0.1, 0.25, 0.5, 0.75, 1.0]
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

  // preload(entries) {
  //   entries.forEach(entry => {
  //     console.log(entry.intersectionRatio);
  //     if (entry.intersectionRatio > 0) {
  //       const target = entry.target
  //       const dataSrc = target.getAttribute('data-src')
  //       const src = dataSrc.indexOf('.gif') === -1 ? dataSrc + mediasrc() : dataSrc

  //       target.setAttribute('src', src)
  //       this.lazyObserver.unobserve(target)
  //     }
  //   })
  // }

  preload(entries) {
    entries.forEach(entry => {
      console.log(entry.intersectionRatio, 'lazy load');
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
    console.log('observed');
    if (target.classList.contains('observable') && !target.classList.contains('observed')) {
        target.classList.add('observed')
        this.observer.unobserve(target)

    }


    if (target.nodeName === 'VIDEO') {
      ratio <= 0.1 && !target.paused ? target.pause() : target.play();
      console.log('play/pause');
    }
  }
}

function checkScroll() {
  $('#back-to-top').css('opacity', window.scrollY > 720 ? 0.5 : 0)
}

// Document.Ready
$(function() {
  checkScroll()

  if(window.innerWidth >= 768) {

    // --- Parallax ---
    var controller = new ScrollMagic.Controller();

    $('.parallax-1').each(function(){
        var tween = new TimelineMax();

        tween.from($(this), 1, {y: '5%', ease: Power0.easeNone});

        var scene = new ScrollMagic.Scene({
            triggerElement: this,
            triggerHook: 1,
            duration: '125%',
        }).setTween(tween).addTo(controller);
    });


    $('.parallax-2').each(function(){
        var tween = new TimelineMax();

        tween.from($(this), 1, {y: '-20%', ease: Power0.easeNone});

        var scene = new ScrollMagic.Scene({
            triggerElement: this,
            triggerHook: 1,
            duration: '125%',
        }).setTween(tween).addTo(controller);
    });
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


$('.video').each(function(){
  this.onpause = this.removeEventListener('IntersectionObserver');
});
