import React from 'react'
import './Login.css'

const Login = ({ haveAccount, setHaveAccount }) => {
    return (
        <div className='auth-container'>
            <div className="auth-left">
                <img src='/auth.png' alt="phone with insta" />
            </div>

            <div className="auth-right">
                <div className="auth-right-login-form">
                    <img id='logo' src="/logo.png" alt="instagram" />
                    <input type="text" name="" id="" placeholder='Phone number, username, or email' />
                    <input type="password" name="" id="" placeholder='password' />
                    <button type='submit'>Log in</button>

                    <div className="or-separator">
                        <span className='line'></span><span>OR</span><span className='line'></span>
                    </div>
                    <div className="facebook-login">
                        <div className="facebook-login-text">
                            <img src="/facebook-logo.svg" alt="facebook icon" />
                            <span>Log in with Facebook</span>
                        </div>
                        <p>Forgot password?</p>
                    </div>
                </div>
                <div className="create-account">
                    <p onClick={() => { setHaveAccount(!haveAccount) }}>Create new account</p>
                </div>
                <div className="get-app">
                    <p>Get the app.</p>
                    <div className="app-links-container">
                        <a href=""><img src="/applestore.png" alt="apple store" /></a>
                        <a href=""><img src="/playstore.png" alt="play store" /></a>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Login