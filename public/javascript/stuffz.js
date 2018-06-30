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
