import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({ logement }) => {
    return (
        <>
            <article>    
                <Link to={`/lodging/${logement.id}`}><img src={logement.cover} alt={"logement " + logement.title} /></Link>
            </article>
        </>
    );
};

export default Card;
