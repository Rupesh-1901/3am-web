import React from "react";
import { InputCustom } from "./InputCustom";
import { InputCustomFormik } from "./InputCustomFormik";
import { SelectCustom } from "./SelectCustom";
import { SelectFormik } from "./SelectFormik";
import { TextAreaFormik } from "./TextAreaFormik";

export const FormikControl = ( props ) => {
  const { control,...rest } = props;
  switch (control) {
    case "input":return <InputCustomFormik {...rest}/>
    // case "textarea":return <TextAreaFormik {...rest}/>
    // case "select":return <SelectFormik  {...rest}/>
    case "radio":
    case "checkbox":
    case "date":
    default: return null;
  }
};
