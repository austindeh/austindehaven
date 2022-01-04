// JS specific for Secret.ejs
$(function() {
  const cursors = $('.video-cursor')

  Array.from(cursors).forEach($el => {
    const cursor = new VideoCursor($el)

    setInterval(cursor.update.bind(cursor), 1000 / 60)
  })
})
