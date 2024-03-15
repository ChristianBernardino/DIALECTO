import React from 'react';

import SliderBtn from './shared/sliderBtn';
import DiaclectImg from '../assets/dialect.jpg';

import './components.css'

const Slider = () => {
  return (
    <div className='slider'>
      <div className='slider-card-container'>
        <div className='slider-card'>
            <div className='slider-card-img'>
                <img src={DiaclectImg} alt='Dialect Image' />
            </div>
            <SliderBtn label='Dialect 1' />
        </div>
        <div className='slider-card'>
            <div className='slider-card-img'>
                <img src={DiaclectImg} alt='Dialect Image' />  
            </div>
            <SliderBtn label='Dialect 2' />
        </div>
        <div className='slider-card'>
            <div className='slider-card-img'>
                <img src={DiaclectImg} alt='Dialect Image' />
            </div>
            <SliderBtn label='Dialect 3' />
        </div>
        <div className='slider-card'>
            <div className='slider-card-img'>
                <img src={DiaclectImg} alt='Dialect Image' />
            </div>
            <SliderBtn label='Dialect 4' />
        </div>
        <div className='slider-card'>
            <div className='slider-card-img'>
                <img src={DiaclectImg} alt='Dialect Image' />
            </div>
            <SliderBtn label='Dialect 5' />
        </div>
        
      </div>
    </div>
  )
}

export default Slider;
