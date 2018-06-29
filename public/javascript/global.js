// Viewport monitors any and all elements with the classname
// 'observable' and when they enter the viewport they will transition
// in based on class names

const threshold = [0.0, 0.25, 0.5, 0.75, 1.0]

class Viewport {
  constructor(opts) {
    this.observer = 'IntersectionObserver' in window
    ? new IntersectionObserver(this.cb.bind(this), {
        threshold
    })
    : console.error('upgrade your browser you tool.')

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
      // TODO: make non magical
      const ratio = entry.boundingClientRect.height > entry.rootBounds.height ? 0 : 0.1
      console.log(entry.intersectionRatio, ratio)

      if (entry.intersectionRatio > ratio) {
        this.observe(entry.target)
      }
    })
  }

  observe(target) {
    if (target.classList.contains('observable') && !target.classList.contains('observed')) {
      target.classList.add('observed')
    //   this.observer.unobserve(target)
    }
  }
}

const viewport = new Viewport();



// --- Scroll to Top ---
function checkScroll() {
    if (window.scrollY > 720) {
        $('#back-to-top').css("opacity", 0.5)
    } else {
        $('#back-to-top').css("opacity", 0)
    }
}

$(function() {

    checkScroll()
    $(window).scroll(checkScroll)
    $('#back-to-top').click(function() {
        $("html, body").animate({
            scrollTop: "0"
        }, 500, "swing");
    });
})



// use if (window.width > 500) {
//     // Parallax

//     var controller = new ScrollMagic.Controller();

//     $('.parallax-1').each(function(){

//         var randomY = Math.floor(Math.random() * 6) + '0%';
//         var tween = new TimelineMax();

//         tween
//             .from($(this), 1, {y: '25%', ease: Power0.easeNone})
//         ;

//         var scene = new ScrollMagic.Scene({
//             triggerElement: this,
//             triggerHook: 1,
//             duration: '150%',
//         })

//     .setTween(tween)
//     .addTo(controller);
//     });


//     $('.parallax-2').each(function(){

//         var randomY = Math.floor(Math.random() * 6) + '0%';
//         var tween = new TimelineMax();

//         tween
//             .from($(this), 1, {y: '-25%', ease: Power0.easeNone})
//         ;

//         var scene = new ScrollMagic.Scene({
//             triggerElement: this,
//             triggerHook: 1,
//             duration: '150%',
//         })

//     .setTween(tween)
//     .addTo(controller);
//     });
// }
