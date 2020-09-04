import React from 'react';
import useForm from '../../utils/useForm';
import API from '../../utils/API';
const { SubraceSwitch } = require('../../utils/switchHelpers.js')

const SimpleBuild = props => {

  let state = props.state;
  const setState = props.setState;

  const characterSubmit = () => {
    console.log(values)
    values.currentHP = values.maxHP;
    API.createCharacter(values)
    setState(!state)
  }

  const { values, handleSubmit, handleChange } = useForm(
    {
      name: "",
      race: "dragonborn",
      subrace: "",
      class: "",
      level: "",
      maxHP: "",
      currentHP: "",
      AC: "",
      initiative: "",
      perception: "",
    },
    characterSubmit
  )

  return(
    <form className='flex flex-col items-center gap-y-2'
      onSubmit={handleSubmit}
    >
      <label>
        What is your character's name?
      </label>
        <input
          name="name"
          type="text"
          placeholder="Enter name"
          onChange={handleChange}
          value={values.name}
          required
        />

      <label>
        What is your character's race?
      </label>
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

      <label>
        If applicable, What is your character's subrace?
      </label>
        <select
          name="subrace"
          onChange={handleChange}
          value={values.subrace}
        >
        {SubraceSwitch(values.race).map((subrace, i) => (
          <option key={i} value={subrace}>{subrace.charAt(0).toUpperCase() + subrace.slice(1)}</option>
        ))}
        
        </select>

      <label>
        What is your character's class?
      </label>
        <input
          name="class"
          type="text"
          placeholder="Enter class"
          onChange={handleChange}
          value={values.class}
          required
        />

      <label>
        What is your character's level?
      </label>
        <input
          name="level"
          type="text"
          placeholder="Enter level"
          onChange={handleChange}
          value={values.level}
          required
        />

      <label>
        What is your character's max HP?
      </label>
        <input
          name="maxHP"
          type="text"
          placeholder="Enter max HP"
          onChange={handleChange}
          value={values.maxHP}
          required
        />

      <label>
        What is your character's armor class?
      </label>
        <input
          name="AC"
          type="text"
          placeholder="Enter AC"
          onChange={handleChange}
          value={values.AC}
          required
        />

      <label>
        What is your character's initiative bonus?
      </label>
        <input
          name="initiative"
          type="text"
          placeholder="Enter initiative Bonus"
          onChange={handleChange}
          value={values.initiative}
          required
        />

      <label>
        What is your character's passive perception?
      </label>
        <input
          name="perception"
          type="text"
          placeholder="Enter perception bonus +10"
          onChange={handleChange}
          value={values.perception}
          required
        />
        <button className='border border-black m-2'
          type="submit"
        >
          Create character
        </button>
    </form>
  )
}

export default SimpleBuild;