import React from 'react';

import SliderBtn from './shared/sliderBtn';
import VidThumbnail from '../assets/video.png'

import './components.css'

const SliderStandby = () => {
  return (
    <div className='slider'>
      <div className='slider-card-container'>
        <div className='slider-card'>
            <div className='slider-card-img'>
                <img src={VidThumbnail} alt='Video' />
            </div>
            <SliderBtn label='video title' padding='.4em 1.6em' />
        </div>
        <div className='slider-card'>
            <div className='slider-card-img'>
                <img src={VidThumbnail} alt='Video' />
            </div>
            <SliderBtn label='video title' padding='.4em 1.6em' />
        </div>
        <div className='slider-card'>
            <div className='slider-card-img'>
                <img src={VidThumbnail} alt='Video' />
            </div>
            <SliderBtn label='video title' padding='.4em 1.6em' />
        </div>
        <div className='slider-card'>
            <div className='slider-card-img'>
                <img src={VidThumbnail} alt='Video' />
            </div>
            <SliderBtn label='video title' padding='.4em 1.6em' />
        </div>
        <div className='slider-card'>
            <div className='slider-card-img'>
                <img src={VidThumbnail} alt='Video' />
            </div>
            <SliderBtn label='video title' padding='.4em 1.6em' />
        </div>
        
      </div>
    </div>
  )
}

export default SliderStandby;
