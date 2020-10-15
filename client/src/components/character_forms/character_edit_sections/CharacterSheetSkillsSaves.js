import React from 'react';
import FormCheckboxSegment from '../form_reusable_Components/FormCheckboxSegment';
import FormNumberInput from '../form_reusable_Components/FormNumberInput';

const CharacterSheetSkillsSaves = props => {

  const handleChange = props.handleChange;
  let values = props.values;

  return (
    <React.Fragment>
      <FormNumberInput
        label="Proficiency Bonus"
        name="proficiencyBonus"
        handleChange={handleChange}
        value={values.proficiencyBonus}
        min={1}
        max={99}
      />

       {/* Character sheet check boxes for saving throw bonuses */}
       <FormCheckboxSegment
       values={values}
       label="Saves"
       valueGroup={values.saves}
       keyAdd={100}
       name="saves"
     />

     {/* Character sheet check boxes for skill bonuses */}
     <FormCheckboxSegment
       values={values}
       label="Skills"
       valueGroup={values.skills}
       keyAdd={200}
       name="skills"
     />
    </React.Fragment>
  )
}

export default CharacterSheetSkillsSaves;