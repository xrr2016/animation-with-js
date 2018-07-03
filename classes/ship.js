class Ship {
  constructor(options = {}) {
    this.options = Object.assign({}, Ship._options, options)
    this.x = this.options.x
    this.y = this.options.y
    this.width = this.options.width
    this.height = this.options.height
    this.rotation = this.options.rotation
    this.showFlame = this.options.showFlame
  }

  draw(context) {
    context.save()
    context.translate(this.x, this.y)
    context.rotate(this.rotation)
    context.lineWidth = 1
    context.strokeStyle = '#000'
    context.beginPath()
    context.moveTo(10, 0)
    context.lineTo(-10, 10)
    context.lineTo(-5, 0)
    context.lineTo(-10, -10)
    context.lineTo(10, 0)
    context.stroke()
    if (this.showFlame) {
      context.beginPath()
      context.moveTo(-7.5, -5)
      context.lineTo(-15, 0)
      context.lineTo(-7.5, 5)
      context.stroke()
    }
    context.restore()
  }
}

Ship._options = {
  x: 0,
  y: 0,
  width: 25,
  height: 25,
  rotation: 0,
  showFlame: false
}