import Head from 'next/head'
import Link from 'next/link'
import styled from 'styled-components'
import withRedux from 'next-redux-wrapper'
import VideoBox from '../components/vods/VideoBox'
import { Flex, Box } from 'rebass'
import Container from '../components/commons/Container'
import color from '../components/commons/vars'
import { initStore } from '../redux/store'
import { fetchVods } from '../redux/modules/vod'
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
    this.state = {
      filter: 'All shows',
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
    this.setState({ filter: event.target.value })
  }

  render() {
    const { hilight, vods } = this.props
    const filteredVods = vods.filter(vod => {
      if (this.state.filter === 'All shows') {
        return true
      } else {
        return vod.programName_en === this.state.filter
      }
    })
    return (
      <Main url={this.props.url}>
        <NewModal />
        <div className="videocenter">
          <WrapperVod color={color}>
            <Container>
              <Box pt="20px" bg="white">
                <VideoBox
                  hilight={hilight}
                  vods={filteredVods}
                  program_en={this.props.programs.programname_en}
                  value={this.state.value}
                  handleChange={this.handleChange}
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
  }
  return props
}
Vods.getInitialProps = async ({ store, isServer, query, req }) => {
  let state = store.getState()
  const token = state.auth.token
  const response = await fetchVods(token)(store.dispatch)
  const responseProgram = await fetchPrograms()(store.dispatch)
  state = store.getState()
  const props = mapStateToProps(state)
  return props
}

export default withRedux(initStore, mapStateToProps, {
  fetchVods,
  fetchPrograms,
  updateModalType,
  indexModalURL,
  closeModal,
})(Vods)
