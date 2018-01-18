jQuery('document').ready( function($) {
  $('.filter-btn').on('click', function() {
      $('.filter-btn').removeClass('filter-selected selected').addClass('underlined');
      $(this).removeClass('underlined').addClass('filter-selected selected');
      filter = $(this).attr('gallery-filter');

      $('.masonry-item').each( function() {
          if (filter == 'all') {
              $(this).fadeIn();
          } else {
              $(this).hide();
              if ($(this).attr('gallery-category') == filter) {
                  $(this).fadeIn();
              }
          }
      });
  });
});
