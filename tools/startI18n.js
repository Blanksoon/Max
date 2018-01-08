import i18n from 'i18next'

/**
 * Initialize a i18next instance.
 * @function startI18n
 * @param {object} files - Translation files.
 * @param {string} lang - Active language.
 */
const startI18n = (files, lang) =>
  i18n.init({
    lng: lang, // active language http://i18next.com/translate/
    fallbackLng: 'th',
    resources: files,
    ns: ['navbar'],
    defaultNS: 'navbar',
    debug: false,
  })

export default startI18n
