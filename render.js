const state = require('./state')
const mob = require('./mob')

module.exports = () => {
  const ctx = state.get('ctx')
  const width = state.get('width')
  const height = state.get('height')

  ctx.fillRect(0, 0, width, height)

  const items = state.get('track')
  items.forEach(item => {
    switch (item) {
      case 'mobs':
        mob.render()
        break
    }
  })
}
