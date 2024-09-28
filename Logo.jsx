import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import TLLogo from './assets/ERlogo.png';
import MidLogo from './assets/ERDlcLogo.png';

function Logo() {
  const navigate = useNavigate();
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const handleTLLogoClick = () => {
    setDropdownVisible(!dropdownVisible);
  };

  const handleMidLogoClick = () => {
    navigate('/');
  };

  return (
    <>
      <div className='TLLogo' onClick={handleTLLogoClick}>
        <img src={TLLogo} alt='Elden Ring Logo'/>
        {dropdownVisible && (
          <div className='dropdown'>
            <a href='/tierlists'>Tier Lists</a>
            <a href='/Guides'>Guides</a>
            <a href='/Personal'>Personal</a>
            <a href='/Walkthroughs'>Walkthroughs</a>
            <a href='/Glitches'>Glitches/Tips</a>
          </div>
        )}
      </div>
      <div className='MidLogo' onClick={handleMidLogoClick}>
        <img src={MidLogo} alt='Elden Ring DLC Logo'/>
      </div>
    </>
  );
}

export default Logo;
