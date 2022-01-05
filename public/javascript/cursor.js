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

    $(this.$cursor).click(() => {
      this.video.paused ? this.play() : this.pause()
    })

    this.update()
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

  show(bool = true) {
    $(this.$cursor).css({
      opacity: +bool
    })
  }

  updateText(text) {
    if (this.text !== text) {
      this.text = $(this.$cursor).html(text)
    }
  }

  update(time) {
    const { x, y, width, height } = this.$el.getBoundingClientRect()

    this.cursorX = lerp(this.cursorX, mouse.x, .2)
    this.cursorY = lerp(this.cursorY, mouse.y, .2)

    const tx = this.cursorX - x - this.cursorWidth / 2
    const ty = this.cursorY - y - this.cursorHeight / 2

    this.updateText(this.video.paused ? 'Play' : 'Pause')
    this.show(contains(mouse, { x, y, width, height }))

    $(this.$cursor).css({
      transform: `translate3d(${tx}px, ${ty}px, 0)`
    })

    requestAnimationFrame(this.update.bind(this))
  }
}
