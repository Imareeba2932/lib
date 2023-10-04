import React from 'react'
import logo from './img.jpg'; // Assuming 'logo.png' is in the same directory as your component


const Prac = () => {
    const tagStyle = {
        height: '200px', // Set the height to 200 pixels
        backgroundColor: 'lightblue', // You can add other styles as well
        padding: '20px',
    };
  return (
    <div>
        <header>
            <h1 style={{textAlign:'center'}}>My React App</h1>
            <img src={logo} alt="Logo" style={{height:'400px', width:'100%'}} />
        </header>
        <p style={tagStyle}>This paragraph has a height of 200 pixels.</p>
        <p>This paragraph has the default height.</p>
    </div>

    
  )
}

export default Prac