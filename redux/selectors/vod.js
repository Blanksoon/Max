export const recentVodsSelector = state => {
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

export const relatedVodsSelector = programName_en => state => {
  if (programName_en === 'Muay Thai Battle') {
    programName_en = 'Battle Muay Thai'
  }
  const recents = recentVodsSelector(state)
  return recents.filter(recent => recent.programName_en === programName_en)
}

export const NumberOfVods = state => {
  const numberOfVods = state.vod.numberOfVods
  return numberOfVods
}
