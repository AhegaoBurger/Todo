// src/components/Login/Login.js
import React from 'react';
import { GoogleLogin } from 'react-google-login';

const clientId = "1060612665560-bavf4bnjtsrdu1ep6if4kssggv9ko56a.apps.googleusercontent.com"

function Login() {
//   const responseGoogle = (response) => {
//     axios.post('http://localhost:8000/auth/login/google/', {
//       access_token: response.accessToken,
//     })
//     .then(res => {
//       localStorage.setItem('token', res.data.token);
//       props.onLogin(res.data.username);
//     })
//     .catch(error => {
//       console.error('Error during authentication:', error);
//     });
//   };

  const onSuccess = (res) => {
    console.log("LOGIN SUCESS! Current user: ", res.profileObj)
  }

  const onFailure = (res) => {
    console.log("LOGIN FAILED! res: ", res)
  }

  return (
    <div id="signInButton">
      <GoogleLogin
        clientId={clientId}
        buttonText="Login with Google"
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy={'single_host_origin'}
        isSignedIn={true}
      />
    </div>
  );
}

export default Login;
