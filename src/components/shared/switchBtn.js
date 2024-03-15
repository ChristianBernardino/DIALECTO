import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import './shared.css'; 

const SwitchButton = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const label =
    location.pathname === "/home" ? "INTERACTIVE MODE" : "STANDBY MODE";

  const handleClick = () => {
    const path =
      location.pathname === "/home-standby" ? "/home" : "/home-standby";

    navigate(path);
  };
  return <button onClick={handleClick} className='switch-btn'>{label}</button>;
};

export default SwitchButton;
