var state = require('./state')
var render = require('./render')
var update = require('./update')

const tick = (timestamp) => {
  window.requestAnimationFrame((timestamp) => { tick(timestamp) })

  const timePassed = new Date().getTime() - state.get('startTime')
  const delta = timestamp - timePassed

  state.set('timeSinceLastUpdate', state.get('delta') + delta)

  const timeSinceLastUpdate = state.get('timeSinceLastUpdate')
  if (timeSinceLastUpdate >= state.get('frameTime')) {
    update(timeSinceLastUpdate)
    state.set('timeSinceLastUpdate', 0)
  }

  render()
}

const start = () => {
  state.set('mode', 'playing')
  state.set('startTime', new Date().getTime())
  tick()
}

const stop = () => {
  state.set('mode', 'stopped')
}

const pause = () => {
  state.set('mode', 'paused')
}

module.exports = {
  start: start,
  stop: stop,
  pause: pause
}
