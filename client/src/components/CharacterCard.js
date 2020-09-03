import React from 'react';

const CharacterCard = props => {

  const character = props.character;

  return(
    <div className='flex flex-col justufy-center w-3/4 border border-black text-xl'>
      <div className='flex justify-around items-center'>
        <h1 className='text-2xl'>{character.name}</h1>
        {character.subrace === "" ?
        <p>{character.race}</p>
        :
        <p>{character.subrace}</p>
        }
        <p>{character.class} {character.level}</p>
      </div>
      <div className='flex justify-center'>
        <p>HP: </p>
        <p>{character.currentHP}</p>
        <p>/ {character.maxHP}</p>
      </div>
      <div className='flex justify-around'>
        <p>AC: {character.AC}</p>
        <p>Initiative: {character.initiative}</p>
        <p>Perception: {character.perception}</p>
      </div>
    </div>
  )
}

export default CharacterCard;