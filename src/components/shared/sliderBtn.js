import React from 'react';

import './shared.css';

const SliderBtn = ({ label, width, padding, bgColor, color }) => {
    const style = {
        width: width,
        padding: padding,
        backgroundColor: bgColor,
        color: color
    };

    return (
        <button className='slider-btn' style={style}>{label}</button>
    )
};

export default SliderBtn;
