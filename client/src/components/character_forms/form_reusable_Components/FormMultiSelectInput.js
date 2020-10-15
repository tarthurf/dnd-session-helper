import React from 'react';

const FormMultiSelectSegment = props => {

  return (
    <React.Fragment>
      <label>{props.label}</label>
      <select
        name={props.name}
        onChange={props.handleChange}
        defaultValue={props.value}
      >
        {props.children}
        </select>
    </React.Fragment>
  )
}

export default FormMultiSelectSegment;