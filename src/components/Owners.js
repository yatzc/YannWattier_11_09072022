import React from 'react';
import { useState } from 'react';
import data from '../datas/logements.json';
import { useParams } from "react-router-dom";
import RateStar from './RateStar';
import Carrousel from './Carrousel';
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
// import DropDown from './DropDown';

const Owners = () => {

    const { id } = useParams();

    const[selected, setSelected] = useState(null);

    const toggle = (i) => {
        if(selected === i) {
            return setSelected(null);
        }

        setSelected(i);
    }

    return (
        <section>
            <div className="container">
                {data.filter(owner => owner.id === id).map((owner, index) => (
                    <div key={index} className="Owner">
                        <div className="banner">
                            <Carrousel Image={owner.pictures}/>
                        </div>
                        <div className="top">
                            <div className="localisation">
                                <h1>{owner.title}</h1>
                                <h2>{owner.location}</h2>
                            </div>
                            <div className="owner">
                                <p>{owner.host.name}</p>
                                <img src={owner.host.picture} alt={owner.host.name} />
                            </div>
                        </div>
                        <div className="middle">
                            <div className="tags">
                                {owner.tags.map( (tag) => {
                                    return(
                                        <button>{tag}</button>
                                    )
                                })}
                            </div>
                            <div className="star">
                                <RateStar careType='red'  scaleValue={owner.rating} />
                                <RateStar careType='grey' scaleValue={5 - owner.rating} />
                            </div>
                        </div>
                        <div className="bottom">

                            <div className="left">
                                <div className='dropbox'>
                                    <div className='title' onClick={() => toggle(true)} >
                                        <h2>Description</h2>
                                        <span>{selected === true ? <FiChevronDown /> : <FiChevronUp />}</span>
                                    </div>
                                    <div className={selected === true ? 'left-content drop' : 'left-content'}>{owner.description}</div>
                                </div>
                            </div>

                            <div className="right">
                                <div className='dropbox'>
                                    <div className='title' onClick={() => toggle(true)} >
                                        <h2>Equipments</h2>
                                        <span>{selected === true ? <FiChevronDown /> : <FiChevronUp />}</span>
                                    </div>
                                    <div className={selected === true ? 'right-content drop' : 'right-content'}>
                                        {owner.equipments.map( (equipment) => {
                                            return(
                                                <li>{equipment}</li>
                                            )
                                        })}
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Owners;