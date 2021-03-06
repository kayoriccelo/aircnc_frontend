import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import './style/index.css';
import api from '../../services/api';

export default function Dashboard() {
    const [spots, setSpots] = useState([]);

    useEffect(() => {
        const loadSpots = async () => {
            const user_id = localStorage.getItem('user');
            const response = await api.get('/dashboard', {
                headers: { user_id }
            });

            setSpots(response.data);
        };

        loadSpots();
    }, []);

    return (
        <>
            <ul className="spot-list">
                {spots.map(spot => (
                    <li key={spot._id}>
                        <header style={{ backgroundImage: `url(${spot.thumbnail_url})` }} />
                        <strong>{spot.company}</strong>
                        <span>{spot.price ? `R$ ${spot.price}/dia` : `Gratuito`}</span>
                    </li>
                ))}
            </ul>
            <Link to="/spots/new">
                <button className="btn">
                    Cadastrar novo spot
                </button>
            </Link>
        </>
    );
};
