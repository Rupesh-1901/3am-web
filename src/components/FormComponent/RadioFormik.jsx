import { ErrorMessage, Field } from "formik";
import React from "react";
import { Label, Radio } from "./RadioGroupInput/InputStyles";
import { TextError } from "./TextError";

export const RadioFormik = (props) => {
  const { name, editstyle, options, ...rest } = props;

  return (
    <div className="radioFormik  formikComponentContainer" style={editstyle}>
      <Field name={name} {...rest}>
        {({ field }) => {
          return options.map((option) => {
            // console.log("field", field, field?.value, option?.id);

            return (
              <div style={{ display: "flex", alignItems: "center" }}>
                <Radio
                  id={option.value}
                  type="radio"
                  {...field}
                  value={option.value}
                  checked={field.value === option.value}
                  {...props}
                />
                <Label htmlFor={option.value} style={{ cursor: "pointer" }}>
                  <span
                    style={{
                      fontSize: "13px",
                      color: " var(--people-sol-dark-grey, #555)",
                      fontFamily: "Poppins",
                      fontWeight: "500",
                      lineHeight: "17px",
                    }}
                  >
                    {option.label}
                  </span>
                </Label>
              </div>
            );
          });
        }}
      </Field>
      <ErrorMessage
        name={name}
        component={TextError}
        styles={{ bottom: "-10px", left: "-10px" }}
      />
    </div>
  );
};
// font-style: normal;
// font-weight: 400;
// line-height: 17.32px;
// letter-spacing: 0.24px;
