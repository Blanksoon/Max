import React from 'react'
import styled from 'styled-components'
import Cookies from 'universal-cookie'
import FacebookLogin from 'react-facebook-login'

const cookies = new Cookies()
const Wrapper = styled.div`color: red;`
class FacebookLoginButton extends React.Component {
  facebookResponse(response) {
    var providerData = {
      provider_name: 'facebook',
      provider_data: response,
    }
    var j = {
      provider_name: 'facebook',
      provider_data: response,
    }
    //j = JSON.stringify(j)
    // console.log('providerData', j)

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
          //cssClass="button-right"
          textButton="f Log in with Facebook"
          callback={this.facebookResponse}
        />
      </div>
    )
  }
}

export default FacebookLoginButton
