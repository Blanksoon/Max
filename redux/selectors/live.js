export const recentLivesSelector = state => {
  const lives = []
  state.live.recents.forEach(recent => {
    lives.push(state.live.data[recent])
  })
  return lives
}
export const currentLiveSelector = state => state.live.data[state.live.current]
export const dataLivesSelector = state => {
  console.log('llllll2432348792', state.live.data['59dc6d66af142842d0bc2551'])
  const lives = []
  // for (let i = 0; i < state.live.data.length; i++) {
  //   lives[i] = state.live.data[i]
  // }
  // console.log('llllll99999999', lives[1])
  state.live.recents.forEach(recent => {
    lives.push(state.live.data[recent])
  })
  return lives
}
