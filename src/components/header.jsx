import React from 'react';
// import './App.css'; // Import your CSS file
import image from './pizza.png'

const Header = () => {
  return (
    <header className="header">
      <div className="header-content">
        <div className="left-content">
          <h1>Your Header Content</h1>
          <p>Some text or other elements can go here. sjkdh sjkdh kkjsadhajs kaljsaj slkdj llksjdk</p>
        </div>
        <div className="right-content">
          <img className='pizza' src={image} alt="Header Image" />
        </div>
      </div>
    </header>
  );
};

export default Header;
