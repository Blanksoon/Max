export const recentVodsSelector = state => {
  console.log(state)
  const vods = []
  state.vod.recents.forEach(recent => {
    vods.push(state.vod.data[recent])
  })
  return vods
}
