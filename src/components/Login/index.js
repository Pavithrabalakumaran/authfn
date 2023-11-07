// Write your JS code here
import Cookies from 'js-cookie'

import {Redirect, withRouter} from 'react-router-dom'

import './index.css'

const Login = props => {
  const jwtToken = Cookies.get('jwt_token')

  const setCookies = token => {
    const {history} = props

    Cookies.set('jwt_token', token, {expires: 30})

    history.replace('/')
  }

  const loginButton = async () => {
    const userDetails = {username: 'rahul', password: 'rahul2021'}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const fetchedData = await response.json()

    if (response.ok === true) {
      setCookies(fetchedData.jwt_token)
    }
  }

  if (jwtToken !== undefined) {
    return <Redirect to="/" />
  }

  return (
    <div className="login-route">
      <h1>Please Login</h1>
      <button className="login-button" type="button" onClick={loginButton}>
        Login With Sample Creds
      </button>
    </div>
  )
}

export default Login
