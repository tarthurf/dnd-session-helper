import React, { useContext, useState, useEffect } from 'react';
import UserContext from '../utils/UserContext';

const UserCard = props => {

  const socket = props.socket

  const { userCharacter } = useContext(UserContext);

  const [ hpState, sethpState ] = useState(userCharacter.currentHP)

  const name = userCharacter.name;

  const handleHP = e => {
    sethpState(e.target.value);
    console.log(hpState)
    socket.emit('update-hp', {hpState, name});
  };

  useEffect(() => {
  },[socket])

  return(
    <div className='flex flex-col justufy-center w-3/4 border border-black text-2xl'>
      <div className='flex justify-around items-center'>
        <h1>{userCharacter.name}</h1>
        {userCharacter.subrace === "" ?
        <p>{userCharacter.race}</p>
        :
        <p>{userCharacter.subrace}</p>
        }
        <p>{userCharacter.class} {userCharacter.level}</p>
      </div>
      <div className='flex justify-center'>
        <p>HP: </p>
        <input className='w-16'
          type="number"
          size="3"
          max={userCharacter.maxHP}
          value={hpState} 
          onChange={handleHP}>
        </input>
        <p>/ {userCharacter.maxHP}</p>
      </div>
      <div className='flex justify-around'>
        <p>AC: {userCharacter.AC}</p>
        <p>Initiative: {userCharacter.initiative}</p>
        <p>Perception: {userCharacter.perception}</p>
      </div>
    </div>
  )
}

export default UserCard;