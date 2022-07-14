import React from 'react';
import data from '../datas/logements.json';
import { useParams } from "react-router-dom";

const Owners = () => {

    const { id } = useParams();

    return (
        <section>
            <div className="container">
                {data.filter(owner => owner.id === id).map((owner, index) => (
                    <div key={index} className="Owner">
                        <h1>{owner.title}</h1>
                        <h2>{owner.location}</h2>
                        <br />
                        <p>{owner.tags}</p>
                        <br />
                        <p>{owner.description}</p>


                        <p>{owner.host.name}</p>
                        <img src={owner.host.picture} alt={owner.host.name} />
                        <br />
                        <p>{owner.rating}</p>
                        <br />
                        <p>{owner.equipments}</p>
                        
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Owners;