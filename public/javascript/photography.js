function filterImages(filter) {
    $('img').each(function () {
        if (filter == 'all' || $(this).attr('gallery-category') === filter) {
            $(this).show().removeClass('observable').addClass('observed')
        } else {
            $(this).hide()
        }
    })
}

$(function() {
    let filter = $('.filter-selected').attr('gallery-filter')
    filterImages(filter)

    $('.filter-btn').on('click', function () {
        filter = $(this).attr('gallery-filter')

        $('img').removeClass('observed').addClass('observable')
        $('.filter-btn').removeClass('filter-selected').addClass('underlined')
        $(this).removeClass('underlined').addClass('filter-selected')

        setTimeout(() => {
            filterImages(filter)
        }, 500)
    })
})