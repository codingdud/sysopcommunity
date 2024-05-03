import React from 'react';
import backgroundImage from '../assets/bg.png';
import lefticon from '../assets/lefticon.png';
const HeroSection = () => {
  return (

    <div
      className="position-relative container-fluid py-5 mb-4 d-flex justify-content-center img-fluid"
      style={{ 
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        height:'50vh' 
    }}
    >
        <div className='container d-lg-none'>
            <div className='row justify-content-between'>
                <div className='col-auto'>
                <img width="24" height="24" src={lefticon} alt="left"/>
                </div>
                <div className='col-auto ml-auto'>
                    <button className='btn btn-outline-light'>leave Group</button>
                </div>
            </div>
        </div>
        <div className='position-absolute bottom-0 start-0 p-4 text-light'>
            <h1>Computer Engineer</h1>
            <p>142,765 Computer Engineer follow this</p>
        </div>
    </div>
  );
};

export default HeroSection;