const state = require('./state')
const mobs = require('./mobs')

module.exports = () => {
  const ctx = state.get('ctx')
  const width = state.get('width')
  const height = state.get('height')

  ctx.fillRect(0, 0, width, height)

  mobs.render()
}
