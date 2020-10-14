import React from 'react';

const FormNumberInput = props => {

  return (
    <React.Fragment>
      <label>{props.label}</label>
      <input
        name={props.name}
        type="number"
        onChange={props.handleChange}
        value={props.value}
        min={props.min}
        max={props.max}
        required
      />
    </React.Fragment>
  )
}

export default FormNumberInput;