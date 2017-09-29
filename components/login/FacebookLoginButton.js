import React from 'react'
import styled from 'styled-components'
import Cookies from 'universal-cookie'
import FacebookLogin from 'react-facebook-login'
import { connect } from 'react-redux'
import { loginSuccess } from '../../redux/modules/login'

const cookies = new Cookies()
const Wrapper = styled.div`color: red;`
class FacebookLoginButton extends React.Component {
  constructor(props) {
    super(props)
    this.facebookResponse = this.facebookResponse.bind(this)
  }
  facebookResponse(response) {
    var providerData = {
      provider_name: 'facebook',
      provider_data: response,
    }
    var j = {
      provider_name: 'facebook',
      provider_data: response,
    }
    fetch('http://139.59.127.206:3001/fb-login', {
      method: 'POST',
      body: JSON.stringify(providerData),
      cors: 'cors',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(function(response) {
        return response.json()
      })
      .then(function(response) {
        cookies.set('token', response.data.token, { path: '/' })
      })
    console.log('ss', this.props)
    this.props.loginSuccess()
  }

  render() {
    return (
      <div>
        <FacebookLogin
          onClick={this.facebookLogin}
          size="small"
          appId="1492448664168205"
          autoLoad={false}
          fields="name,email,id,gender,locale,age_range"
          //cssClass="my-facebook-button-class"
          textButton="f Log in with Facebook"
          callback={this.facebookResponse}
        />
        <style jsx>
          {`
            .button-right {
              background-color: #3a559f;
              border: none;
              color: white;
              padding: 10px 30px;
              text-align: center;
              text-decoration: none;
              display: inline-block;
              font-size: 1em;
            }
          `}
        </style>
      </div>
    )
  }
}
const mapDispatchToProps = dispatch => ({
  loginSuccess: () => dispatch(loginSuccess()),
})

export default connect(null, mapDispatchToProps)(FacebookLoginButton)
