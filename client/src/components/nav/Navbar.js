import React, { useState, useContext } from 'react';
import CharacterView from './CharacterView';
import CharacterEdit from './CharacterEdit';
import UserContext from '../../utils/UserContext';

const Navbar = props => {

  const socket = props.socket;

  const { userCharacter } = useContext(UserContext)

  const [modalState, setModalState] = useState(false);

  return (
    <nav className="px-4 flex items-center flex-grow-0 flex-shrink-0 justify-between h-16 w-full bg-black text-white text-3xl md:text-4xl shadow-lg">
      {userCharacter.name === "" ?
      null
      :
      <button
        onClick={() => setModalState(!modalState)}
      >
        View Character Sheet
      </button>
      }
      {modalState ?
        <div className='flex absolute z-10 inset-0 m-16 p-8 border-gray-800 bg-gray-200 text-black'>
          {userCharacter.name === "" ?
            null
            :
            <CharacterEdit className='z-20' char={userCharacter} socket={socket} />
          }
        </div>
        :
        null
      }
    </nav>
  )
}

export default Navbar;