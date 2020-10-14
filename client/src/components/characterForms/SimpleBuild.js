import React from 'react';
import useForm from '../../utils/useForm';
import NumberInputSelection from './buildSections/NumberInputSelections';
import API from '../../utils/API';
import MultiInputSelections from './buildSections/MultiInputSelections';
import { formatString } from '../../utils/helperFunctions';
import { races } from '../../utils/helperLists';
import { SubraceSwitch } from '../../utils/switchHelpers';

const SimpleBuild = props => {

  let state = props.state;
  const setState = props.setState;

  // posts the new character to the database and terminates the character build view
  const characterSubmit = () => {
    API.createCharacter(values)
    setState(!state)
  }

  // this handles the form changes and executes characterSubmit function on submit
  // race, class and background are set as the first option of drop down menu's to ensure a selection was made
  const { values, handleSubmit, handleChange } = useForm(
    {
      name: "",
      race: "dragonborn",
      subrace: "",
      class: "Barbarian",
      level: 1,
      background: "Acolyte",
      maxHP: 0,
      currentHP: 0,
      str: 10,
      dex: 10,
      con: 10,
      int: 10,
      wis: 10,
      cha: 10,
      armor: 10,
      shield: 0,
      maximumDexterity: 0,
      acMiscBonus: 0,
      proficiencyBonus: 0,
    },
    characterSubmit
  )

  return (
    <form className='flex flex-col items-center gap-y-2'
      onSubmit={handleSubmit}
    >
      <label>Character Name:</label>
      <input
        name="name"
        type="text"
        placeholder="Enter name"
        onChange={handleChange}
        value={values.name}
        required
      />

      <label>Race:</label>
      <select
        name="race"
        onChange={handleChange}
        value={values.race}
      >
        {races.map((race, i) => (
          <option key={i + 20} value={race}>{formatString(race)}</option>
        ))}
      </select>

      <label>Subrace:</label>
      <select
        name="subrace"
        onChange={handleChange}
        value={values.subrace}
      >
        {SubraceSwitch(values.race).map((subrace, i) => (
          <option key={i + 40} value={subrace}>{formatString(subrace)}</option>
        ))}
      </select>

      <MultiInputSelections
        handleChange={handleChange}
        values={values}
      />

      <NumberInputSelection
        handleChange={handleChange}
        values={values}
      />


      <button className='border border-black m-2' type="submit">
        Create character
      </button>
    </form>
  )
}

export default SimpleBuild;