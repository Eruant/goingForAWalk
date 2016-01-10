const state = require('./state')
const mob = require('./mob')

module.exports = (timePassed) => {
  const items = state.get('track')
  items.forEach(item => {
    switch (item) {
      case 'mobs': mob.update(timePassed); break
    }
  })
}
