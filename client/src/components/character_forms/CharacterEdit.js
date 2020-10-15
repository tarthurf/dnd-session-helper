import React, { useContext } from 'react';
import CharacterSheetMain from './character_edit_sections/CharacterSheetMain'
import CharacterSheetAbilities from './character_edit_sections/CharacterSheetAbilities'
import CharacterSheetSkillsSaves from './character_edit_sections/CharacterSheetSkillsSaves'
import CharacterSheetCombatStats from './character_edit_sections/CharacterSheetCombatStats'
import UserContext from '../../utils/UserContext';
import useForm from '../../utils/useForm';
import API from '../../utils/API';
import { formatString } from '../../utils/helperFunctions';
import { SubraceSwitch } from '../../utils/switchHelpers';

// This component renders the character sheet on the left side of application after player has selected a character

const CharacterEdit = props => {

  const socket = props.socket;

  const { userCharacter } = useContext(UserContext);

  // this function checks if any items in an array could be an integer
  // If any items could be converted from string to integer it does so
  const stringIntConvert = obj => {

    // this line converts a .json object of key/value pairs and turns each pair into an array
    // each key/value array is then stored in a single array
    // we then map through each array to check and see if any values can be an integer
    Object.entries(obj).map(item => {

      // if a value can be an integer we parse the string into an integer and reassign the value as such
      if ((item[1] >>> 0 === parseFloat(item)) === true) item = parseInt(item[1]);
      return console.log(`Values: ${item[0]}: ${item[1]} is a ${typeof item[1]}`)
    })
  }

  // timeouts were used here in place of async functions
  // saves any changed values on the players character sheet to the database and updates their character sheet
  // TODO: update to async function
  const updateChar = () => {
    stringIntConvert(values)
    setTimeout(() => socket.emit('update-character', values), 1000)
    setTimeout(() => API.updateCharacterById(values._id, values), 1000)
  }

  // this handles changes of all values in the character sheet
  const { values, handleChange, handleSubmit } = useForm(userCharacter, updateChar)

  return (
    <form className='flex flex-col' onSubmit={handleSubmit}>

      <p className='self-center text-2xl'>{values.name}</p>

      <div className='flex justify-evenly border-b border-black'>

        <CharacterSheetMain
          handleChange={handleChange}
          values={values}
        />

        <div className='flex flex-col'>
          <div className='flex border-b border-black'>
            <select
              name="race"
              onChange={handleChange}
              value={values.race}
              required
            >
              <option value="dragonborn">Dragonborn</option>
              <option value="dwarf">Dwarf</option>
              <option value="elf">Elf</option>
              <option value="gnome">Gnome</option>
              <option value="half-elf">Half-Elf</option>
              <option value="halfling">Halfling</option>
              <option value="half-orc">Half-Orc</option>
              <option value="human">Human</option>
              <option value="tiefling">Tiefling</option>
            </select>

            <select
              name="subrace"
              onChange={handleChange}
              value={values.subrace}
              required
            >
              {SubraceSwitch(values.race).map((subrace, i) => (
                <option key={i} value={subrace}>{formatString(subrace)}</option>
              ))}
            </select>
          </div>
          <label className='self-center'>Race</label>
        </div>
      </div>

      <div className="flex">
        <div className='flex flex-col items-center border border-black'>

          <CharacterSheetAbilities
            handleChange={handleChange}
            values={values}
          />

        </div>
        <div className='flex flex-col mx-2 border border-black p-1'>

          <CharacterSheetSkillsSaves
            handleChange={handleChange}
            values={values}
          />

        </div>
        <div className='flex flex-col mx-2 border border-black'>

          <CharacterSheetCombatStats
            handleChange={handleChange}
            values={values}
          />
          <button className='border border-black bg-green-300 m-2'
            type="submit"
          >
            Update {userCharacter.name}
          </button>
        </div>
      </div>

    </form>
  )
}

export default CharacterEdit;