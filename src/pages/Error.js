import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Error = () => {
    return (
        <div>
            <Header />
            <div className="error">
                <h1>404</h1>
                <p>Oups! La page que vous demandez n'existe pas.</p>
                <Link to='/'>Retourner sur la page d'accueil</Link>
            </div>
            <Footer />
        </div>
    );
};

export default Error;