import React, { useContext, useState, useEffect } from 'react';
import UserContext from '../utils/UserContext';
import CharacterCard from './characterViews/CharacterCard';
import UserCard from './characterViews/UserCard';

const CharacterPool = props => {

  // importing socket from App.js
  const socket = props.socket;

  // Sets the user character based on the context provider
  const { userCharacter } = useContext(UserContext);

  // this renders the view of all player's base information and stats
  // Holds all active player's characters
  const [activeCharacters, setActiveCharacters] = useState([]);
  
  useEffect(() => {
    socket.on('update-user-characters', data => {
      // Updates player array from backend array
      setActiveCharacters(data);
    })
  }, [])

  return (
    <div className='flex flex-col items-center'>
      {userCharacter.name === "" ?
        null
        :
        userCharacter.name === 'gm' ?
          null
          :
          <UserCard socket={socket} />
      }
      {activeCharacters.map(char => (
        char.name === userCharacter.name ?
          null
          :
          <CharacterCard character={char} key={char._id} />
      ))}


    </div>
  )
}

export default CharacterPool;