$(function(){
    filter = $('.filter-selected').attr('gallery-filter');

    $('.masonry-item').each( function() {

        if (filter == $(this).attr('gallery-category')) {
            $(this).fadeIn();
        } else {
            $(this).hide();
        }
    });
  });

$('document').ready( function($) {

  $('.filter-btn').on('click', function() {
      $('.filter-btn').removeClass('filter-selected selected').addClass('underlined');
      $(this).removeClass('underlined').addClass('filter-selected selected');
      filter = $(this).attr('gallery-filter');

      $('.masonry-item').each( function() {
          if (filter == 'all') {
              $(this).show();
          } else {
              $(this).hide();
              if ($(this).attr('gallery-category') == filter) {
                  $(this).show();
              }
          }
      });
  });
});


[].forEach.call(document.querySelectorAll('img[data-src]'),    function(img) {
  img.setAttribute('src', img.getAttribute('data-src'));
  img.onload = function() {
    img.removeAttribute('data-src');
  };
});
