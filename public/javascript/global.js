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
