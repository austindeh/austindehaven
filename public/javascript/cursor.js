class VideoCursor {
  constructor(el) {

    this.$el = el
    this.$cursor = $(el).find('.cursor')
    this.cursor = this.$cursor.get(0)
    this.$video = $(el).find('video')
    this.video = this.$video.get(0)

    const { x, y, width, height } = this.cursor.getBoundingClientRect()
    this.cursorX = x
    this.cursorY = y
    this.cursorWidth = width
    this.cursorHeight = height

    this.text = $(el).html() || ''

    // TOOD: fine tweek this threshold (when it triggers) here
    this.observer = new IntersectionObserver(this.cb.bind(this), {
      threshold: [0.05, 0.25, 0.5, 0.75]
    })

    this.init()
  }

  init() {
    this.updateText('Play')

    this.observer.observe(this.$el)

    $(this.$el).hover(
      e => {
        if (!e.target.classList.contains('cursor')) {
          this.show()
        }
      },
      e => {
        if (!e.target.classList.contains('cursor')) {
          this.hide()
        }
      }
    )

    $(this.$el).mousemove(e => {
      const { clientX: x, clientY: y } = e

      this.update({ x, y })
    })

    $(this.$cursor).click(() => {
      this.video.paused ? this.play() : this.pause()
    })

    window.requestAnimationFrame(this.update.bind(this))
  }

  cb(entries) {
    entries.forEach(entry => {
      console.log(entry.intersectionRatio)

      // TOOD: fine tweek this ratio here
      entry.intersectionRatio < 0.5
        ? this.scaleDown()
        : this.scaleUp()
    })
  }

  scaleUp() {
    const bodyPadding = $('.body-width').innerWidth() - $('.body-width').width()
    const width = $(this.$el).width()
    const scale = 1 + bodyPadding / width

    console.log(scale)

    this.$video.css({
      transform: `scale(${scale})`
    })
  }

  scaleDown() {
    this.$video.css({
      transform: `scale(1)`
    })
  }

  play() {
    this.video.play()
    this.updateText('Pause')
  }

  pause() {
    this.video.pause()
    this.updateText('Play')
  }

  hide() {
    $(this.$cursor).css({
      opacity: 0
    })
  }

  show() {
    $(this.$cursor).css({
      opacity: 1
    })
  }

  updateText(text) {
    if (this.text !== text) {
      this.text = $(this.$cursor).html(text)
    }
  }

  update(time) {
    const { top, left } = this.$el.getBoundingClientRect()

    // not sure why this isn't lerping, maybe requestAnimationFrame is happening too fast?
    this.cursorX = lerp(this.cursorX, mouse.x, .1)
    this.cursorY = lerp(this.cursorY, mouse.y, .1)

    const x = this.cursorX - left - this.cursorWidth / 2
    const y = this.cursorY - top - this.cursorHeight / 2

    const text = this.video.paused ? 'Play' : 'Pause'
    this.updateText(text)

    $(this.$cursor).css({
      transform: `translate3d(${x}px, ${y}px, 0)`
    })

    window.requestAnimationFrame(this.update.bind(this))

  }
}
