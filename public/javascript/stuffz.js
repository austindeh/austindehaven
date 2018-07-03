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


/*
var audio = document.getElementById('background_audio');

document.getElementById('mute').addEventListener('click', function (e)
{
    e = e || window.event;
    audio.muted = !audio.muted;
    e.preventDefault();
}, false);

*/



// Hide scroll down button on scroll
// $(window).scroll(function() {
// 	if (window.scrollY > 50) {
// 	  $("#scroll-down").css("opacity", 0)
// 	} else {
// 	  $("#scroll-down").css("opacity", 1)
//   }
// })

// Scroll down to project on scroll down button click
// $("#scroll-down").click(function() {
//   $("html, body").animate({
//     scrollTop: $( $('[data-scroll-target]')).offset().top - 75
//   }, 500);
// });



// // Scroll Down Text Scramble
// class TextScramble {
//   constructor(el) {
//     this.el = el
//     this.chars = "!<$-_$/[]{}—=+*^?#_"
//     this.update = this.update.bind(this)
//   }
//   setText(newText) {
//     const oldText = this.el.innerText
//     const length = Math.max(oldText.length, newText.length)
//     const promise = new Promise((resolve) => this.resolve = resolve)
//     this.queue = []
//     for (let i = 0; i < length; i++) {
//       const from = oldText[i] || ""
//       const to = newText[i] || ""
//       const start = Math.floor(Math.random() * 40)
//       const end = start + Math.floor(Math.random() * 40)
//       this.queue.push({ from, to, start, end })
//     }
//     cancelAnimationFrame(this.frameRequest)
//     this.frame = 0
//     this.update()
//     return promise
//   }
//   update() {
//     let output = ""
//     let complete = 0

//     for (let i = 0, n = this.queue.length; i < n; i++) {
//       let { from, to, start, end, char } = this.queue[i]
//       if (this.frame >= end) {
//         complete++
//         output += to
//       } else if (this.frame >= start) {
//         if (!char || Math.random() < 0.28) {
//           char = this.randomChar()
//           this.queue[i].char = char
//         }
//         output += `<span class="dud">${char}</span>`
//       } else {
//         output += from
//       }
//     }

//     this.el.innerHTML = output
//     if (complete === this.queue.length) {
//       this.resolve()
//     } else {
//       this.frameRequest = requestAnimationFrame(this.update)
//       this.frame++
//     }
//   }
//   randomChar() {
//     return this.chars[Math.floor(Math.random() * this.chars.length)]
//   }
// }

// var el = document.querySelector(".scroll-down")

// if (el) {
//   var fx = new TextScramble(el)
//   var GlitchShuffleDelay = 500;
//   var phrases = ["⇃ Scroll Down  "]
//   var counter = 0
//   var next = function() {
//     fx.setText(phrases[counter]).then(function() {
//       setTimeout(next, 10000)
//     })
//     counter = (counter + 1) % phrases.length
//   }

//   setTimeout(next, GlitchShuffleDelay);
// }