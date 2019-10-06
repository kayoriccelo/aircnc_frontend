import React, { useState } from 'react';

import api from '../../services/api';
import './style/index.css';
import logo from '../../assets/images/logo.svg';


export default function App() {
    const [email, setEmail] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        const response = await api.post('/sessions', { email });

        const { _id } = response;

        localStorage.setItem('user', _id);
    };

    return (
        <div className="container">
            <img src={logo} alt="logo" />
            <div className="content">
                <p>
                    Ofereça <strong>spots</strong> para programadores e encontre <strong>talentos</strong> para sua empresa
                </p>

                <form onSubmit={handleSubmit}>
                    <label htmlFor="email">E-MAIL *</label>
                    <input
                        id="email"
                        type="email"
                        placeholder="Seu melhor e-mail"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />

                    <button className="btn" type="submit">Entrar</button>
                </form>
            </div>
        </div>
    );
};
