export const recentVodsSelector = state => {
  let vods = []
  // let i = 0
  // while (i < Object.keys(state.vod.data).length) {
  //   console.log('vods', i)
  //   vods.push(state.vod.data[i])
  //   i++
  // }
  // console.log('state', Object.keys(state.vod.data).length)
  state.vod.recents.forEach(recent => {
    vods.push(state.vod.data[recent])
  })
  //console.log('vods', vods)
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
