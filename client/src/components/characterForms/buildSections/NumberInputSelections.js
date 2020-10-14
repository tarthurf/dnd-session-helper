import React from 'react';
import FormNumberInput from './buildSegments/FormNumberInput'

const NumberInputSelections = props => {

  const handleChange = props.handleChange;
  const values = props.values;

  return (
    <React.Fragment>
      <FormNumberInput
        label="Character level:"
        name="level"
        handleChange={handleChange}
        value={values.level}
        min={1}
        max={20}
      />

      <FormNumberInput
        label="Max Hit Points:"
        name="maxHP"
        handleChange={handleChange}
        value={values.maxHP}
        min={1}
        max={999}
      />

      <p>Ability Scores (include racial adjustments)</p>
      <FormNumberInput
        label="Strength"
        name="str"
        handleChange={handleChange}
        value={values.str}
        min={1}
        max={20}
      />

      <FormNumberInput
        label="Dexterity"
        name="dex"
        handleChange={handleChange}
        value={values.dex}
        min={1}
        max={20}
      />

      <FormNumberInput
        label="Constitution"
        name="con"
        handleChange={handleChange}
        value={values.con}
        min={1}
        max={20}
      />

      <FormNumberInput
        label="Intelligence"
        name="int"
        handleChange={handleChange}
        value={values.int}
        min={1}
        max={20}
      />

      <FormNumberInput
        label="Wisdom"
        name="wis"
        handleChange={handleChange}
        value={values.wis}
        min={1}
        max={20}
      />

      <FormNumberInput
        label="Charisma"
        name="cha"
        handleChange={handleChange}
        value={values.cha}
        min={1}
        max={20}
      />

      <FormNumberInput
        label="Proficiency Bonus:"
        name="proficiencyBonus"
        handleChange={handleChange}
        value={values.proficiencyBonus}
        min={0}
        max={99}
      />
 
      <FormNumberInput
        label="Armor Bonus (No armor = 10):"
        name="armor"
        handleChange={handleChange}
        value={values.armor}
        min={10}
        max={99}
      />
 
      <FormNumberInput
        label="Shield Bonus:"
        name="shield"
        handleChange={handleChange}
        value={values.shield}
        min={0}
        max={99}
      />
 
      <FormNumberInput
        label="Maximum Dexterity:"
        name="maximumDexterity"
        handleChange={handleChange}
        value={values.maximumDexterity}
        min={0}
        max={99}
      />
 
    </React.Fragment>
  )
}

export default NumberInputSelections;