$(function(){
    filter = $('.filter-selected').attr('gallery-filter');

    $('.masonry-item').each( function() {

        if (filter == $(this).attr('gallery-category')) {
            $(this).show();
        } else {
            // $(this).hide();
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
              $(this).hide().addClass('fade-out-filter').show().removeClass('fade-out-filter').addClass('fade-in-filter');
          } else {
              $(this).removeClass('fade-in-filter').addClass('fade-out-filter').hide();
              if ($(this).attr('gallery-category') == filter) {
                $(this).hide().addClass('fade-out-filter').show().removeClass('fade-out-filter').addClass('fade-in-filter');
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
