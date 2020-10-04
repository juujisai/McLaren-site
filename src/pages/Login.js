import React from 'react';
import AlertBox from '../components/AllertBox'
import { AllUsersContext } from '../context/AllUsersContext'
import { LoggedUserContext } from '../context/LoggedUserContext'
import Loader from '../components/Loader'

const Login = () => {

  const [createAcconunt, setScreateAccount] = React.useState(false)
  const [login, setLogin] = React.useState(false)

  const [formUsername, setFormUsername] = React.useState('')
  const [formPassword, setFormPassword] = React.useState('')

  const [alertShow, setAlertShow] = React.useState(false)

  const { loading } = React.useContext(AllUsersContext)


  const { setUser } = React.useContext(LoggedUserContext)

  if (loading) {
    return <Loader />
  }





  const createAccountF = () => {
    setScreateAccount(true)
  }


  const handleChange = (e) => {

    e.target.name === "formUsername" ? setFormUsername(e.target.value) : setFormPassword(e.target.value)

  }

  const handleLogin = (e) => {
    e.preventDefault()

    const userId = validate(formUsername, formPassword)

    if (userId) {
      localStorage.setItem('user', JSON.stringify(userId))
      setLogin(true)
      setUser(userId)

    } else {
      setLogin(false)

      setTimeout(() => {
        setAlertShow(true)
      }, 1000)

      setTimeout(() => {
        setAlertShow(false)

      }, 5000)
    }



  }

  const validate = (u, p) => {
    let loginValue, passwordValue;

    let user;


    if (u === 'kowal' && p === 'qwerty123') {
      user = "3ab432kfaw2"
      loginValue = true;
      passwordValue = true
    }
    if (u === 'nowak' && p === 'qwerty123') {
      user = "5dt6baah299"
      loginValue = true;
      passwordValue = true
    }

    if (loginValue && passwordValue) return user

  }

  const loginMessage = (
    <div className={`result2`}>
      <AlertBox
        type={login ? 'success' : 'danger'}
        message={login ? 'You have succesfully logged in. Welcome!' : 'Incorect username or password. Please try again.'}
      />
    </div>
  )


  return (
    <div className='login-page'>
      <h3>Login</h3>
      <div className="form">
        <form>
          <div className="input-cont">
            <input type="text" id="nickname" name="formUsername" placeholder='username' autoComplete='off' value={formUsername} onChange={handleChange} />
          </div>
          <div className="input-cont">
            <input type="text" id="password" name="formPassword" placeholder='password' autoComplete='off' value={formPassword} onChange={handleChange} />
          </div>
          <button className='btn-login' onClick={handleLogin}>Login</button>
        </form>
      </div>
      <p className='info-account'>Don't have an account?</p>
      <button className='btn-login btn-create-account' onClick={createAccountF}>Create account</button>
      {createAcconunt && <p className={`info-account red`}>Sorry, this function is not available. Please use one of those:  <span>username: <strong>kowal</strong> password: <strong>qwerty123</strong></span> <span>username: <strong>nowak</strong> password: <strong>qwerty123</strong></span></p>}

      {alertShow && loginMessage}

    </div>
  );
}

export default Login;