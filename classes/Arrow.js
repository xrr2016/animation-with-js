class Arrow {
  constructor(x = 0, y = 0) {
    this.x = x
    this.y = y
    this.color = '#ffff00'
    this.rotation = 0
  }

  draw(context) {
    context.save()
    context.translate(this.x, this.y)
    context.rotate(this.rotation)

    context.lineWidth = 2
    context.fillStyle = this.color
    context.beginPath()
    context.moveTo(-50, -25)
    context.lineTo(0, -25)
    context.lineTo(0, -50)
    context.lineTo(50, 0)
    context.lineTo(0, 50)
    context.lineTo(0, 25)
    context.lineTo(-50, 25)
    context.lineTo(-50, -25)
    context.closePath()
    context.fill()
    context.stroke()

    context.restore()
  }
}