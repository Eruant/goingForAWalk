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
  const mobs = state.get('mobs')

  mobs.forEach(mob => {
    mob.position.x = mob.position.x + (mob.speed.x * timePassed)
    mob.position.y = mob.position.y + (mob.speed.y * timePassed)
  })

  state.set('mobs', mobs)
}

const render = (id) => {
  const ctx = state.get('ctx')
  const mobs = state.get('mobs')

  mobs.forEach(mob => {
    ctx.save()
    ctx.translate(mob.position.x, mob.position.y)
    ctx.fillStyle = mob.color
    ctx.fillRect(0, 0, mob.width, mob.height)
    ctx.restore()
  })
}

module.exports = {
  create: create,
  update: update,
  render: render
}
