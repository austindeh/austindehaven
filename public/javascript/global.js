// --- Scroll to Top ---
$(function() {
    $(window).scroll(function() {
        if (window.scrollY > 720) {
          $('#back-to-top').css("opacity", 0.5)
        } else {
          $('#back-to-top').css("opacity", 0)
        }
    })

    $('#back-to-top').click(function() {
        $(window).animate({
            scrollTop : 0
        }, 500);
    });
})
