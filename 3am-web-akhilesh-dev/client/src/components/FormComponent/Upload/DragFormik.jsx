
import { ErrorMessage, Field } from 'formik'
import React from 'react'
import { TextError } from '../TextError';
import { UploadComponent } from './UploadComponent';

const DragFormik = (props) => {
    const {name}=props

  return (
  <div className="formikComponentContainer">
      <Field
      {...props}
    className="custom-select"
    name={name}
    component={UploadComponent}

  />
  <ErrorMessage name={name} component={TextError} />
  </div>
  )
}
export {DragFormik};
