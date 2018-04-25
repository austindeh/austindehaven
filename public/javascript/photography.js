$(function () {
    // $('.masonry-item').removeClass('fade-in-filter').addClass('fade-out-filter');
    filter = $('.filter-selected').attr('gallery-filter');

    $('.masonry-item').each(function () {
        if (filter == 'all' || $(this).attr('gallery-category') == filter) {
            $(this).show();
        } else {
            $(this).hide()
        }
    });
});

$('document').ready(function ($) {

    $('.filter-btn').on('click', function () {
        filter = $(this).attr('gallery-filter');
        $('.masonry-item').removeClass('fade-in-filter').addClass('fade-out-filter');

        $('.filter-btn').removeClass('filter-selected selected').addClass('underlined');
        $(this).removeClass('underlined').addClass('filter-selected selected');


        setTimeout(() => {
            $('.masonry-item').each(function () {
                if (filter == 'all' || $(this).attr('gallery-category') == filter) {
                    $(this).show().removeClass('fade-out-filter').addClass('fade-in-filter');
                } else {
                    $(this).hide()
                }
            });
        }, 500)
    });
});


[].forEach.call(document.querySelectorAll('img[data-src]'), function (img) {
    img.setAttribute('src', img.getAttribute('data-src'));
    img.onload = function () {
        img.removeAttribute('data-src');
    };
});
