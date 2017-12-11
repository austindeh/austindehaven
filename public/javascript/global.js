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
        $(window).animate({
            scrollY : 0
        }, 500);
    });
})
