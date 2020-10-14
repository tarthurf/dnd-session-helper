import React from 'react';
import { formatString } from '../../../utils/helperFunctions';
import FormMultiSelectSegment from './buildSegments/FormMultiSelectSegment';
import { classes, backgrounds } from '../../../utils/helperLists'

const MultiInputSelections = props => {

  const handleChange = props.handleChange;
  const values = props.values;

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

    </React.Fragment>
  )
}

export default MultiInputSelections;