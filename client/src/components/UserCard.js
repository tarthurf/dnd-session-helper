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
    <div className='border-black'>
      <h1>Name: {userCharacter.name}</h1>
      <span><h2>Race: {userCharacter.race}</h2><h2>Subrace: {userCharacter.subrace}</h2></span>
      <span><h2>Class: {userCharacter.class}</h2><h2>Level: {userCharacter.level}</h2></span>
      <span>Current HP<textarea value={hpState} onChange={handleHP}></textarea><h2>Max HP: {userCharacter.maxHP}</h2></span>
      <span><h2>AC: {userCharacter.AC}</h2><h2>Initiative: {userCharacter.initiative}</h2><h2>Perception: {userCharacter.perception}</h2></span>
    </div>
  )
}

export default UserCard;