import React, { useContext, useState, useEffect } from 'react';
import UserContext from '../utils/UserContext';
import CharacterCard from './CharacterCard';
import UserCard from './UserCard';

const CharacterPool = props => {

  const socket = props.socket;

  const { userCharacter } = useContext(UserContext);

  const [ activeCharacters, setActiveCharacters ] = useState([]);

  useEffect(() => {
    socket.on('update-user-characters', data => {
      console.log(data);
      // Updates player array from backend array
      setActiveCharacters(data);
    })
  },[])

  return(
    <div>
      {activeCharacters.map(char => (
        char.name === userCharacter.name ?
        <UserCard socket={socket} key={userCharacter._id} />
        :
        <CharacterCard character={char} key={char._id}/>
      ))}
    </div>
  )
}

export default CharacterPool;