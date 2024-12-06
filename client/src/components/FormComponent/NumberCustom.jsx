import React from "react";
import "./FormComponent.css"
const NumberCustom = (props) => {
  const {
    disabled,
    name,
    onChange,
    placeholder,
    type,
    valueParam,
    errorsParam,
    touchedParam,
    onBlur,
  }=props
    return (
    <div>
        <input 
         className="input-shorttext"
         type={'number'}
         name={name}
         onChange={onChange}
         placeholder={placeholder}
         valueParam={valueParam}
         disabled={disabled}
         onBlur={onBlur}
         errorsParam={errorsParam}/>
         
     
      {errorsParam && touchedParam ? (
          <p className="form-error formerr" >{errorsParam}</p>
          ) : null}
       </div>
  );
};
export {NumberCustom};