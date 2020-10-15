import React from 'react';
import { abilityBonusCalc } from '../../../utils/helperFunctions';
import FormNumberInput from '../formInputSegments/FormNumberInput';

const CharacterSheetAbilities = props => {

  const handleChange = props.handleChange;
  let values = props.values

  return (
    <React.Fragment>
      <FormNumberInput
        label="Strength"
        name="str"
        handleChange={handleChange}
        value={values.str}
        min={1}
        max={99}
      >
        <p>{abilityBonusCalc(values.str)}</p>
      </FormNumberInput>
      
      <FormNumberInput
        label="Dexterity"
        name="dex"
        handleChange={handleChange}
        value={values.dex}
        min={1}
        max={99}
      >
        <p>{abilityBonusCalc(values.dex)}</p>
      </FormNumberInput>

      <FormNumberInput
        label="Constitution"
        name="con"
        handleChange={handleChange}
        value={values.con}
        min={1}
        max={99}
      >
        <p>{abilityBonusCalc(values.con)}</p>
      </FormNumberInput>

      <FormNumberInput
        label="Intelligence"
        name="int"
        handleChange={handleChange}
        value={values.int}
        min={1}
        max={99}
      >
        <p>{abilityBonusCalc(values.int)}</p>
      </FormNumberInput>

      <FormNumberInput
        label="Wisdom"
        name="wis"
        handleChange={handleChange}
        value={values.wis}
        min={1}
        max={99}
      >
        <p>{abilityBonusCalc(values.wis)}</p>
      </FormNumberInput>

      <FormNumberInput
        label="Charisma"
        name="cha"
        handleChange={handleChange}
        value={values.cha}
        min={1}
        max={99}
      >
        <p>{abilityBonusCalc(values.cha)}</p>
      </FormNumberInput>

    </React.Fragment>
  )
}

export default CharacterSheetAbilities;