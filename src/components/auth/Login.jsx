import React from 'react';
import {login} from "../../music";
import './styles/login.css'

const Login = () => {
    return (
        <div className="login">
            <img src={`${process.env.PUBLIC_URL}/img/logo.png`} alt="logo" className="logo"/>
            <a href={login}>
                <div className="login-btn">Login</div>
            </a>
        </div>
    );
};

export default Login;