import React, { useContext, useState, useEffect } from 'react';
<<<<<<< HEAD:client/src/components/UserCard.js
import UserContext from '../utils/UserContext';
import { abilityBonusCalc, formatString, calcDex } from '../utils/helpers';
=======
import UserContext from '../../utils/UserContext';
import { abilityBonusCalc, formatString } from '../../utils/helpers';
import API from '../../utils/API'
>>>>>>> bd3ae09c0b5021521f5b05ac302ca24b607f19eb:client/src/components/characterViews/UserCard.js

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
<<<<<<< HEAD:client/src/components/UserCard.js
    <div className='flex flex-col justufy-center m-2 p-2 border border-black text-2xl space-y-2'>
      <div className='flex justify-around items-center space-x-4'>
=======
    <div className='flex flex-col justufy-center w-3/4 border border-black text-2xl'>
      <div className='flex justify-around items-center'>
>>>>>>> bd3ae09c0b5021521f5b05ac302ca24b607f19eb:client/src/components/characterViews/UserCard.js
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
          API.updateCharacterById(userCharacter._id, {currentHP: hpState});
          }}>
          Set HP 
        </button>
      </div>
<<<<<<< HEAD:client/src/components/UserCard.js
      <div className='flex justify-around space-x-4'>
        <p>AC: {userCharacter.armor + userCharacter.shield + calcDex(abilityBonusCalc(userCharacter.dex), userCharacter.maximumDexterity) + userCharacter.acMiscBonus}</p>
=======
      <div className='flex justify-around'>
        <p>AC: {userCharacter.ACarmor + maxDex() + userCharacter.ACshield + userCharacter.ACmiscBonus}</p>
>>>>>>> bd3ae09c0b5021521f5b05ac302ca24b607f19eb:client/src/components/characterViews/UserCard.js
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