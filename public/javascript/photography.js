function loadImages() {
    Array.from(document.querySelectorAll('img[data-src]')).map(img => {
        img.setAttribute('src', img.getAttribute('data-src'))
        img.onload = function() { img.removeAttribute('data-src') }
    })
}

function filterImages(filter) {
    $('img').each(function () {
        if (filter == 'all' || $(this).attr('gallery-category') === filter) {
            $(this).show().removeClass('fade-out-filter').addClass('fade-in-filter')
        } else {
            $(this).hide()
        }
    })
}

$(function() {
    let filter = $('.filter-selected').attr('gallery-filter')
    loadImages()
    filterImages(filter)

    $('.filter-btn').on('click', function () {
        filter = $(this).attr('gallery-filter')

        $('img').removeClass('fade-in-filter').addClass('fade-out-filter')
        $('.filter-btn').removeClass('filter-selected selected').addClass('underlined')
        $(this).removeClass('underlined').addClass('filter-selected selected')

        setTimeout(() => {
            filterImages(filter)
        }, 500)
    })
})
