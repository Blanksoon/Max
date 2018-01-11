import Head from 'next/head'
import Link from 'next/link'
import styled from 'styled-components'
import withRedux from 'next-redux-wrapper'
import VideoBox from '../components/vods/VideoBox'
import { Flex, Box } from 'rebass'
import Container from '../components/commons/Container'
import color from '../components/commons/vars'
import { initStore } from '../redux/store'
import {
  fetchVods,
  startindex,
  fetchVodOnDemand,
  setFetchFilter,
  resetFetchData,
  fetchFeaturedVod,
} from '../redux/modules/vod'
import { fetchPrograms } from '../redux/modules/program'
import NewModal from '../containers/NewModal'
import {
  recentVodsSelector,
  hilightVodSelector,
  NumberOfVods,
} from '../redux/selectors/vod'
import { recentProgramsSelector } from '../redux/selectors/program'
import {
  toggleModal,
  updateModalType,
  indexModalURL,
  closeModal,
} from '../redux/modules/modal'
import { I18nextProvider } from 'react-i18next'
import startI18n from '../tools/startI18n'
import { getTranslation } from '../tools/translationHelpers'
import { langSelector, switchLangSelector } from '../redux/selectors/lang'

const WrapperNavbar = styled.div`background-color: #009999;`
const WrapperVod = styled.div`
  background-color: ${props => props.color.lightBlue};
`
import Main from '../layouts/Main'

class Vods extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      translations: this.props.translations,
      lang: this.props.lang,
    }
    this.onFilteredProgramChange = this.onFilteredProgramChange.bind(this)
    this.i18n = startI18n(this.props.translations, this.props.cookie.lang)
    this.switchLang = this.switchLang.bind(this)
  }

  async switchLang(lang) {
    this.setState({
      lang: lang,
      translations: await getTranslation(
        lang,
        ['common', 'navbar'],
        'http://localhost:8080/static/locales/'
      ),
    })
  }

  async onFilteredProgramChange(event) {
    //console.log('hi')
    const filteredProgram =
      event.target.value === 'All shows' ? '' : event.target.value
    //console.log('filteredProgram', filteredProgram)
    this.props.resetFetchData()
    this.props.setFetchFilter({
      progname: filteredProgram,
    })
    this.props.fetchFeaturedVod(this.props.token)
    //this.props.fetchVods(this.props.token)
    this.props.startindex(4)
    this.props.fetchVodOnDemand(this.props.token)
  }

  componentWillReceiveProps(nextProps) {
    console.log('1111111111111111', nextProps)
  }

  render() {
    const { hilight, vods, filter, numberOfVods } = this.props
    let filteredProgram = ''
    if (typeof filter !== 'undefined') {
      if (typeof filter.progname !== 'undefined') {
        filteredProgram = filter.progname
      }
    }
    console.log('vods', typeof this.props)
    return (
      <I18nextProvider i18n={this.i18n}>
        <Main
          url={this.props.url}
          nav={this.state.translations.translation.common}
          www="vods"
          switchLanguage={this.switchLang}
        >
          <NewModal />
          <div className="videocenter">
            <WrapperVod color={color}>
              <Container>
                <Box pt="20px" bg="white">
                  <VideoBox
                    lang={this.state.lang}
                    common={this.state.translations.translation.common}
                    hilight={hilight}
                    vods={vods}
                    numberOfVods={numberOfVods}
                    programEns={
                      this.state.lang === 'en' ? (
                        this.props.programs.programname_en
                      ) : (
                        this.props.programs.programname_th
                      )
                    }
                    filteredProgram={filteredProgram}
                    onFilteredProgramChange={this.onFilteredProgramChange}
                  />
                </Box>
              </Container>
            </WrapperVod>
          </div>
        </Main>
      </I18nextProvider>
    )
  }
}
const mapStateToProps = state => {
  //console.log('ddddddd', state)
  return {
    hilight: hilightVodSelector(state),
    vods: recentVodsSelector(state),
    numberOfVods: NumberOfVods(state),
    programs: state.program,
    lang: langSelector(state),
    filter: state.vod.filter,
    token: state.auth.token,
    cookie: state.cookie,
  }
}
Vods.getInitialProps = async ({ store, isServer, query, req }) => {
  let state = store.getState()
  const token = state.auth.token
  // Remove any filters
  store.dispatch(
    setFetchFilter({
      progname: '',
    })
  )
  const vodsPromise = fetchVodOnDemand(token)(store.dispatch, store.getState)
  const featuredPromise = fetchFeaturedVod(token)(store.dispatch)
  const programsPromise = fetchPrograms()(store.dispatch)
  await Promise.all([vodsPromise, featuredPromise, programsPromise])
  state = store.getState()
  const translations = await getTranslation(
    state.cookie.lang,
    ['common', 'navbar'],
    'http://localhost:8080/static/locales/'
  )
  const props = mapStateToProps(state)
  props.translations = translations
  return props
}

export default withRedux(initStore, mapStateToProps, {
  fetchVods,
  fetchVodOnDemand,
  fetchFeaturedVod,
  fetchPrograms,
  startindex,
  setFetchFilter,
  resetFetchData,
  updateModalType,
  indexModalURL,
  closeModal,
})(Vods)
