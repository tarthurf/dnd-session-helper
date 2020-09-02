import React from 'react';

const Navbar = props => {

  const socket = props.socket;

  return(
    <nav className="w-full">
      <button>Clear</button>
    </nav>
  )
}

export default Navbar;