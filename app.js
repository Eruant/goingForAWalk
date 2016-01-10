const loop = require('./loop')
const state = require('./state')
const mob = require('./mob')

console.log('--- App start ---', new Date(), '---')

const init = () => {
  var i, len, mobs

  window.removeEventListener('DOMContentLoaded', init)

  const canvas = window.document.createElement('canvas')
  canvas.width = state.get('width')
  canvas.height = state.get('height')

  window.document.querySelector('body').appendChild(canvas)

  const ctx = canvas.getContext('2d')
  state.set('ctx', ctx)

  i = 0
  len = 10
  mobs = []
  for (; i < len; i++) {
    mobs[i] = mob.create(i, i, i + 10)
  }
  state.set('mobs', mobs)
  state.track('mobs')

  loop.start(state)
}

window.addEventListener('DOMContentLoaded', init)
