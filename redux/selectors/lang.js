import { getTranslation } from '../../tools/translationHelpers'
export const langSelector = state => {
  const lang = state.cookie.lang
  //console.log('hi', lang)
  return lang
}

export const switchLangSelector = async lang => {
  const language = await getTranslation(
    lang,
    ['common', 'navbar'],
    //'http://localhost:8080/static/locales/'
    `https://beta.maxmuaythai.com/static/locales/`
  )
  return language
}
