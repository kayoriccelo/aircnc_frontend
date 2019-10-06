import React from 'react';

import './style/index.css';
import logo from '../../assets/images/logo.svg';
import Routes from '../../routes';


export default function App() {
    return (
        <div className="container">
            <img src={logo} alt="logo" />
            <div className="content">
                <Routes />
            </div>
        </div>
    );
};
