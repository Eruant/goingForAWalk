var state = require('./state')

const create = (id, x, y) => {
  return {
    id: id,
    color: '#fff',
    width: 20,
    height: 40,
    position: {
      x: x || 0,
      y: y || 0
    },
    speed: {
      x: 0.5,
      y: 0.2
    }
  }
}

const update = (timePassed) => {
  const screenWidth = state.get('width')
  const screenHeight = state.get('height')

  state.set('mobs', state.get('mobs')
    .map(mob => {
      // add movement
      mob.position.x += (mob.speed.x * timePassed)
      mob.position.y += (mob.speed.y * timePassed)

      if (mob.position.x > screenWidth || mob.position.x < 0) {
        mob.position.x = (mob.position.x > screenWidth) ? screenWidth : 0
        mob.speed.x *= -1
      }

      if (mob.position.y > screenHeight || mob.position.y < 0) {
        mob.position.y = (mob.position.y > screenHeight) ? screenHeight : 0
        mob.speed.y *= -1
      }

      // add gravity
      mob.speed.y += 0.8

      // add friction
      mob.speed.x *= 0.95

      if (mob.speed.x < 0.001) {
        mob.speed.x = 0
      }
      if (mob.speed.y < 0.001) {
        mob.speed.y = 0
      }

      return mob
    })
  )
}

const render = (id) => {
  const ctx = state.get('ctx')
  const mobs = state.get('mobs')

  mobs.forEach(mob => {
    ctx.save()
    ctx.translate(mob.position.x, mob.position.y)
    ctx.fillStyle = mob.color
    ctx.fillRect(-(mob.width * 0.5), -(mob.height * 0.5), mob.width, mob.height)
    ctx.restore()
  })
}

module.exports = {
  create: create,
  update: update,
  render: render
}
