// Apply Fade In Animation
$(window).scroll(function() {
    $('.observer').filter((i, ele) => inViewport(ele)).removeClass('.observer-scroll').addClass('observed');
}).scroll();


//  Check Scroll
function inViewport(ele) {
    const rect = ele.getBoundingClientRect()
    return (rect.top >= 0 && rect.top <= window.innerHeight) && (rect.bottom >= 0)
}


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
        }, 500);
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
