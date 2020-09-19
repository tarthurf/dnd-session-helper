import React, { useContext, useState, useEffect } from 'react';
import UserContext from '../../utils/UserContext';
import { abilityBonusCalc, formatString, calcDex } from '../../utils/helpers';

const UserCard = props => {

  const socket = props.socket

  const maxDex = () => {
    const dex = abilityBonusCalc(userCharacter.dex)
    const maxDex = userCharacter.ACmax
    if (maxDex !== 0 && dex >= maxDex) return maxDex;
    else return dex;
  }

  const { userCharacter } = useContext(UserContext);

  console.log(userCharacter)

  const [ hpState, sethpState ] = useState(userCharacter.currentHP)

  const name = userCharacter.name;

  const handleHP = e => {
    sethpState(e.target.value);
    console.log(hpState)
  };

  useEffect(() => {
  },[socket])

  return(
    <div className='flex flex-col justufy-center m-2 p-2 border border-black text-2xl space-y-2'>
      <div className='flex justify-around items-center space-x-4'>
        <h1>{userCharacter.name}</h1>
        {userCharacter.subrace === "" ?
        <p>{formatString(userCharacter.race)}</p>
        :
        <p>{formatString(userCharacter.subrace)}</p>
        }
        <p>{formatString(userCharacter.class)} {userCharacter.level}</p>
      </div>
      <div className='flex justify-center space-x-4'>
        <p>HP: </p>
        <input className='w-16'
          type="number"
          size="3"
          max={999}
          value={hpState} 
          onChange={handleHP}
        >
        </input>
        <p>/ {userCharacter.maxHP}</p>
        <button className='border border-black ml-2 px-1'
          onClick={() => {
          socket.emit('update-hp', {hpState, name});
          }}>
          Set HP 
        </button>
      </div>
      <div className='flex justify-around space-x-4'>
        <p>AC: {userCharacter.armor + userCharacter.shield + calcDex(abilityBonusCalc(userCharacter.dex), userCharacter.maximumDexterity) + userCharacter.acMiscBonus}</p>
        <p>Initiative: {abilityBonusCalc(userCharacter.dex)}</p>
        <p>Perception: {
          userCharacter.skills.perception.trained === true ?
          10 + userCharacter.proficiencyBonus + abilityBonusCalc(userCharacter.wis)
          :
          10 + abilityBonusCalc(userCharacter.wis)
        }</p>
      </div>
    </div>
  )
}

export default UserCard;