import React from 'react';
import { RxHamburgerMenu } from "react-icons/rx";
import './shared.css';

const HamburgerMenu = ({ onClick }) => {
    return (
        <div className='hamburger-container' onClick={onClick}>
            <RxHamburgerMenu />
        </div>
    );
};

export default HamburgerMenu;
