// Reveal social buttons on name click
$("#name").click(function() {
  $("#social-button").css("opacity", "1");
  $(".social-links").toggleClass('social-links-observed');
})

// $( document ).ready(function() {
// // Glitch skewing on offest
// var t1 = new TimelineMax({repeat: -1,repeatDelay: 5.3})
// t1.to(".textglitch1", 0.1, {skewX:900,ease: Power4.easeInOut}).to(".textglitch1", 0.04, {skewX:0,ease: Power4.easeInOut})

// var t2 = new TimelineMax({repeat: -1,repeatDelay: 5.32})
// t2.to(".textglitch2", 0.1, {skewX:100,ease: Power4.easeInOut}).to(".textglitch2", 0.04, {skewX:0,ease: Power4.easeInOut})

// var t3 = new TimelineMax({repeat: -1,repeatDelay: 5.31})
// t3.to(".textglitch3", 0.1, {skewX:400,ease: Power4.easeInOut}).to(".textglitch3", 0.04, {skewX:0,ease: Power4.easeInOut})

// var t4 = new TimelineMax({repeat: -1,repeatDelay: 5})
// t4.to(".snippetglitch", 0.1, {skewX:700,ease: Power4.easeInOut})
//   .to(".snippetglitch", 0.04, {skewX:0,ease: Power4.easeInOut})
//   .to(".snippetglitch", 0.02, {x:-20})
//   .to(".snippetglitch", 0.03, {x:0})
//   .add("split", 0)
//   .to(".snippetglitch", 0.02, {scaleY:1.1,ease: Power4.easeInOut})
//   .to(".snippetglitch", 0.04, {scaleY:1,ease: Power4.easeInOut})
//   .to(".snippetglitch", 0.1, {skewX:70,ease: Power4.easeInOut})
//   .to(".snippetglitch", 0.04, {skewX:0,ease: Power4.easeInOut})
//   .to(".snippetglitch", 0.04, {x:-20})
//   .to(".snippetglitch", 0.04, {x:0})
//   .add("split", 0)
//   .to(".snippetglitch", 0.01, {scaleY:.4,ease: Power4.easeInOut})
//   .to(".snippetglitch", 0.0, {scaleY:1,ease: Power4.easeInOut})
// });



// Hide scroll down button on scroll
$(window).scroll(function() {
	if (window.scrollY > 50) {
    $("#scroll-down").fadeOut(500)
	} else {
    $("#scroll-down").fadeIn(500)
  }
})

// Scroll down to project on scroll down button click
$("#scroll-down").click(function() {
  $("html, body").animate({
    scrollTop: $( $('[data-scroll-target]')).offset().top - 75
  }, 1250, "swing");
});


// Scroll Down Text Scramble
class TextScramble {
  constructor(el) {
    this.el = el
    this.chars = "!<$-_$/[]{}—=+*^?#_"
    this.update = this.update.bind(this)
  }
  setText(newText) {
    const oldText = this.el.innerText
    const length = Math.max(oldText.length, newText.length)
    const promise = new Promise((resolve) => this.resolve = resolve)
    this.queue = []
    for (let i = 0; i < length; i++) {
      const from = oldText[i] || ""
      const to = newText[i] || ""
      const start = Math.floor(Math.random() * 40)
      const end = start + Math.floor(Math.random() * 40)
      this.queue.push({ from, to, start, end })
    }
    cancelAnimationFrame(this.frameRequest)
    this.frame = 0
    this.update()
    return promise
  }
  update() {
    let output = ""
    let complete = 0

    for (let i = 0, n = this.queue.length; i < n; i++) {
      let { from, to, start, end, char } = this.queue[i]
      if (this.frame >= end) {
        complete++
        output += to
      } else if (this.frame >= start) {
        if (!char || Math.random() < 0.28) {
          char = this.randomChar()
          this.queue[i].char = char
        }
        output += `<span class="dud">${char}</span>`
      } else {
        output += from
      }
    }

    this.el.innerHTML = output
    if (complete === this.queue.length) {
      this.resolve()
    } else {
      this.frameRequest = requestAnimationFrame(this.update)
      this.frame++
    }
  }
  randomChar() {
    return this.chars[Math.floor(Math.random() * this.chars.length)]
  }
}

var el = document.querySelector(".scroll-down")

if (el) {
  var fx = new TextScramble(el)
  var GlitchShuffleDelay = 500;
  var phrases = ["↓ Scroll Down  "]
  var counter = 0
  var next = function() {
    fx.setText(phrases[counter]).then(function() {
      setTimeout(next, 10000)
    })
    counter = (counter + 1) % phrases.length
  }

  setTimeout(next, GlitchShuffleDelay);
}

