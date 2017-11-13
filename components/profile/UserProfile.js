import { Box, Image, Text, Flex } from 'rebass'
import styled from 'styled-components'
import color from '../commons/vars'
import FacebookLoginButton from '../login/FacebookLoginButton'
import ModalButton from '../../containers/ModalButton'
import { closeModal } from '../../redux/modules/modal'
import { connect } from 'react-redux'
import * as api from '../../api'

const Text1 = styled.div`
  color: ${color.black};
  font-weight: 700;
  font-size: 1.3em;
  font-family: Helvetica, Arial, sans-serif;
`

const Text2 = styled.div`
  color: ${color.black};
  font-weight: 400;
  font-size: 0.9em;
  font-family: Helvetica, Arial, sans-serif;
  margin-bottom: 1rem;
`
const InputEmail = styled.input`
  color: ${color.black};
  font-weight: 400;
  font-size: 1.1em;
  font-family: Helvetica, Arial, sans-serif;
`
const Button = styled.button`
  background-color: white;
  border: 1px solid red;
  color: red;
  padding: 5px 22px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-weight: 700;
  font-family: Helvetica, Arial, sans-serif;
  margin-top: 0.3rem;
  cursor: pointer;
`
class UserProfile extends React.Component {
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
    this.setState({ email: data[0].email })
  }
  render() {
    return (
      <Box w={12 / 12}>
        <Box w={12 / 12}>
          <Flex className="Profile-pic" py="1rem">
            <Box w={1 / 12} py="0.5rem">
              <Image src="../../static/ic_profile@3x.png" width="80%" />
            </Box>
            <Box w={11.7 / 12} pt="1.8rem">
              <Text1>Profile</Text1>
            </Box>
          </Flex>
          <Flex className="Detail-user" pb="0.5rem">
            <Box w={2 / 12} pt="1rem">
              <Text2>Email</Text2>
            </Box>
            <Box w={3 / 12} pt="1rem">
              <Text2>{this.state.email}</Text2>
              <ModalButton buttonID={2} modalType={5} text="Change password" />
            </Box>
            <Box w={7 / 12}>
              {/* <Flex className="Social-login" pb="0.5rem">
                <FacebookLoginButton />
                &nbsp;&nbsp;
                <FacebookLoginButton />
              </Flex> */}
            </Box>
          </Flex>
          <hr size="0.1" />
        </Box>
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

export default connect(mapStateToProps, { closeModal })(UserProfile)
