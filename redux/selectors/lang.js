export const langSelector = state => {
  const lang = state.cookie.lang
  //console.log('hi', lang)
  return lang
}
