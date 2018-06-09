// $(document).ready(function() {
//     $('.observer').removeClass('.observer').addClass('observed');
//   });


  $(window).scroll(function() {
    $('.observer').filter(checkVisible).removeClass('.observer-scroll').addClass('observed');
}).scroll();

function checkVisible() {
    var elm = this;
    var eval = eval || "visible";
    var vpH = $(window).height(), // Viewport Height
        st = $(window).scrollTop(), // Scroll Top
        y = $(elm).offset().top,
        elementHeight = $(elm).height();

    if (eval == "visible") return ((y < (vpH + st)) && (y > (st - elementHeight)));
}



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


    $(".fade-in--lazyload").each(function(i, ele) {
        if (inViewport(ele)) {
            // remove the fade-in class
            $(ele).removeClass('fade-in--lazyload')
        }
    })
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
