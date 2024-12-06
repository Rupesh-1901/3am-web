
import { ErrorMessage, Field } from 'formik'
import React from 'react'
import CustomSelectString from './CustomSelectString';
import { TextError } from './TextError';

 const SelectFormikMultiString = (props) => {
    const {name,options}=props

  return (
  <div className='formikComponentContainer'>
      <Field
      {...props}
    className="custom-select"
    name={name}
    options={options}
    component={CustomSelectString}
    multi={true}
  />
  <ErrorMessage name={name} component={TextError} />
  </div>
  )
}
export {SelectFormikMultiString}