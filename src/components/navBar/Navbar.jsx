import React from 'react';
import navImg from '../../assets/logo.png'

const Navbar = () => {
  return (
    //   <div className="navbar bg-base-100 shadow-sm max-w-[1200px] mx-auto">
    //   <div className="flex-1">
    //     <a className="btn btn-ghost text-xl"><img className='w-[60px]' src={navImg} alt="" /></a>
    //   </div>
    //   <div className="flex items-center">
    //     <span>6000000000 </span>
    //     <span>-Coins</span>
    //   </div>
    // </div>
    <div className="navbar bg-base-100 shadow-sm max-w-[1200px] mx-auto">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl"><img className='w-[60px]' src={navImg} alt="" /></a>
      </div>
      <div className="flex items-center">
        <span>6000000000 </span>
        <span>-Coins</span>
      </div>
    </div>
  );
};

export default Navbar;