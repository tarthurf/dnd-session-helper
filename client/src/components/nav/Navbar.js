import React, { useState, useContext } from 'react';
import UserContext from '../../utils/UserContext';

// this is currently a dummy component. It only renders the black bar at the top of the page.
// searchbar and other basic functions will go here

const Navbar = props => {

  return (
    <nav className="px-4 flex items-center flex-grow-0 flex-shrink-0 justify-between h-16 w-full bg-black text-white text-3xl md:text-2xl shadow-lg">
    </nav>
  )
}

export default Navbar;