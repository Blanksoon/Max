export const recentNewsSelector = state => {
  const news = []
  state.news.recents.forEach(recent => {
    news.push(state.news.data[recent])
  })
  return news
}
export const currentNewsSelector = state => state.news.data[state.news.current]
export const dataNewsSelector = state => {
  const news = []
  state.news.recents.forEach(recent => {
    news.push(state.news.data[recent])
  })
  return news
}
