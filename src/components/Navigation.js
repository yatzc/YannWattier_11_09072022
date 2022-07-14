import React from 'react';
import { NavLink } from "react-router-dom";

const Navigation = () => {
    return (
        <div className="navigation">
            <ul>
                <NavLink to="/" className={(nav) => (nav.isActive ? "nav-active" : "")}>
                    <li>Accueil</li>
                </NavLink>
                <NavLink to="/about" className={(nav) => (nav.isActive ? "nav-active" : "")}>
                    <li>A propos</li>
                </NavLink>
                <NavLink to="/lodging" className={(nav) => (nav.isActive ? "nav-active" : "")}>
                    <li>Lodging</li>
                </NavLink>
            </ul>
        </div>
    );
};

export default Navigation;