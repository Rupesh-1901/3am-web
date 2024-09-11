
import { ErrorMessage, Field } from 'formik'
import React from 'react'
import { SelectCustom } from './SelectCustom';
import { TextError } from './TextError';

 const SelectFormError = (props) => {
    const {onChange,name,options}=props

  return (
  <div className='formikComponentContainer'>
      <Field
    {...props}
    className="custom-select"
    options={options}
    onChange={onChange}
    component={SelectCustom}
    placeholder="Select"
  />
  <ErrorMessage name={name} component={TextError} />
  </div>
  )
}
export {SelectFormError}