import React from "react";
import "./SignUp.css";

const SignUp = ({ haveAccount, setHaveAccount }) => {
    return (
        <div className="main-container">
            <div className="container">
                <div className="logo">
                    <img id="main-logo" src="/logo.png" alt="" />
                    <p>Sign up to see photos and videos from your friends.</p>
                    <button>
                        <img src="/white-fb.png" alt="" />
                        <span>Log in with Facebook</span>
                    </button>
                </div>
                <div className="or-separator">
                    <span className="line"></span>
                    <span>OR</span>
                    <span className="line"></span>
                </div>
                <div className="signup-form">
                    <input type="text" name="" id="" placeholder="Mobile number or email" />
                    <input type="text" name="" id="" placeholder="Full Name" />
                    <input type="text" name="" id="" placeholder="Username" />
                    <input type="password" name="" id="" placeholder="Password" />
                </div>
                <div className="disclaimer">
                    <p className="learn-more">
                        People who use our service may have uploaded your contact information
                        to Instagram. <a href="#">Learn More</a>
                    </p>
                    <p className="term-and-condition">
                        By signing up, you agree to our <a href="">Terms</a> ,
                        <a href=""> Privacy Policy</a> and <a href="">Cookies Policy</a> .
                    </p>
                </div>
                <div className="signup-button">
                    <button>Sign up</button>
                </div>
            </div>

            <div className="login-container">
                <p>Have an account? <a href="#" onClick={() => { setHaveAccount(!haveAccount) }}>Log in</a></p>
            </div>
            <div className="get-app">
                <p>Get the app.</p>
                <div className="app-links-container">
                    <a href=""><img src="/applestore.png" alt="apple store" /></a>
                    <a href=""><img src="/playstore.png" alt="play store" /></a>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
