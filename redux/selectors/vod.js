export const recentVodsSelector = state => {
  //console.log('state.vod.recents', state.vod.recents)
  //console.log('state.vod.data', state.vod.data)
  const vods = state.vod.recents.map(recent => state.vod.data[recent])
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

export const relatedVodsSelector = title_en => state => {
  if (title_en === 'Muay Thai Battle') {
    title_en = 'Battle Muay Thai'
  }
  const recents = recentVodsSelector(state)
  //console.log('recents', recents)
  return recents.filter(recent => recent.title_en === title_en)
}

export const NumberOfVods = state => {
  const numberOfVods = state.vod.numberOfVods
  return numberOfVods
}
