import React from 'react';
import bg from '../assets/home.jpg';
import mars from '../assets/mars.png';
import earth from '../assets/earth.png';
import moon from '../assets/moon.png';
import Earth from './Earth';

const Homepage = () => {
  return (
    <div className="relative w-full h-[1280px]">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${bg})`,
        }}
      ></div>

      {/* Overlay Image */}
      <div className="absolute inset-0 flex justify-start items-center">
        <div className='grid grid-cols-1 justify-start'>
        <img
          src={earth}
          alt="Overlay"
          className="w-[500px] h-[290px] rounded-full"
        />
        <h1 className='text-white font-bold text-2xl'>The Earth</h1>
        <div className='text-white font-bold bg-gradient-to-r from-blue-900 gradientOpacity-40 w-[300px] h-[50px] rounded-lg  mx-24'>
        {/* bg-gradient-to-r from-blue-800 */}
                <Earth></Earth>
        </div>
        <img
          src={moon}
          alt="Overlay"
          className="w-[500px] h-[290px] rounded-full"
        />
        <h1 className='text-white  font-bold text-2xl'>The Earth</h1>
        <div className='text-white bg-gradient-to-r from-blue-900 gradientOpacity-40 font-bold w-[300px] h-[50px] mx-24'>
                <Earth></Earth>
        </div>
        <img
          src={mars}
          alt="Overlay"
          className="w-[500px] h-[290px] rounded-full"
        />
        <h1 className='text-white font-bold text-2xl'>The Earth</h1>
        <div className='text-white bg-gradient-to-r from-blue-900 gradientOpacity-40 font-bold  w-[300px] h-[50px] mx-24'>
                <Earth></Earth>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
