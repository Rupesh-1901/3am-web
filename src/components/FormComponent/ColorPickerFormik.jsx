
import { ErrorMessage, Field } from 'formik'
import React from 'react'
import { ColorFormik } from './ColorFormik';
import { TextError } from './TextError';
import { useEffect } from 'react';

const ColorPickerFormik = (props) => {
    const {name}=props
 

  return (
  <div className="formikComponentContainer">
      <Field
      {...props}
    className="custom-select"
    name={name}
    component={ColorFormik}

  />
  <ErrorMessage name={name} component={TextError} />
  </div>
  )
}
export {ColorPickerFormik};
