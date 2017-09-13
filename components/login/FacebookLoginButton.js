import React from 'react'

import FacebookLogin from 'react-facebook-login';

class FacebookLoginButton extends React.Component {

  facebookResponse(response) {

    var providerData = {
      provider_name : "facebook",
      provider_data : response
    };

    fetch("http://localhost:3001/social_login",
    {
        method: "POST",
        body: JSON.stringify(providerData),
        cors : 'cors',
        headers : {
          'Content-Type' : 'application/json'
        }
    })
    .then(function(res){ return res.json(); })
    .then(function(data){ console.log( data  ) })
  }

  render() {
    return (
      <div>
        <FacebookLogin 
          onClick={this.facebookLogin}
          size='small'
          appId="116494852394377"
          autoLoad={false}
          fields="name,email,id"
          callback={this.facebookResponse}
        />
      </div>
    )
  }
};

export default FacebookLoginButton
