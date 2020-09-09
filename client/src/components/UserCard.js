import React, { useContext, useState, useEffect } from 'react';
import UserContext from '../utils/UserContext';
import { abilityBonusCalc, formatString } from '../utils/helpers';

const UserCard = props => {

  const socket = props.socket

  const { userCharacter } = useContext(UserContext);

  const [ hpState, sethpState ] = useState(userCharacter.currentHP)

  const name = userCharacter.name;

  const handleHP = e => {
    sethpState(e.target.value);
    console.log(hpState)
    // socket.emit('update-hp', {hpState, name});
  };

  useEffect(() => {
  },[socket])

  return(
    <div className='flex flex-col justufy-center w-3/4 border border-black text-2xl'>
    {console.log()}
      <div className='flex justify-around items-center'>
        <h1>{userCharacter.name}</h1>
        {userCharacter.subrace === "" ?
        <p>{formatString(userCharacter.race)}</p>
        :
        <p>{formatString(userCharacter.subrace)}</p>
        }
        <p>{formatString(userCharacter.class)} {userCharacter.level}</p>
      </div>
      <div className='flex justify-center'>
        <p>HP: </p>
        <input className='w-16'
          type="number"
          size="3"
          max={userCharacter.maxHP}
          value={hpState} 
          onChange={handleHP}
        >
        </input>
        <p>/ {userCharacter.maxHP}</p>
        <button onClick={() => socket.emit('update-hp', {hpState, name})}>Set HP</button>
      </div>
      <div className='flex justify-around'>
        <p>AC: {userCharacter.AC.armor + userCharacter.AC.shield + abilityBonusCalc(userCharacter.dex) + userCharacter.AC.miscBonus}</p>
        <p>Initiative: {abilityBonusCalc(userCharacter.dex) + userCharacter.initiative.miscBonus}</p>
        <p>Perception: {
          userCharacter.skills.perception.trained === true ?
          10 + userCharacter.proficiencyBonus + abilityBonusCalc(userCharacter.wis) + userCharacter.perception.miscBonus
          :
          10 + abilityBonusCalc(userCharacter.wis) + userCharacter.perception.miscBonus
        }</p>
      </div>
    </div>
  )
}

export default UserCard;