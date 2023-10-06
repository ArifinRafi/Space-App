import React from 'react';

import bg from '../assets/home.jpg';
import Ball from '../components/Ball';


const Playground = () => {
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
        <Ball></Ball>
      </div>
    </div>
        );
};

export default Playground;