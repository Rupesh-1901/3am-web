import { CheckBox, YesNo } from "./RadioGroupInput/InputStyles";
import React from "react";
const YesNoCustom = (props) => {
  const {
    id,
    errorsParam,
    touchedParam,
    onChangeyes,
    onChangeNo,
    checkedyes,
    checkedNo
  }=props
  const [bool, setbool] = React.useState('Yes');
  return (
    <div className="WrapperCheck">
      <YesNo type="radio" {...props}   value={'Yes'}    checked={checkedyes}   onChange={onChangeyes}/>
      <label className="label-custom" label-custom htmlFor={id}>
        Yes
      </label>
      <YesNo
       {...props}
        type='radio'
        onChange={onChangeNo}
        value={'No'}
       checked={checkedNo} 
      />
      <label className="label-custom" label-custom htmlFor={id}>
        No
      </label>
      {errorsParam && touchedParam ? (
        <p className="form-error">{errorsParam}</p>
      ) : null}
    </div>
  );
};

export { YesNoCustom };
