import React from 'react';
import logo from '../assets/svg/logo.svg'

const Logo = () => {
    return (
        <div className="logo">
            <img src={logo} alt='Kasa' className='img-logo' />
        </div>
    );
};

export default Logo;