export const recentVodsSelector = state => {
  const vods = []
  state.vod.recents.forEach(recent => {
    vods.push(state.vod.data[recent])
  })
  return vods
}
export const hilightVodSelector = state => {
  let hilight = state.vod.data[state.vod.recents[0]]
  state.vod.recents.forEach(recent => {
    if (state.vod.data[recent].feature === 'active') {
      hilight = state.vod.data[recent]
    }
  })
  return hilight
}
export const currentVodSelector = state => state.vod.data[state.vod.current]
