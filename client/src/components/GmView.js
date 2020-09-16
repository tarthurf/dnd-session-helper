import React, { useState, useEffect } from 'react';
import CharacterCard from './characterViews/CharacterCard';

const GmView = props => {

  const socket = props.socket;

  const [ activeCharacters, setActiveCharacters ] = useState([]);

  useEffect(() => {
    socket.on('update-user-characters', data => {
      // Updates player array from backend array
      setActiveCharacters(data);
    })
  },[])

  return(
    <div className='flex flex-col items-center'>
      {activeCharacters.map(char => (
        <CharacterCard character={char} key={char._id}/>
      ))}
    </div>
  )
}

export default GmView;