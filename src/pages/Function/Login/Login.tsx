import React from 'react'
import classes from './Login.module.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Link } from 'react-router-dom'
import AuthService from '../../../services/AuthService'
import HeaderComponent from '../../../components/Header/Header.component'

const Login = () => {
  const [isLogin, setIsLogin] = React.useState(true)
  // const [username, setUserName] = React.useState('')
  // const [password, setPassword] = React.useState('')
  // const [firstName, setFirstName] = React.useState('')
  // const [lastName, setLastName] = React.useState('')
  // const [middleName, setMiddleName] = React.useState('')
  // const [email, setEmail] = React.useState('')
  const [all, setAll] = React.useState({
    username: '',
    password: '',
    firstName: '',
    lastName: '',
    middleName: '',
    email: '',
  })
  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState)
  }

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault()
    if (isLogin) {
      AuthService.login(all.username.toString(), all.password.toString())
    } else {
      AuthService.register(
        all.username.toString(),
        all.password.toString(),
        all.firstName.toString(),
        all.lastName.toString(),
        all.middleName.toString(),
        all.email.toString(),
      )
    }
    setAll({
      username: '',
      password: '',
      firstName: '',
      lastName: '',
      middleName: '',
      email: '',
    })
  }
  function setFirstName(value: string): void {
    setAll((prevState) => ({ ...prevState, firstName: value }))
  }
  function setLastName(value: string): void {
    setAll((prevState) => ({ ...prevState, lastName: value }))
  }
  function setMiddleName(value: string): void {
    setAll((prevState) => ({ ...prevState, middleName: value }))
  }
  function setEmail(value: string): void {
    setAll((prevState) => ({ ...prevState, email: value }))
  }
  function setUserName(value: string): void {
    setAll((prevState) => ({ ...prevState, username: value }))
  }
  function setPassword(value: string): void {
    setAll((prevState) => ({ ...prevState, password: value }))
  }

  return (
    <>
      <HeaderComponent />
      <form onSubmit={submitHandler}>
        <div className="container mt-5 mb-5">
          <div className="d-flex flex row g-0">
            <div className="col-md-6 mt-3">
              <div className={'card p-3 ' + classes.card1}>
                <div className="d-flex flex-column">
                  <img
                    src="https://almatyustazy.kz/img_almaty_ustaz/logo.svg"
                    height="40"
                    width="70"
                  />
                  <span className={classes.login + ' mt-3'}>
                    {' '}
                    {isLogin ? 'Log in' : 'Sign In'}{' '}
                  </span>{' '}
                </div>

                <div
                  className={classes.inputField + ' d-flex flex-column mt-3'}
                >
                  {' '}
                  {!isLogin && (
                    <div
                      className={
                        classes.inputField + ' d-flex flex-column mt-3'
                      }
                    >
                      <div className={classes.signInCard}>
                        <span> First Name: </span>{' '}
                        <input
                          className={classes.formControl}
                          required
                          placeholder="Enter Your First Name"
                          onChange={(e) => setFirstName(e.target.value)}
                        />{' '}
                      </div>{' '}
                      <div className={classes.signInCard}>
                        <span> Last Name: </span>{' '}
                        <input
                          className={classes.formControl}
                          required
                          placeholder="Enter Your Last Name"
                          onChange={(e) => setLastName(e.target.value)}
                        />{' '}
                      </div>{' '}
                      <div className={classes.signInCard}>
                        <span> Middle Name: </span>{' '}
                        <input
                          className={classes.formControl}
                          required
                          placeholder="Enter Your Middle Name"
                          onChange={(e) => setMiddleName(e.target.value)}
                        />{' '}
                      </div>{' '}
                      <div className={classes.signInCard}>
                        <span> Email: </span>{' '}
                        <input
                          className={classes.formControl}
                          required
                          placeholder="Enter Your Email"
                          onChange={(e) => setEmail(e.target.value)}
                        />{' '}
                      </div>{' '}
                    </div>
                  )}{' '}
                  <div>
                    <div
                      className={
                        isLogin ? 'd-flex flex-column mt-3' : classes.signInCard
                      }
                    >
                      <span> Username </span>{' '}
                      <input
                        className={classes.formControl}
                        required
                        placeholder="Enter Your Username"
                        onChange={(e) => setUserName(e.target.value)}
                      />{' '}
                    </div>
                    <div
                      className={
                        isLogin ? 'd-flex flex-column mt-3' : classes.signInCard
                      }
                    >
                      <span className="mt-3"> Password </span>{' '}
                      <input
                        className={classes.formControl}
                        required
                        type="password"
                        placeholder="Enter Your Password"
                        onChange={(e) => setPassword(e.target.value)}
                      />{' '}
                    </div>{' '}
                  </div>
                  <button
                    type="submit"
                    className={
                      'mt-4 btn-dark d-flex justify-content-center align-items-center' +
                      classes.btn
                    }
                  >
                    {' '}
                    {isLogin ? 'Login' : 'Sign In'}{' '}
                  </button>
                  <div
                    className={
                      classes.text2 + ' mt-4 d-flex flex-row align-items-center'
                    }
                  >
                    <span>
                      {' '}
                      {isLogin ? "Don't have an account? " : 'Have an account '}
                      <Link
                        className={classes.register}
                        onClick={switchAuthModeHandler}
                        to={''}
                      >
                        {' '}
                        {isLogin ? 'Register here' : 'Login Here'}{' '}
                      </Link>{' '}
                    </span>{' '}
                  </div>{' '}
                </div>
              </div>{' '}
            </div>
            <div className="col-md-6 mt-3">
              <div className={'card p-3 ' + classes.card2}>
                <div className="image">
                  <Link to="/">
                    <img
                      src="https://almatyustazy.kz/local/templates/ustaz/include_areas/kz/images/taglinemob-img.png"
                      height="100%"
                      width="100%"
                    />
                  </Link>{' '}
                </div>{' '}
              </div>{' '}
            </div>{' '}
          </div>{' '}
        </div>{' '}
      </form>
    </>
  )
}

export default Login
