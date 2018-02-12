import React from 'react'
import { connect } from 'react-redux'
import Cookies from 'universal-cookie'
import FacebookLogin from 'react-facebook-login'
import * as api from '../../api'
import { fbLogin } from '../../redux/modules/auth'
import { closeModal } from '../../redux/modules/modal'
import Router from 'next/router'
import Spinner from '../commons/Spinner'

// stagingAppIdFacebook = 450605862001815
// developAppIdFacebbok = 135776387080938
// productionAppIdFacebook = 1492448664168205
const cookies = new Cookies()

class FacebookLoginButton extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: false,
    }
    super(props)
    this.facebookResponse = this.facebookResponse.bind(this)
  }
  async facebookResponse(response) {
    //console.log('response', response)
    const providerData = {
      provider_name: 'facebook',
      provider_data: response,
    }
    this.setState({
      loading: true,
    })
    await this.props.fbLogin(providerData)
    this.setState({
      loading: false,
    })
    this.props.closeModal()
    Router.push(`/`)
  }
  render() {
    return (
      <div>
        {this.state.loading ? (
          <Spinner />
        ) : (
          <FacebookLogin
            onClick={this.facebookLogin}
            size="small"
            appId="450605862001815"
            autoLoad={false}
            fields="name,email,id,gender,locale,age_range,birthday,picture,first_name,last_name"
            cssClass="loginBtn loginBtn--facebook"
            textButton={this.props.textButton}
            callback={this.facebookResponse}
          />
        )}
        <style jsx global>
          {`
            /* Shared */
            .loginBtn {
              box-sizing: border-box;
              position: relative;
              /* width: 13em;  - apply for fixed size */
              margin: 0.2em;
              padding: 0 15px 0 46px;
              border: none;
              text-align: left;
              line-height: 34px;
              white-space: nowrap;
              border-radius: 0.2em;
              font-size: 16px;
              color: #fff;
            }
            .loginBtn:before {
              content: '';
              box-sizing: border-box;
              position: absolute;
              top: 0;
              left: 0;
              width: 34px;
              height: 100%;
            }
            .loginBtn:focus {
              outline: none;
            }
            .loginBtn:active {
              box-shadow: inset 0 0 0 32px rgba(0, 0, 0, 0.1);
            }

            /* Facebook */
            .loginBtn--facebook {
              background-color: #4c69ba;
              background-image: linear-gradient(#4c69ba, #3b55a0);
              /*font-family: "Helvetica neue", Helvetica Neue, Helvetica, Arial, sans-serif;*/
              text-shadow: 0 -1px 0 #354c8c;
            }
            .loginBtn--facebook:before {
              border-right: #364e92 1px solid;
              background: url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/14082/icon_facebook.png')
                6px 6px no-repeat;
            }
            .loginBtn--facebook:hover,
            .loginBtn--facebook:focus {
              background-color: #5b7bd5;
              background-image: linear-gradient(#5b7bd5, #4864b1);
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

export default connect(null, { fbLogin, closeModal })(FacebookLoginButton)
