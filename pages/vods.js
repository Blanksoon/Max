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
  setFetchFilter,
  resetFetchData,
  fetchFeaturedVod,
} from '../redux/modules/vod'
import { fetchPrograms } from '../redux/modules/program'
import NewModal from '../containers/NewModal'
import { recentVodsSelector, hilightVodSelector } from '../redux/selectors/vod'
import { recentProgramsSelector } from '../redux/selectors/program'
import {
  toggleModal,
  updateModalType,
  indexModalURL,
  closeModal,
} from '../redux/modules/modal'

const WrapperNavbar = styled.div`background-color: #009999;`
const WrapperVod = styled.div`
  background-color: ${props => props.color.lightBlue};
`
import Main from '../layouts/Main'

class Vods extends React.Component {
  constructor(props) {
    super(props)
    this.onFilteredProgramChange = this.onFilteredProgramChange.bind(this)
  }

  onFilteredProgramChange(event) {
    const filteredProgram =
      event.target.value === 'All shows' ? '' : event.target.value
    this.props.resetFetchData()
    this.props.setFetchFilter({
      progname: filteredProgram,
    })
    this.props.fetchFeaturedVod(this.props.token)
    this.props.fetchVods(this.props.token)
  }

  render() {
    const { hilight, vods, filter } = this.props
    let filteredProgram = ''
    if (typeof filter !== 'undefined') {
      if (typeof filter.progname !== 'undefined') {
        filteredProgram = filter.progname
      }
    }

    return (
      <Main url={this.props.url}>
        <NewModal />
        <div className="videocenter">
          <WrapperVod color={color}>
            <Container>
              <Box pt="20px" bg="white">
                <VideoBox
                  hilight={hilight}
                  vods={vods}
                  programEns={this.props.programs.programname_en}
                  filteredProgram={filteredProgram}
                  onFilteredProgramChange={this.onFilteredProgramChange}
                />
              </Box>
            </Container>
          </WrapperVod>
        </div>
      </Main>
    )
  }
}
const mapStateToProps = state => {
  const props = {
    hilight: hilightVodSelector(state),
    vods: recentVodsSelector(state),
    programs: state.program,
    filter: state.vod.filter,
    token: state.auth.token,
  }
  return props
}
Vods.getInitialProps = async ({ store, isServer, query, req }) => {
  let state = store.getState()
  const token = state.auth.token
  const vodsPromise = fetchVods(token)(store.dispatch, store.getState)
  const featuredPromise = fetchFeaturedVod(token)(store.dispatch)
  const programsPromise = fetchPrograms()(store.dispatch)
  await Promise.all([vodsPromise, featuredPromise, programsPromise])
  state = store.getState()
  const props = mapStateToProps(state)
  return props
}

export default withRedux(initStore, mapStateToProps, {
  fetchVods,
  fetchFeaturedVod,
  fetchPrograms,
  setFetchFilter,
  resetFetchData,
  updateModalType,
  indexModalURL,
  closeModal,
})(Vods)
