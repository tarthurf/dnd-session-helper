import React, { useContext, useState, useEffect } from 'react';
import UserContext from '../utils/UserContext';
import CharacterCard from './characterViews/CharacterCard';
import UserCard from './characterViews/UserCard';

const CharacterPool = props => {

  const socket = props.socket;

  const { userCharacter } = useContext(UserContext);

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