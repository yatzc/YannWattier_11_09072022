import React from 'react';
import { useState } from 'react';
import data from '../datas/logements.json';
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

const DropDown = () => {

    const[selected, setSelected] = useState(null);

    const toggle = (i) => {
        if(selected === i) {
            return setSelected(null);
        }

        setSelected(i);
    }

    return (
        <div className='wrapper'>
            <div className='accordion'>
                {data.map((item, i) => (
                    <div className='item'>
                        <div className='title' onClick={() => toggle(i)} key={i}>
                            <h2>Description</h2>
                            <span>{selected === i ? <FiChevronDown /> : <FiChevronUp />}</span>
                        </div>
                        <div className={selected === i ? 'content show' : 'content'}>{item.description}</div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default DropDown;