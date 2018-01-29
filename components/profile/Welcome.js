import { Box, Text } from 'rebass'
import color from '../commons/vars'
import styled from 'styled-components'
import { closeModal } from '../../redux/modules/modal'
import { connect } from 'react-redux'
import * as api from '../../api'
import { media, theme } from '../../tools/responsive'

const Text1 = styled.div`
  color: ${color.red};
  font-weight: 700;
  font-size: 1.5em;
  font-family: Helvetica, Arial, sans-serif;
  ${media.iphone5`font-size: 1em;`};
`
class Welcome extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      errMessageEmail: '',
      loading: false,
    }
    this.dataProfile = this.dataProfile.bind(this)
  }
  componentDidMount() {
    {
      this.dataProfile()
    }
  }
  async dataProfile() {
    const { status, data } = await api.get(
      `${api.SERVER}/profile?token=${this.props.auth.token}`
    )
    this.setState({ email: data.email })
  }
  render() {
    return (
      <Box w={12 / 12} pb="1rem">
        <Text1>
          {this.props.common.WELCOMEBACK}, {this.state.email}
        </Text1>
      </Box>
    )
  }
}

const mapStateToProps = state => {
  return {
    auth: state.auth,
  }
}

// Login.getInitialProps = async ({ store, isServer, query, req }) => {
//   let state = store.getState()
//   const token = state.auth.token
//   await Promise.all([livePromise, vodPromise])
//   state = store.getState()
//   const props = mapStateToProps(state)
//   return props
// }

export default connect(mapStateToProps, { closeModal })(Welcome)
