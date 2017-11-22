import { Box, Image, Text, Flex } from 'rebass'
import styled from 'styled-components'
import color from '../commons/vars'
import FacebookLoginButton from '../login/FacebookLoginButton'
import ModalButton from '../../containers/ModalButton'
import { closeModal } from '../../redux/modules/modal'
import { connect } from 'react-redux'
import fetch from 'isomorphic-fetch'

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
  background-color: black;
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
class Paypal extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      errMessageEmail: '',
      loading: false,
    }
    //this.dataProfile = this.dataProfile.bind(this)
    this.post = this.post.bind(this)
    this.getTokenApi = this.getTokenApi.bind(this)
  }
  // componentDidMount() {
  //   {
  //     this.dataProfile()
  //   }
  // }
  // async dataProfile() {
  //   const { status, data } = await api.get(
  //     `${api.SERVER}/profile?token=${this.props.auth.token}`
  //   )
  //   this.setState({ email: data[0].email })
  // }

  async getTokenApi() {
    //console.log('hi', this.post('a', 'b'))
    const token = await this.post(
      `https://api.sandbox.paypal.com/v1/oauth2/token`,
      { grant_type: 'client_credentials' }
    )
    console.log('token', token)
  }

  post(url, json) {
    //console.log('json')
    return fetch(url, {
      method: 'POST',
      headers: {
        //Accept: 'application/json',
        'Content-Type': 'x-www-form-urlencoded',
        Authorization:
          'Basic QVhZYVJlbl84NEhnY2hMUEdXdzlZeThlSG16MVBQd2wxNUMxTm5rRk1YRzJOU0hsTmRoZW16MlQxWk85U1ZTZ1hXMV9hLVF4Q2FJbFlLRXM6RUNHZDdUQ2lEMnZ3N0dKOHJQV09ZU0JqeGdneWFTcllodW5Lc0V6WGRRZTRIWUFpbWszRXR5eWRnSXo1VDFBSUU3amxDVDAxVm00MTVNTEY=',
      },
      mode: 'cors',
      body: JSON.stringify(json),
    })
      .then(response => {
        if (!response.ok) {
          throw new Error(response.statusText)
        }
        return response.json()
      })
      .catch(err => Promise.reject(err))
  }

  render() {
    return <Button onClick={this.getTokenApi}>Paypal</Button>
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

export default connect(mapStateToProps, { closeModal })(Paypal)
