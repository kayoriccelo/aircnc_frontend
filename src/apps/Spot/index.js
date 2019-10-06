import React, { useState, useMemo } from 'react';

import './style/index.css';
import camera from '../../assets/images/camera.svg';
import api from '../../services/api';


export default function NewSpot({ history }) {
    const [values, setValues] = useState({
        company: null,
        techs: null,
        price: null,
        thumbnail: null
    });

    const preview = useMemo(() => {
        return values['thumbnail'] ? URL.createObjectURL(values['thumbnail']) : null;
    }, [values]);

    const onChange = (fieldName) => (value) => {
        setValues({ ...values, [fieldName]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = new FormData();
        const user_id = localStorage.getItem('user');

        data.append('thumbnail', values['thumbnail']);
        data.append('company', values['company']);
        data.append('price', values['price']);
        data.append('techs', values['techs']);

        await api.post('/spots', data, {
            headers: {
                user_id
            }
        });

        history.push('/dashboard');
    };

    return (
        <form onSubmit={handleSubmit}>
            <label
                id="thumbnail"
                style={{ backgroundImage: `url(${preview})` }}
                className={values['thumbnail'] ? 'has-thumbnail' : ''}
            >
                <input type="file" onChange={e => onChange('thumbnail')(e.target.files[0])} />
                <img src={camera} alt="Select image" />
            </label>

            <label htmlFor="company">EMPRESA *</label>
            <input
                id="company"
                placeholder="Sua empresa incrível"
                value={values['company']}
                onChange={e => onChange('company')(e.target.value)}
            />

            <label htmlFor="techs">TECNOLOGIAS * <span>(separados por virgula)</span></label>
            <input
                id="techs"
                placeholder="Quais tecnologias usam?"
                value={values['techs']}
                onChange={e => onChange('techs')(e.target.value)}
            />

            <label htmlFor="price">VALOR DA DIÁRIA * <span>(em branco para gratuito)</span></label>
            <input
                id="price"
                placeholder="Valor cobrado por dia"
                value={values['price']}
                onChange={e => onChange('price')(e.target.value)}
            />

            <button className="btn" type="submit">Cadastrar</button>
        </form>
    );
};
