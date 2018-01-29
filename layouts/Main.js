import { Provider } from 'rebass'
import Navbar from '../components/commons/Navbar'
import AddressFooter from '../components/commons/AddressFooter'
import SocialFooter from '../components/commons/SocialFooter'
import React from 'react'
import { connect } from 'react-redux'
import { langSelector } from '../redux/selectors/lang'
import { getTranslation } from '../tools/translationHelpers'
import { initGA, logPageView } from '../tools/analytics'

class Main extends React.Component {
  async componentWillReceiveProps(nextProps) {
    //console.log(nextProps.lang)
    if (this.props.lang != nextProps.lang) {
      this.props.switchLanguage(nextProps.lang)
    }
  }

  componentDidMount() {
    if (!window.GA_INITIALIZED) {
      initGA()
      window.GA_INITIALIZED = true
    }
    logPageView()
  }

  render() {
    const { url, www, nav, children, lang } = this.props
    //console.log('lang', lang)
    return (
      <Provider>
        {/* {url.pathname === '/' && <Navbar activeUrl={url} />} */}
        <Navbar url={url} www={www} lang={lang} common={nav} />
        {children}
        <AddressFooter common={nav} />
        <SocialFooter />
        <style jsx global>
          {`
            body {
              padding: 0 !important;
              margin: 0 !important;
            }
            * {
              box-sizing: border-box;
            }
          `}
        </style>
      </Provider>
    )
  }
}
const mapStateToProps = state => {
  return {
    lang: langSelector(state),
  }
}

export default connect(mapStateToProps, null)(Main)
