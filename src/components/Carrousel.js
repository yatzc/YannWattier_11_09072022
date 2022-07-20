import React from 'react';
import { useState } from 'react';
import ArrowsLeft from '../assets/svg/arrow-left.svg';
import ArrowsRight from '../assets/svg/arrow-right.svg';

const Carrousel = ({Image}) => {



    const [slideIndex, setSlideIndex] = useState(1);

    const nextSlide = () => {
        if(slideIndex !== Image.length) {
            setSlideIndex(slideIndex + 1);
        }
        else if(slideIndex === Image.length) {
            setSlideIndex(1);
        }
    }

    const prevSlide = () => {
        if(slideIndex !== 1) {
            setSlideIndex(slideIndex - 1);
        }
        else if(slideIndex === 1) {
            setSlideIndex(Image.length);
        }
    }


// console.log(Image)

    return (
        <>
            <div className="Carrousel">
                {Image.map((obj, index) => {
                    return (
                        <div className={slideIndex === index +1 ? "slide active-anim" : "slide"} key={index}>
                        <img src={obj} alt="img" />
                        <h2>{index + 1} / {Image.length}</h2>
                        </div>
                    );
                })}
                <div onClick={prevSlide} className="carrousel-arrow_left">
                    <div>
                        <img src={ArrowsLeft} alt="arrow left" />
                    </div>  
                </div>
                <div onClick={nextSlide} className="carrousel-arrow_right">
                    <div>
                        <img src={ArrowsRight} alt="arrow right" />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Carrousel;