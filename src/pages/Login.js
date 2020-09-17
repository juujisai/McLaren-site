import React from 'react';
// import pseudoDatabase from '../data/pseudoDatabase'
import AlertBox from '../components/AllertBox'


const Login = () => {

  const [createAcconunt, setScreateAccount] = React.useState(false)
  const [login, setLogin] = React.useState(false)

  const [formUsername, setFormUsername] = React.useState('')
  const [formPassword, setFormPassword] = React.useState('')

  const [alertShow, setAlertShow] = React.useState(false)

  const [loginResult, setLoginResult] = React.useState({
    logged: false,
    username: '',
    userId: ''
  })


  const createAccountF = () => {
    setScreateAccount(true)
  }

  const handleLogin = (e) => {
    e.preventDefault()


    setTimeout(() => {
      setLogin(true)
      setAlertShow(true)
      setLoginResult({
        logged: true,
        username: '',
        userId: ''
      })
    }, 1000)



    setTimeout(() => {
      setAlertShow(false)

    }, 3000)


  }



  const loginMessage = (
    <div className={`result`}>
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
            <input type="text" id="nickname" placeholder='username' autoComplete='off' />
          </div>
          <div className="input-cont">
            <input type="password" id="password" placeholder='password' autoComplete='off' />
          </div>
          <button className='btn-login' onClick={handleLogin}>Login</button>
        </form>
      </div>
      <p className='info-account'>Don't have an account?</p>
      <button className='btn-login btn-create-account' onClick={createAccountF}>Create account</button>
      {createAcconunt && <p className={`info-account red`}>Sorry, this function is not available. Please use one of those:  <span>username: <strong>kowal</strong> password: <strong>qwerty</strong></span> <span>username: <strong>nowak</strong> password: <strong>qwerty</strong></span></p>}

      {alertShow && loginMessage}
    </div>
  );
}

export default Login;