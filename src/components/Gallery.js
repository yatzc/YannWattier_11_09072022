import React from 'react';
import data from '../datas/logements.json';
import Card from './Card';
import coverHome from '../assets/img/cover-home.png';

const Gallery = () => {
    return (
        <main className="Gallery">
            <div className="banner">
                <img src={ coverHome } alt="" />
                <h1>Chez vous, partout et ailleurs</h1>
            </div>
            <section className="gallery">
                {
                    data.map((logement, index) => (
                        <Card key={index} logement={logement} />
                    ))
                }
            </section>
            
        </main>
    );

};

export default Gallery;
