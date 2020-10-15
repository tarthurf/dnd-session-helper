import React from 'react';
import { abilityBonusCalc, formatString } from '../../../utils/helperFunctions';

const FormCheckboxSegment = props => {

  let values = props.values;

  // this object stores ability bonuses based on abilities scores for the active character
  // Used for calculating bonuses based on skill and save proficiencies
  const abilityBonus = {
    str: abilityBonusCalc(values.str),
    dex: abilityBonusCalc(values.dex),
    con: abilityBonusCalc(values.con),
    int: abilityBonusCalc(values.int),
    wis: abilityBonusCalc(values.wis),
    cha: abilityBonusCalc(values.cha)
  }

  return (

    <div className='flex flex-col text-sm'>
      <p>{props.label}</p>
      {Object.entries(props.valueGroup).map((obj, i) => (
        obj[1].trained === false ? (
          <div className='flex items-center space-x-2' key={i + props.keyAdd}>
            <input
              key={i + props.keyAdd + 20}
              name={props.name}
              type="checkbox"
              onChange={() => obj[1].trained = !obj[1].trained}
              value={obj[1].trained}
              defaultChecked={false}
            />
            <p>
              {Object.entries(abilityBonus).map(bonus => (
                bonus[0] === obj[1].ability && bonus[1]
              ))}
            </p>
            <label key={i + props.keyAdd + 40}>{formatString(obj[0])}</label>
          </div>
        ) : (
            <div className='flex items-center space-x-2' key={i + props.keyAdd}>
              <input
                key={i + props.keyAdd + 20}
                name={props.name}
                type="checkbox"
                onChange={() => obj[1].trained = !obj[1].trained}
                value={obj[1].trained}
                defaultChecked={true}
              />
              <p>
                {Object.entries(abilityBonus).map(bonus => (
                  bonus[0] === obj[1].ability && bonus[1] + values.proficiencyBonus
                ))}
              </p>
              <label key={i + props.keyAdd + 40}>{formatString(obj[0])}</label>
            </div>
          )
      ))}
    </div>
  )
}

export default FormCheckboxSegment;