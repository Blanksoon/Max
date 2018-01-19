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

export const relatedVodsSelector = programName_en => state => {
  console.log('pr', programName_en)
  if (programName_en === 'Muay Thai Battle') {
    programName_en = 'Battle Muay Thai'
  }
  const recents = recentVodsSelector(state)
  //console.log('recents', recents)
  return recents.filter(recent => recent.programName_en === programName_en)
}

export const NumberOfVods = state => {
  const numberOfVods = state.vod.numberOfVods
  return numberOfVods
}
