// ===== Scroll to Top ====
$(window).scroll(function() {
    if ($(this).scrollTop() >= 720) {
        $('#back-to-top').fadeIn(1000);
    } else {
        $('#back-to-top').fadeOut(1000);
    }
});
$('#back-to-top').click(function() {
    $('body, html').animate({
        scrollTop : 0
    }, 500);
});
