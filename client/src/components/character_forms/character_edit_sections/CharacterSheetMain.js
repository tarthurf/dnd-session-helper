import React from 'react';
import { formatString } from '../../../utils/helperFunctions';
import { classes, backgrounds } from '../../../utils/helperLists';
import FormMultiSelectSegment from '../form_reusable_Components/FormMultiSelectInput';

const CharacterSheetMain = props => {

  const handleChange = props.handleChange;
  let values = props.values

  return (
    <React.Fragment>
      <FormMultiSelectSegment
        label="Class:"
        name="class"
        onChange={handleChange}
        value={values.class}
      >
        {classes.map((charClass, i) => (
          <option key={i + 60} value={charClass}>{formatString(charClass)}</option>
        ))}
      </FormMultiSelectSegment>

      <FormMultiSelectSegment
        label="Background:"
        name="background"
        onChange={handleChange}
        value={values.background}
      >
        {backgrounds.map((background, i) => (
          <option key={i + 80} value={background}>{formatString(background)}</option>
        ))}
      </FormMultiSelectSegment>

      <FormMultiSelectSegment
        label="Alignment:"
        name="alignment"
        onChange={handleChange}
        value={values.alignment}
      >
        <option value="lg">Lawful Good</option>
        <option value="ng">Neutral Good</option>
        <option value="cg">Chaotic Good</option>
        <option value="ln">Lawfule Neutral</option>
        <option value="n">Neutral</option>
        <option value="cn">Chaotic Neutral</option>
        <option value="le">Lawful Evil</option>
        <option value="ne">Neutral Evil</option>
        <option value="ce">Chaotic Evil</option>
      </FormMultiSelectSegment>

    </React.Fragment>
  )
}

export default CharacterSheetMain;