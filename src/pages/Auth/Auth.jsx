import React, { useState } from 'react'
import './Auth.css'
import Login from '../../components/Login/Login'
import SignUp from '../../components/SignUp/SignUp';

const Auth = () => {
    const [haveAccount, setHaveAccount] = useState(true);
    return (
        <>
            {haveAccount ? <Login haveAccount={haveAccount} setHaveAccount={setHaveAccount} /> : <SignUp haveAccount={haveAccount} setHaveAccount={setHaveAccount} />}
        </>

    )
}

export default Auth