import React from 'react';
import { abilityBonusCalc, calcDex } from '../../../utils/helperFunctions';
import FormNumberInput from '../formInputSegments/FormNumberInput';

const CharacterSheetCombatStats = props => {

  const handleChange = props.handleChange;
  let values = props.values;

  return (
    <React.Fragment>
      <div className='flex justify-between'>
        {/* Displays total calculated Armor Class */}
        <div>
          <p>{parseInt(values.armor) + parseInt(values.shield) + parseInt(calcDex(abilityBonusCalc(values.dex), values.maximumDexterity)) + parseInt(values.acMiscBonus)}</p>
          <p>Armor Class</p>
        </div>

        {/* Displays total calculated initiative */}
        <div>
          <p>{abilityBonusCalc(values.dex)}</p>
          <p>Initiative</p>
        </div>

        {/* Displays speed */}
        <FormNumberInput
          label="Speed"
          name="speed"
          handleChange={handleChange}
          value={values.speed}
          min={0}
          max={120}
          step={5}
        />
      </div>

      <div>
        {/* Displays and adjusts current armor rating */}
        <FormNumberInput
          label="Armor Rating"
          name="armor"
          handleChange={handleChange}
          value={values.armor}
          min={10}
          max={99}
        />

        {/* Displays and adjusts current shield rating */}
        <FormNumberInput
          label="Shield Rating"
          name="shield"
          handleChange={handleChange}
          value={values.shield}
          min={0}
          max={99}
        />

        {/* Displays and adjusts current armor maximum dexterity */}
        <FormNumberInput
          label="Maximum Dexterity"
          name="maximumDexterity"
          handleChange={handleChange}
          value={values.maximumDexterity}
          min={-1}
          max={99}
        />

        {/* Displays and adjusts any misc armor bonuses */}
        <FormNumberInput
          label="Misc Armor Bonuses"
          name="acMiscBonus"
          handleChange={handleChange}
          value={values.acMiscBonus}
          min={0}
          max={99}
        />
      </div>

      <div>
        {/* Displays current total hp */}
        <p>HP: {parseInt(values.currentHP) + parseInt(values.tempHP)}</p>

        {/* Displays and adjusts Max HP */}
        <FormNumberInput
          label="Max Hit Points"
          name="maxHP"
          handleChange={handleChange}
          value={values.maxHP}
          min={1}
          max={999}
        />
        
        {/* Displays and adjusts current HP */}
        <FormNumberInput
          label="Current Hit Points"
          name="currentHP"
          handleChange={handleChange}
          value={values.currentHP}
          min={0}
          max={values.maxHP}
        />
        
        {/* Displays and adjusts any temporary HP */}
        <FormNumberInput
          label="Temporary Hit Points"
          name="tempHP"
          handleChange={handleChange}
          value={values.tempHP}
          min={0}
          max={999}
        />
      </div>

    </React.Fragment>
  )
}

export default CharacterSheetCombatStats;