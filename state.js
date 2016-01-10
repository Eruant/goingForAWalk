var state = {
  width: 600,
  height: 400,
  ctx: null,
  mode: 'paused',
  startTime: null,
  lastUpdate: new Date().getTime(),
  delta: 0,
  timeSinceLastUpdate: 0,
  frameTime: (1000 / 60),
  mobs: [],
  track: []
}

module.exports = {
  get (key, id) {
    if (!key) {
      throw new Error('State::No key set')
    }

    if (typeof state[key] === 'undefined') {
      throw new Error(`State::No key "${key}" found`)
    }

    return state[key]
  },
  set (key, value) {
    state[key] = value
  },
  track (key) {
    if (state.track.indexOf(key) === -1) {
      state.track.push(key)
    }
  }
}
