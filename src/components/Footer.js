import React from 'react';
import logo from '../assets/svg/logo_footer.svg'

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-logo"><img src={logo} alt='Kasa' /></div>
            <div className="copy-right"><h2>© 2020 Kasa. All rights reserved</h2></div>
        </div>
    );
};

export default Footer;