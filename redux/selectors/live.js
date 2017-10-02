export const recentLivesSelector = state => {
  const lives = []
  state.live.recents.forEach(recent => {
    lives.push(state.live.data[recent])
  })
  return lives
}
