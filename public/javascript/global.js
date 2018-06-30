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
      const ratio = entry.boundingClientRect.height > entry.rootBounds.height ? 0 : 0.0

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

// --- Scroll to Top ---
function checkScroll() {
    $('#back-to-top').css('opacity', window.scrollY > 720 ? 0.5 : 0)
}

$(function() {
    new Viewport()
    checkScroll()

    $('#back-to-top').click(function() {
      $('html, body').animate({
        scrollTop: '0'
      }, 500, 'swing')
    })

    $(window).scroll(checkScroll)
})
