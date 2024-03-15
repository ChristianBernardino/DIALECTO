import React from 'react';


import Header from '../components/header';
import Slider from '../components/sliderInteractive'

const Home = () => {
    return (
        <div className='home-wrapper'>
            <Header />

            <div className='interactive-slider-container'>
                <Slider />
            </div>
        </div>
    )
}

export default Home;
